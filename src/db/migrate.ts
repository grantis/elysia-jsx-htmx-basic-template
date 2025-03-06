import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './index';

// This runs migrations on startup
async function runMigrations() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log('Migrations complete!');
}

runMigrations().catch(console.error);