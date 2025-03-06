import { BaseLayout, Counter, Header } from '@/components'
import { getCounterValue } from '@/services/database'

export const Home = async () => {
  // Fetch the persisted counter value from the database
  const dbCounterValue = await getCounterValue();
  
  return (
    <BaseLayout>
      <div class="space-y-8">
        <Header>
          <>
            <h1 class="text-3xl font-bold text-gray-900">Elysia + HTMX + Tailwind</h1>
            <p class="mt-2 text-gray-600">A modern stack for building interactive web applications.</p>
          </>
        </Header>

        <section class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Interactive Counter</h2>
          <p class="text-gray-600 mb-4">Click the buttons to update the counter without page reload.</p>
          <Counter count={0} />
        </section>
        <section class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Database Counter</h2>
          <p class="text-gray-600 mb-4">This counter's value is persisted in SQLite database.</p>
          <Counter count={dbCounterValue} />
        </section>

        <section class="card mt-8">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">User List</h2>
          <p class="text-gray-600 mb-4">Type a username and press Enter to add to the list.</p>
          <div class="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Enter a username"
              class="input w-full max-w-md"
              hx-post="/add-user"
              hx-target="#user-list"
              hx-trigger="keyup[keyCode==13]"
            />
          </div>
          <ul id="user-list" class="space-y-2">
            {/* User list will be populated here */}
          </ul>
        </section>
      </div>
    </BaseLayout>
  )
}
