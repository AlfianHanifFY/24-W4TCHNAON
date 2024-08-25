import { hash, hashSync } from "bcryptjs";
import { and, eq } from "drizzle-orm";
import { createHash } from "crypto";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { userComments, users, userWatchLater } from "~/server/db/schema";

export const userRouter = createTRPCRouter({

  register: publicProcedure
    .input(z.object({ name: z.string().min(1),email: z.string().email(),password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const pw = createHash('sha256').update(input.password).digest('hex');

      await ctx.db.insert(users).values({
        name: input.name,
        email: input.email,
        password: pw
      });

      return{ message: "new user successfully created"}
    }),

  authenticateUser: publicProcedure
  .input(z.object(
    {
        email : z.string(),
        password : z.string()
    }
  ))
  .query(async ({ ctx , input }) => {

    const pw = createHash('sha256').update(input.password).digest('hex');
    const user = await ctx.db
    .select()
    .from(users)
    .where(
        and(
            eq(users.email,input.email),
            eq(users.password,pw)
        ))
    return user[0]
  }),
  getAllUsers: publicProcedure.query(async ({ ctx }) => {
    // Expected output: seluruh data course yang ada
    // Get all courses
    return await ctx.db.select().from(users);
  }),

  createComment: publicProcedure
    .input(z.object({ userId: z.string(),movieId : z.string(),comment: z.string() , parrent: z.string().optional()}))
    .mutation(async ({ ctx, input }) => {

      // ga ada parrent
      if(input.parrent == null){
        await ctx.db.insert(userComments).values({
          movieId : input.movieId,
          userid : input.userId,
          comment : input.comment
        });
      }else{
        await ctx.db.insert(userComments).values({
          movieId : input.movieId,
          userid : input.userId,
          comment : input.comment,
          parrent: input.parrent
        });
      }

      return{ message: "new comment successfully created"}
    }),

  createWatchLater: publicProcedure
    .input(z.object({userId :z.string(),movieId : z.string()}))
    .mutation(async ({ctx,input})=>{

      const movie = await ctx.db.select().from(userWatchLater).where(and(eq(userWatchLater.movieId,input.movieId),eq(userWatchLater.userId,input.userId)))
      
      if (movie.length == 0){
        await ctx.db.insert(userWatchLater).values({
          movieId : input.movieId,
          userId : input.userId,
        });
        return {message: "new watchLater successfully created"}
      }
      return {message: "new watchLater failed created"}
      
    })

});