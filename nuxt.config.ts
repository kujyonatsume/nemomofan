export default defineNuxtConfig({
    ssr: true,
    routeRules: {
        '/discord': { redirect: 'https://discord.gg/s6TNgRZ5Bh' }
    },
    devtools: { enabled: false },
    plugins: [
        { src: "~/plugins/jquery", mode: "client" },
        { src: "~/plugins/bootstrap", mode: "client"},
        
    ],
    css: ["@/assets/style.scss"],
    runtimeConfig: {
        imageDir: 'public/photo'
    }
})