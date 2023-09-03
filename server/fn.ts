import { existsSync, mkdirSync, readdirSync } from "fs"

export function MakeAndReadDir(path: string) {
    if (!existsSync(path))
        mkdirSync(path)
    return readdirSync(path)
}