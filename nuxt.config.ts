import { existsSync, mkdirSync, writeFileSync } from "fs"
import path from "path"
var root = process.cwd()
if (process.env.NODE_ENV === "production") {
    root = path.join(root, '.output')
}
//console.log(root);
export default defineNuxtConfig({
    routeRules: {
        '/discord': { redirect: 'https://discord.gg/s6TNgRZ5Bh' }
    },
    devtools: { enabled: false },
    plugins: [{ src: "~/plugins/jquery", mode: "client" }],
    css: ["@/assets/style.scss"],
    runtimeConfig: {
        imageDir: CustomFile('photos')
    }
})

function CustomFile(file: string, format?: string) {
    file = path.join(root, `public/${file}`)
    if (!existsSync(file)) {
        if (format) {
            file += format
            writeFileSync(file, '')
        }
        else mkdirSync(file)
    }
    return file
}