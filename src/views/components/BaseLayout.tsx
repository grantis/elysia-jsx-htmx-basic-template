import tailwindConfig from '../../config/tailwind.config'
import { tailwindComponents } from '../../config/tailwind-components'

export const BaseLayout = ({ children }: { children: JSX.Element }) => {
    // Convert the tailwindConfig object to a string to inject into the script tag
    const tailwindConfigString = JSON.stringify(tailwindConfig)
    
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Elysia + HTMX Demo</title>
          {/* HTMX Script */}
          <script src="https://unpkg.com/htmx.org@1.9.6"></script>
          {/* Tailwind CSS */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script>
            {`tailwind.config = ${tailwindConfigString}`}
          </script>
          {/* Additional Tailwind classes */}
          <style type="text/tailwindcss">
            {tailwindComponents}
          </style>
          {/* Optional: Inter font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
        </head>
        <body class="bg-gray-50 min-h-screen">
          <div class="max-w-4xl mx-auto px-4 py-8">
            {children}
          </div>
        </body>
      </html>
    )
  }
  