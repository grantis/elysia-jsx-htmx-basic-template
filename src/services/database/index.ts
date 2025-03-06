// Re-export database connection

// Export any models, schemas, or utility functions
// Example: export * from './models/users';
// Example: export * from './schemas';

// Add any database initialization logic
export { db } from './connection';
export { runMigrations } from './migrations/migrate';

// Re-export all database functionality
export * from './schema.drizzle';
export * from './operations/counter';

// Add more exports as needed
