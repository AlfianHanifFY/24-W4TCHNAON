/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { movies,  posts } from "~/server/db/schema";

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
});
