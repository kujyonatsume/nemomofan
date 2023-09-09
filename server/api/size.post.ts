import { existsSync, mkdirSync, readdirSync, readFileSync } from "fs"

export default defineEventHandler((event) => {
  var { imageDir } = useRuntimeConfig(event)
  return MakeAndReadDir(imageDir)
})
function MakeAndReadDir(path: string) {
  if (!existsSync(path))
    mkdirSync(path)
  return readdirSync(path)
}