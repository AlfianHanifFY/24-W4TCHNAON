/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './server/db';
import email from 'next-auth/providers/email';
import credentials from 'next-auth/providers/credentials';
import { hash } from 'crypto';
import { hashSync } from 'bcryptjs';
import { string, z } from 'zod';
import { api } from './trpc/server';


export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(db),
  pages : {
    signIn : '/login'
  },
  providers: [
    github({ allowDangerousEmailAccountLinking: true }),
    Credentials({
      credentials :{
        email: {},
        password : {}
      },
      authorize : async (credentials) => {
        let user = null
        
        if (typeof credentials.email !== "string" || typeof credentials.password !== "string") {
          throw new Error("Invalid email or password");
        }
        // logic to salt and hash password
        

        // logic to verify if the user exists
        user = await api.user.authenticateUser({email : credentials.email, password : credentials.password})

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with their profile data
        return user
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    session(params) {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.id as string,
          randomKey: params.token.randomKey,
        },
      };
    },
   
  },
});


