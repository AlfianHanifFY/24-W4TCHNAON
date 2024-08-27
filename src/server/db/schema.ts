import { sql } from 'drizzle-orm';
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uuid,
  serial,
  varchar,
  index,
} from 'drizzle-orm/pg-core';
import type { AdapterAccount } from 'next-auth/adapters';
import { number } from 'zod';

export const posts = pgTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
  email: text('email').unique().notNull(),
  password: text('password'),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: uuid('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);



export const movies = pgTable(
  'movies',
  {
    id : varchar('id').primaryKey().notNull(),
    name : varchar('name').notNull(),
    date : varchar('date'),
    tagline : varchar('tagline'),
    description : varchar('description'),
    minute : varchar('minute'),
    rating : varchar('rating')
  }
);

export const moviePosters = pgTable(
  'moviePosters',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    link : varchar('link')
  }
);

export const movieGenres = pgTable(
  'movieGenres',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    genre : varchar('genre')
  }
)

export const movieActors = pgTable(
  'movieActors',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    name : varchar('name'),
    role : varchar('role')
  }
)

export const movieCountries = pgTable(
  'movieCountries',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    country : varchar('country'),

  }
)

export const movieLanguages = pgTable(
  'movieLanguages',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    type : varchar('type'),
    role : varchar('language')
  }
)

export const movieStudios = pgTable(
  'movieStudios',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    studio : varchar('studio'),
  }
)

export const movieReleases = pgTable(
  'movieReleases',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    country : varchar('country'),
    date : varchar('date'),
    type : varchar('type'),
    rating : varchar('rating')
  }
)

export const movieThemes = pgTable(
  'movieThemes',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    theme : varchar('theme')
  }
)

export const userComments = pgTable(
  "userComments",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    userid : uuid('userId').notNull(),
    comment : varchar("comment"),
    parrent : varchar("parrent")
  }
)

export const userFavorite = pgTable(
  'userFavorite',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export const userWatchLater = pgTable(
  'userWatchLater',
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    movieId : varchar('movieId').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export const userPreference = pgTable(
  "userPreference",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    genre : varchar('genre').notNull() ,
    country : varchar('country').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export const userCountry = pgTable(
  "userCountry",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    genre : varchar('genre').notNull() ,
    country : varchar('country').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export const userGenre = pgTable(
  "userGenre",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    genre : varchar('genre').notNull() ,
    country : varchar('country').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export const userActor = pgTable(
  "userActor",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    genre : varchar('genre').notNull() ,
    country : varchar('country').notNull() ,
    userId : uuid('userId').notNull()
  }
)

export type User = typeof users.$inferSelect;
export type Movie = typeof movies.$inferSelect;
export type MoviePoster = typeof moviePosters.$inferSelect;
export type MovieActor = typeof movieActors.$inferSelect;
export type MovieCountry = typeof movieCountries.$inferSelect;
export type MovieGenre = typeof movieGenres.$inferSelect;
export type MovieTheme = typeof movieThemes.$inferSelect;
export type MovieStudio = typeof movieStudios.$inferSelect;
export type MovieRelease = typeof movieReleases.$inferSelect;
export type MovieLanguages = typeof movieLanguages.$inferSelect;
export type Account = typeof accounts.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type UserComment = typeof userComments.$inferSelect;
export type UserFavourite = typeof userFavorite.$inferSelect;
export type UserWatchLater = typeof userWatchLater.$inferSelect;

