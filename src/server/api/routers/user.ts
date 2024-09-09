import { hash, hashSync } from "bcryptjs";
import { and, eq } from "drizzle-orm";
import { createHash } from "crypto";
import { z } from "zod";
import { Random } from 'random-js';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { userActor, userComments, userCountry, userFavorite, userGenre, userList, userListMovie, users, userWatchLater } from "~/server/db/schema";
import { Actor } from "next/font/google";

export const userRouter = createTRPCRouter({

  register: publicProcedure
    .input(z.object({ name: z.string().min(1),email: z.string().email(),password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const pw = createHash('sha256').update(input.password).digest('hex');
      const random = new Random();
      const arrAvatar = ['https://api.dicebear.com/9.x/thumbs/svg?seed=Felix','https://api.dicebear.com/9.x/thumbs/svg?seed=Tigger','https://api.dicebear.com/9.x/thumbs/svg?seed=Cleo','https://api.dicebear.com/9.x/thumbs/svg?seed=Boots','https://api.dicebear.com/9.x/thumbs/svg?seed=Zoey','https://api.dicebear.com/9.x/notionists/svg?seed=Felix','https://api.dicebear.com/9.x/notionists/svg?seed=Zoey','https://api.dicebear.com/9.x/notionists/svg?seed=Charlie']
      const avatar = random.pick(arrAvatar)
      await ctx.db.insert(users).values({
        name: input.name,
        email: input.email,
        password: pw,
        image:avatar,
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
      if(input.comment == null || input.comment == ''){
        return {'message' : 'comment null'}
      }
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

      if(input.movieId == null || input.movieId == ''){
        return {'message' : 'movieId null'}
      }
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
      if(input.movieId == null || input.movieId == ''){
        return {'message' : 'movieId null'}
      }

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

      const movie = await ctx.db.select().from(userCountry).where(eq(userCountry.userId,input.userId))
      
      if (movie.length == 0){
        await ctx.db.insert(userCountry).values({
          country : input.country,
          userId : input.userId,
        });
        return {message: "new country successfully created"}
      }
      await ctx.db.update(userCountry).set({
        country : input.country,
        userId : input.userId,
      }).where(eq(userCountry.userId,input.userId));
      return {message: "new country updated"}
      
    }),

    getUserCountry : publicProcedure
    .input(z.object({userId : z.string()}))
    .query(async ({ctx,input}) => {
      return await ctx.db.select({country : userCountry.country}).from(userCountry).where(eq(userCountry.userId,input.userId))
    }),

    getUserGenre : publicProcedure
    .input(z.object({userId: z.string()}))
    .query(async ({ ctx , input }) => {

      const list = await ctx.db
      .select({genre : userGenre.genre})
      .from(userGenre)
      .where(eq(userGenre.userId,input.userId))

      return {list}
  }),

  getUserActor : publicProcedure
    .input(z.object({userId: z.string()}))
    .query(async ({ ctx , input }) => {

      const list = await ctx.db
      .select({actor : userActor.actor})
      .from(userActor)
      .where(eq(userActor.userId,input.userId))
      return {list}
  }),

  deleteUserFavorite : publicProcedure
  .input(z.object({userId : z.string(), movieId : z.string()}))
  .mutation(async ({ctx,input}) => {
    await ctx.db
        .delete(userFavorite)
        .where(
          and(
            eq(userFavorite.userId,input.userId),
            eq(userFavorite.movieId,input.movieId)
          ))
      return {message : "Movie successfully removed"}

  }),

  deleteUserWatchLater : publicProcedure
  .input(z.object({userId : z.string(), movieId : z.string()}))
  .mutation(async ({ctx,input}) => {
    await ctx.db
        .delete(userWatchLater)
        .where(
          and(
            eq(userWatchLater.userId,input.userId),
            eq(userWatchLater.movieId,input.movieId)
          ))
      return {message : "Movie successfully removed"}
    }),

    createUserList: publicProcedure
    .input(z.object({userId :z.string(),listName : z.string(),creator: z.string(),icon : z.string()}))
    .mutation(async ({ctx,input})=>{

      await ctx.db.insert(userList).values({
        userId : input.userId,
        listName : input.listName,
        creator : input.creator,
        icon : input.icon,
      })

      return {message: "new list created"}
    }),

    createUserListMovie: publicProcedure
    .input(z.object({movieId :z.string(),listId : z.string()}))
    .mutation(async ({ctx,input})=>{

      await ctx.db.insert(userListMovie).values({
        movieId : input.movieId,
        listId : input.listId,
      })

      return {message: "new movie in list created"}
    }),

})