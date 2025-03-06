import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import path from 'path';

const client = createClient({
  url: process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL!
    : `file:${path.resolve(process.cwd(), './local.db')}`,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

export const db = drizzle(client);
