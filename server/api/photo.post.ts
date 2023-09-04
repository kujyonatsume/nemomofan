import { formidable } from 'formidable';
import { readFileSync } from 'fs';
import { join } from "path"

export default defineEventHandler(async (event) => {
  var { imageDir } = useRuntimeConfig(event)
  imageDir = join(process.cwd(), imageDir)
  console.log(imageDir)
  await formidable({
    uploadDir: imageDir,
    filename: (name, _, part) =>
      part.originalFilename ?? name
  }).parse(event.node.req)
  return readFileSync(imageDir)
});