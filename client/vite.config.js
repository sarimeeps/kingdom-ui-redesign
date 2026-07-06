import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import headlessui from 'headlessui/react';



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
