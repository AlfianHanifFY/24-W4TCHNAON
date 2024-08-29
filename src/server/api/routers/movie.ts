/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { eq, sql } from "drizzle-orm";
import { float } from "drizzle-orm/mysql-core";
import { comment } from "postcss";
import { string, z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { movieActors, movieCountries, movieGenres, moviePosters, movieReleases, movies,  movieStudios,  movieThemes,  posts, userComments, userFavorite, users, userWatchLater } from "~/server/db/schema";

export const movieRouter = createTRPCRouter({


  getRecommendationByMovie: publicProcedure
  .input(z.object({ movieId : z.string() }))
    .query(async ({ ctx, input }) => {

        const fetchData = async () => {
            const url = "http://103.157.97.145:8001/data?" + "movieId=" + input.movieId ;
            console.log(url)
            const response = await fetch(url);
            const data = await response.json();
            return data;
          }
        return fetchData()
    }),

    getRecommendationByCountry: publicProcedure
      .input(z.object({ country : z.string() }))
        .query(async ({ ctx, input }) => {
        

        const fetchData = async () => {
            const url = "http://103.157.97.145:8001/dataByCountry?" + "country=" + input.country;
            console.log(url)
            const response = await fetch(url);
            const data = await response.json();
            return data;
          }
        return fetchData()
    }),

    getRecommendationByActorGenre: publicProcedure
      .input(z.object({ actor: z.string().array(), genre: z.string().array() }))
      .query(async ({ ctx, input }) => {
        

        const fetchData = async () => {
          const params = new URLSearchParams();
        
          input.actor.forEach(a => params.append('actor', a));
          input.genre.forEach(g => params.append('genre', g));
          
          const url = `http://103.157.97.145:8001/dataByActorGenre?${params.toString()}`;
        
          console.log(url);
        
          const response = await fetch(url);
          const data = await response.json();
          return data;
        };

        return fetchData();
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
          .select(
            {
              commentId : userComments.id,
              userName : users.name,
              userAvatar : users.image,
              comment : userComments.comment,
              parrent : userComments.parrent
            }
            
          )
          .from(userComments)
          .leftJoin(users,eq(users.id,userComments.userid))
          .where(eq(userComments.movieId,input.movieId))

        const mainComment: any[] | PromiseLike<any[]>= []

        comment.forEach((data)=>{
          const reply: { commentId: string; userName: string | null; userAvatar: string | null; comment: string | null; parrent: string | null; }[] = [];
          if (data.parrent === null){
            comment.map((val)=>{
              if(val.parrent === data.commentId){
                reply.push(val);
              }
            })
            const res = {main : data , reply : reply}
            mainComment.push(res)
          }
        });
        
        
        return {list : mainComment}
      }),

      getMovieLeaderBoard: publicProcedure
      .query(async ({ ctx}) => {

        const list = await ctx.db
        .select({id : movies.id,name:movies.name,link:moviePosters.link,rating:movies.rating})
        .from(movies)
        .leftJoin(moviePosters, sql`${movies.id} = ${moviePosters.movieId}`)
        .orderBy(sql`CAST(${movies.rating} AS FLOAT) DESC`)
        .limit(7)


        return {list : list}
    }),

    getMoviePoster: publicProcedure
    .input(z.object({movieId : z.string()}))
      .query(async ({ ctx,input}) => {

        const list = await ctx.db
        .select({id : movies.id,name:movies.name,link:moviePosters.link,rating:movies.rating})
        .from(movies)
        .leftJoin(moviePosters, sql`${movies.id} = ${moviePosters.movieId}`)
        .where(eq(movies.id,input.movieId))

        return {list : list}
    }),

    getRandomMovie: publicProcedure
      .query(async ({ ctx}) => {

        const movie = await ctx.db
        .select()
        .from(movies)
        .leftJoin(moviePosters, eq(movies.id,moviePosters.movieId))
        .orderBy(sql`RANDOM()`)
        .limit(1)


        return movie
    }),

    getFavorite: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx,input}) => {

      const movie = await ctx.db
      .select({
        movieId : movies.id,
        poster : moviePosters.link,
        name : movies.name
      })
      .from(userFavorite)
      .leftJoin(movies,eq(userFavorite.movieId,movies.id))
      .leftJoin(moviePosters, eq(movies.id,moviePosters.movieId))
      .where(eq(userFavorite.userId,input.userId))

      return movie
  }),

  getWatchLater: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx,input}) => {

      const movie = await ctx.db
      .select({
        movieId : movies.id,
        poster : moviePosters.link,
        name : movies.name
      })
      .from(userWatchLater)
      .leftJoin(movies,eq(userWatchLater.movieId,movies.id))
      .leftJoin(moviePosters, eq(movies.id,moviePosters.movieId))
      .where(eq(userWatchLater.userId,input.userId))

      return movie 
    }),

    getPopularMovie: publicProcedure
      .query(async ({ ctx}) => {

        const list = await ctx.db
        .select({id : movies.id,name:movies.name,link:moviePosters.link,rating:movies.rating})
        .from(movies)
        .leftJoin(moviePosters, sql`${movies.id} = ${moviePosters.movieId}`)
        .orderBy(sql`CAST(${movies.rating} AS FLOAT) DESC`)
        .limit(100)


        return {list : list}
    }),

    getLatestMovie: publicProcedure
      .query(async ({ ctx}) => {

        const list = await ctx.db
        .select({id : movies.id,name:movies.name,link:moviePosters.link,rating:movies.rating})
        .from(movies)
        .leftJoin(moviePosters, sql`${movies.id} = ${moviePosters.movieId}`)
        .orderBy(sql`CAST(${movies.date} AS FLOAT) DESC`)
        .limit(100)


        return {list}
    }),
    getMovieByGenreList: publicProcedure
      .input(z.object({genre: z.string()}))
      .query(async ({ ctx , input }) => {

        const list = await ctx.db
        .select({id : movies.id,name:movies.name,link:moviePosters.link,rating:movies.rating})
        .from(movies)
        .leftJoin(moviePosters, eq(movies.id,moviePosters.movieId))
        .leftJoin(movieGenres,eq(movies.id,movieGenres.movieId))
        .where(eq(movieGenres.genre,input.genre))
        .limit(100)


        return {list : list}
    }),
    
  });
