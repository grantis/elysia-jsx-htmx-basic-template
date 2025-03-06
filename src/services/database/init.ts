import { db } from './connection';
import { counter } from './schema.drizzle';
import { eq } from 'drizzle-orm';

export async function initializeDatabase() {
  console.log('Initializing database...');
  
  // Check if we have a counter record already
  const existingCounter = await db.select()
    .from(counter)
    .where(eq(counter.id, 1))
    .get();
  
  // If no counter exists, create initial record with value 0
  if (!existingCounter) {
    await db.insert(counter)
      .values({
        id: 1,
        value: 0
      })
      .run();
    console.log('Created initial counter record');
  }
  
  console.log('Database initialized!');
}