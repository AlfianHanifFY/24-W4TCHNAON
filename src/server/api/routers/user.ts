import { hash, hashSync } from "bcryptjs";
import { and, eq } from "drizzle-orm";
import { createHash } from "crypto";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { userActor, userComments, userCountry, userFavorite, userGenre, users, userWatchLater } from "~/server/db/schema";
import { Actor } from "next/font/google";

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
  getUser: publicProcedure.input(z.object({userId :z.string()})).query(async ({ ctx,input }) => {
    // Expected output: seluruh data course yang ada
    // Get all courses
    return await ctx.db.select().from(users).where(eq(users.id,input.userId));
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
      
    }),

    createFavorite: publicProcedure
    .input(z.object({userId :z.string(),movieId : z.string()}))
    .mutation(async ({ctx,input})=>{

      const movie = await ctx.db.select().from(userFavorite).where(and(eq(userFavorite.movieId,input.movieId),eq(userFavorite.userId,input.userId)))
      
      if (movie.length == 0){
        await ctx.db.insert(userFavorite).values({
          movieId : input.movieId,
          userId : input.userId,
        });
        return {message: "new Favorite successfully created"}
      }
      return {message: "new Favorite failed created"}
      
    }),

    createUserActor: publicProcedure
    .input(z.object({userId :z.string(),actor : z.string()}))
    .mutation(async ({ctx,input})=>{

      const movie = await ctx.db.select().from(userActor).where(and(eq(userActor.actor,input.actor),eq(userActor.userId,input.userId)))
      
      if (movie.length == 0){
        await ctx.db.insert(userActor).values({
          actor : input.actor,
          userId : input.userId,
        });
        return {message: "new actor successfully created"}
      }
      return {message: "new actor failed created"}
      
    }),

    createUserGenre: publicProcedure
    .input(z.object({userId :z.string(),genre : z.string()}))
    .mutation(async ({ctx,input})=>{

      const movie = await ctx.db.select().from(userGenre).where(and(eq(userGenre.genre,input.genre),eq(userGenre.userId,input.userId)))
      
      if (movie.length == 0){
        await ctx.db.insert(userGenre).values({
          genre: input.genre,
          userId : input.userId,
        });
        return {message: "new genre successfully created"}
      }
      return {message: "new genre failed created"}
      
    }),

    createUserCountry: publicProcedure
    .input(z.object({userId :z.string(),country : z.string()}))
    .mutation(async ({ctx,input})=>{

      const movie = await ctx.db.select().from(userCountry).where(and(eq(userCountry.country,input.country),eq(userCountry.userId,input.userId)))
      
      if (movie.length == 0){
        await ctx.db.insert(userCountry).values({
          country : input.country,
          userId : input.userId,
        });
        return {message: "new country successfully created"}
      }
      return {message: "new country failed created"}
      
    }),

    

});