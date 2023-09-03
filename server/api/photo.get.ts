import { MakeAndReadDir } from "../fn";

export default defineEventHandler((event) => {
  return MakeAndReadDir('./photos')
})