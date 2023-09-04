import { existsSync, mkdirSync, readdirSync, readFileSync } from "fs"
import { join } from "path"

export default defineEventHandler((event) => {
  var { imageDir } = useRuntimeConfig(event)
  imageDir = join(process.cwd(), imageDir)
  return MakeAndReadDir(imageDir)
})
function MakeAndReadDir(path: string) {
  if (!existsSync(path))
    mkdirSync(path)
  console.log(path);
  return readdirSync(path).map(name => ({ name, src: readFileSync(join(path, name), 'base64') }))
}