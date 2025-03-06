import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';


// For local development with SQLite
const client = createClient({
  url: 'file:./sqlite.db',
});

// For production with Turso
// const client = createClient({
//   url: process.env.DATABASE_URL!,
//   authToken: process.env.DATABASE_AUTH_TOKEN!,
// });

export const db = drizzle(client, { schema });

