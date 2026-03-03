import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Shop',
        short_name: 'Shop',
        description: 'A simple shopping cart app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://fakestoreapi\\.com/.*'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'fakestore-api-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              }
            }
          },
          {
            urlPattern: new RegExp('^https://fakestoreapi\\.com/.*\\.(png|jpg|jpeg|svg)'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'fakestore-images-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
          }
        ]
      }
    })
  ],
})
