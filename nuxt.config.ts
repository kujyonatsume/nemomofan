export default defineNuxtConfig({
  ssr: false,
  routeRules: {
    '/discord': { redirect: 'https://discord.gg/nemesissuki' }
  },
  devtools: { enabled: false },
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
    { src: "~/plugins/bootstrap", mode: "client" },
    { src: "~/plugins/yt-player", mode: "client" },
  ],
  css: ["@/assets/style.scss"],
  runtimeConfig: {
    imageDir: 'public/photo'
  },
  sourcemap: { client: false, server: false },
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: '_nuxt/[name].js', //js
          assetFileNames: '_nuxt/[name][extname]', //css
          entryFileNames: '_nuxt/[name].js' //entry
        }
      }
    }
  }
})