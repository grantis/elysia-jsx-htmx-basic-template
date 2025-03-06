import { eq } from 'drizzle-orm';
import { counter } from '../schema.drizzle';
import { db } from '@/services/database/connection';

// Get the current counter value
export const getCounterValue = async (): Promise<number> => {
  const result = await db.select({ value: counter.value })
    .from(counter)
    .where(eq(counter.id, 1))
    .get();
  
  return result?.value || 0;
};

// Update the counter value
export const updateCounterValue = async (value: number): Promise<void> => {
  await db.update(counter)
    .set({ value })
    .where(eq(counter.id, 1))
    .run();
};