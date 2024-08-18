import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './server/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(db),
  providers: [
    github({ allowDangerousEmailAccountLinking: true }),
    CredentialsProvider({}),
  ],
  callbacks: {},
});
