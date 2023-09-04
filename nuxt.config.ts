export default defineNuxtConfig({
    routeRules: {
        '/discord': { redirect: 'https://discord.gg/s6TNgRZ5Bh' }
    },
    devtools: { enabled: false },
    plugins: [{ src: "~/plugins/jquery", mode: "client" }],
    css: ["@/assets/style.scss"],
    runtimeConfig: {
        imageDir: './public/images/photos'
    }
})