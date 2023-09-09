import { formidable } from 'formidable';
import { readFileSync } from 'fs';

export default defineEventHandler(async (event) => {
  var { imageDir } = useRuntimeConfig(event)
  await formidable({
    uploadDir: imageDir,
    filename: (name, _, part) =>
      part.originalFilename ?? name
  }).parse(event.node.req)
  return readFileSync(imageDir)
});