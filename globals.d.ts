// Import the necessary types without emitting JS code
import { Html } from '@elysiajs/html'

// Make createElement and Fragment globally available
declare global {
  const Html: typeof Html;
  
  // You can also add other global variables here
  const tailwindConfig: typeof import('./config/tailwind.config').default;
}

// This file is a module (not a script)
export {};