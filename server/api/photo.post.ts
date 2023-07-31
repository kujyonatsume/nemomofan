import { formidable } from 'formidable';

export default defineEventHandler(async (event) => {
  var body
  var { imageDir } = useRuntimeConfig(event)

  const headers = getRequestHeaders(event);

  if (headers['content-type']?.includes('multipart/form-data')) {
    body = await parseMultipartNodeRequest(event.node.req, imageDir);
  } else {
    body = await readBody(event);
  }
  console.log(body);

  return { ok: true };
});

function parseMultipartNodeRequest(req: import('http').IncomingMessage, uploadDir: string) {

  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true, uploadDir })
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ ...fields, ...files });
    });
  });
}