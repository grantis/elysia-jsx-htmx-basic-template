import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '@/services/database/connection';
import fs from 'fs';
import path from 'path';

interface MigrationConfig {
  migrationsFolder: string;
}

// This runs migrations on startup
export async function runMigrations() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: './src/services/database/migrations' });
  console.log('Migrations complete!');
}

function readMigrationFiles(config: MigrationConfig) {
  const migrationFolderTo = config.migrationsFolder;
  const migrationQueries = [];
  const journalPath = path.join(migrationFolderTo, 'meta', '_journal.json');

  if (!fs.existsSync(journalPath)) {
    // Create the directory if it doesn't exist
    fs.mkdirSync(path.dirname(journalPath), { recursive: true });
    // Initialize the journal file
    fs.writeFileSync(journalPath, JSON.stringify({}));
    console.log(`Created missing journal file at ${journalPath}`);
  }

}

// Only auto-run migrations if this file is executed directly
if (require.main === module) {
  runMigrations().catch(console.error);
}