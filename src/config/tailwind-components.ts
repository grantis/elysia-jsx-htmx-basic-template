// tailwind-components.ts
export const tailwindComponents = `
  @layer components {
    .btn {
      @apply px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors;
    }
    .btn-danger {
      @apply px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors;
    }
    .card {
      @apply bg-white p-6 rounded-lg shadow-md;
    }
    .input {
      @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500;
    }
  }
`