import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const telegramRelayUrl =
  process.env.VITE_TELEGRAM_RELAY_URL || 'https://anastasia-dudareva.vercel.app';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1400
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/telegram': {
        target: telegramRelayUrl,
        changeOrigin: true
      }
    }
  }
})

