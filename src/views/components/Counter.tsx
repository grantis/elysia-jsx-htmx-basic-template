export const Counter = ({ count }: { count: number }) => (
    <div id="counter" class="flex items-center gap-4 my-8">
      <button
        class="btn"
        hx-post="/decrement"
        hx-target="#counter"
        hx-swap="outerHTML"
      >
        -
      </button>
      <div class="text-2xl font-bold">{count}</div>
      <button
        class="btn"
        hx-post="/increment"
        hx-target="#counter"
        hx-swap="outerHTML"
      >
        +
      </button>
    </div>
  )
  