export default defineNuxtConfig({
    ssr: true,
    filenameHashing: false,
    routeRules: {
        '/discord': { redirect: 'https://discord.gg/nemesissuki' }
    },
    devtools: { enabled: false },
    plugins: [
        { src: "~/plugins/jquery", mode: "client" },
        { src: "~/plugins/bootstrap", mode: "client" },
    ],
    css: ["@/assets/style.scss"],
    runtimeConfig: {
        imageDir: 'public/photo'
    },
    sourcemap: { client: false, server: false },
})