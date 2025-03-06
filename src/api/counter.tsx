import { Elysia } from 'elysia';
import { getCounterValue, updateCounterValue } from '@/services/database';
import { Counter } from '@/components';

export const counterRoutes = new Elysia()
  .post('/increment-db-counter', async () => {
    const currentValue = await getCounterValue();
    const newValue = currentValue + 1;
    await updateCounterValue(newValue);
    return <Counter count={newValue} />;
  })
  .post('/decrement-db-counter', async () => {
    const currentValue = await getCounterValue();
    const newValue = Math.max(0, currentValue - 1);
    await updateCounterValue(newValue);
    return <Counter count={newValue} />;
  });
