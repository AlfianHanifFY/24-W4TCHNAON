/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { eq } from "drizzle-orm";
import { comment } from "postcss";
import { string, z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { movieActors, movieCountries, movieGenres, moviePosters, movieReleases, movies,  movieStudios,  movieThemes,  posts, userComments, users } from "~/server/db/schema";

export const movieRouter = createTRPCRouter({

  getRecommendationByMovie: publicProcedure
  .input(z.object({ movieId : z.string() }))
    .query(async ({ ctx, input }) => {
        

        const fetchData = async () => {
            const url = "http://localhost:8000/data?" + "movieId=" + input.movieId;
            console.log(url)
            const response = await fetch(url);
            const data = await response.json();
            return data;
          }
        return await fetchData()
    }),

    getAllmovies: publicProcedure.query(async ({ ctx }) => {
      // Expected output: seluruh data course yang ada
      // Get all courses
      return await ctx.db.select().from(movies).limit(5);
    }),

    getMovieDetail: publicProcedure
      .input(z.object({ movieId: z.string() }))
      .query(async ({ ctx, input }) => {

      const genre = await ctx.db
        .select()
        .from(movieGenres)
        .where(eq(movieGenres.movieId, input.movieId))

      const detail = await ctx.db
        .select()
        .from(movies)
        .where(eq(movies.id, input.movieId));

      const country= await ctx.db
        .select()
        .from(movieCountries)
        .where(eq(movieCountries.movieId, input.movieId))

      const actor = await ctx.db
        .select()
        .from(movieActors)
        .where(eq(movieActors.movieId, input.movieId))
      
      const poster = await ctx.db
        .select()
        .from(moviePosters)
        .where(eq(moviePosters.movieId, input.movieId))

      const release = await ctx.db
        .select()
        .from(movieReleases)
        .where(eq(movieReleases.movieId, input.movieId))

      const theme = await ctx.db
        .select()
        .from(movieThemes)
        .where(eq(movieThemes.movieId, input.movieId))

      const studio = await ctx.db
        .select()
        .from(movieStudios)
        .where(eq(movieStudios.movieId, input.movieId))

      return {detail,genre,country,actor,poster,release,theme,studio}
    }),

    getMovieComment: publicProcedure
      .input(z.object({ movieId : z.string() }))
      .query(async ({ ctx, input }) => {

        const comment = await ctx.db 
          .select()
          .from(userComments)
          .leftJoin(movies,eq(movies.id,userComments.movieId))
          .leftJoin(users,eq(users.id,userComments.userid))
          .where(eq(userComments.movieId,input.movieId))
        
        return comment
      }), 
    
  });
