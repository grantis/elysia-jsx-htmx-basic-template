import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Counter table schema
export const counter = sqliteTable('counter', {
  id: integer('id').primaryKey(),
  value: integer('value').notNull().default(0),
});

// Add more table schemas as needed
