import { existsSync, mkdirSync, writeFileSync } from "fs"
import path from "path"

export default defineNuxtConfig({
    routeRules: {
        '/bot': { redirect: 'https://discordapp.com/oauth2/authorize?client_id=998644371220090930&scope=bot&permissions=66186303' },
        '/discord': { redirect: 'https://discord.gg/s6TNgRZ5Bh' }
    },
    devtools: {
        enabled: false
    },
    plugins: [
        {
            src: "~/plugins/jquery", mode: "client"
        }
    ],
    css: [
        "@/assets/style.css"
      ],
    runtimeConfig: {
        imageDir: CustomFile('image')
    }
})

function CustomFile(file: string, format?: string) {
    console.log(process.cwd());
    
    file = path.join(process.cwd(), file)
    if (!existsSync(file)) {
        if (format) {
            file += format
            writeFileSync(file, '')
        }
        else mkdirSync(file)
    }
    return file
}