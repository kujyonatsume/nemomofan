export default defineNuxtConfig({
  routeRules: {
    '/discord': { redirect: 'https://discord.gg/nemesissuki' }
  },
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
    { src: "~/plugins/bootstrap", mode: "client" },
    { src: "~/plugins/yt-player", mode: "client" },
  ],
  css: ["@/assets/style.scss"],
//  devtools: { enabled: false },
//  sourcemap: { client: false, server: false },
//  vite: {
//    build: {
//      rollupOptions: {
//        output: {
//          chunkFileNames: '_nuxt/[name].js', //js
//          assetFileNames: '_nuxt/[name][extname]', //css
//          entryFileNames: '_nuxt/[name].js' //entry
//        }
//      }
//    }
//  },
//  nitro: {
//    prerender: {
//      autoSubfolderIndex: false
//    }
//  }
})