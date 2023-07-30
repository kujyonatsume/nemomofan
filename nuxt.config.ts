export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    plugins: [
        {
            src: "~/plugins/jquery", mode: "client"
        }
    ]
})