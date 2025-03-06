import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';


// Users table
export const users = sqliteTable('users', {
    id: text('id').primaryKey(),
    username: text('username').notNull().unique(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$default(() => new Date())
});

// Counter table (to persist the counter value)
export const counters = sqliteTable('counters', {
    id: text('id').primaryKey(),
    name: text('name').notNull().unique(),
    value: integer('value').notNull().default(0)
});

