import { readdirSync } from "fs"

export default defineEventHandler((event) => {
  var { imageDir } = useRuntimeConfig(event)
  return readdirSync(imageDir)

})