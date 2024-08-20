import { hash, hashSync } from "bcryptjs";
import { and, eq } from "drizzle-orm";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const userRouter = createTRPCRouter({



  register: publicProcedure
    .input(z.object({ name: z.string().min(1),email: z.string().email(),password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {

      const pw = hashSync(input.password,10);   
      return await ctx.db.insert(users).values({
        name: input.name,
        email: input.email,
        password: pw
      });
    }),

  authenticateUser: publicProcedure
  .input(z.object(
    {
        email : z.string(),
        password : z.string()
    }
  ))
  .query(async ({ ctx , input }) => {

    const pw = hashSync(input.password,10);

    return await ctx.db
        .select()
        .from(users)
        .where(
            and(
                eq(users.email,input.email),
                eq(users.password,pw)
            ))
  }),
  getAllUsers: publicProcedure.query(async ({ ctx }) => {
    // Expected output: seluruh data course yang ada
    // Get all courses
    return await ctx.db.select().from(users);
  }),

});