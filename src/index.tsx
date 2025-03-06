import { Elysia, t } from 'elysia'
import { html, Html as ElysiaHtml } from '@elysiajs/html'
import { runMigrations } from '@/services/database'
import { initializeDatabase } from '@/services/database/init'

// Make Html globally available
// Only needed in Bun/Node environment, not required if only using for types
(global as any).Html = ElysiaHtml

import { Counter } from './components/Counter'
import { Home } from './pages/Home'


// Define store type for TypeScript
type AppState = {
  count: number;
}

// Define body type for add-user
type AddUserBody = {
  username: string;
}

// Create a new Elysia app
async function bootstrap() {
  await runMigrations()
  await initializeDatabase()
  
  const app = new Elysia()
    .use(html())
    .state<AppState>({ count: 0 }) // Initialize state with count
    .get('/', () => <Home />)
    // HTMX endpoints for counter
    .post('/increment', ({ store }) => {
      store.count += 1
      return <Counter count={store.count} />
    })
    .post('/decrement', ({ store }) => {
      store.count -= 1
      return <Counter count={store.count} />
    })
    // HTMX endpoint for adding users with proper body type
    .post('/add-user', ({ body }) => {
      // Type assertion for body (or use proper validation)
      const username = (body as AddUserBody).username
      return (
        <li class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
          <span>{username}</span>
          <button
            class="btn-danger text-sm py-1"
            hx-delete={`/delete-user/${username}`}
            hx-target="closest li"
            hx-swap="outerHTML"
          >
            Delete
          </button>
        </li>
      )
    }, {
      body: t.Object({
        username: t.String()
      })
    })
    .delete('/delete-user/:username', () => null)
    .listen(3000)

  console.log(`🦊 Elysia is running at http://localhost:${app.server?.port}`)
}

bootstrap().catch(console.error)
