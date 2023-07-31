import { existsSync, mkdirSync, writeFileSync } from "fs"
import path from "path"

export default defineNuxtConfig({
    routeRules: {
        '/bot':{ redirect: 'https://discordapp.com/oauth2/authorize?client_id=998644371220090930&scope=bot&permissions=66186303' },
        '/image': { static: true }
    },
    devtools: {
        enabled: false
    },
    plugins: [
        {
            src: "~/plugins/jquery", mode: "client"
        }
    ],
    runtimeConfig: {
        imageDir: CustomFile('image')
    }
})

function CustomFile(file: string, format?: string) {
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