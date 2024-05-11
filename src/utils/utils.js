import path from "node:path";
import { fileURLToPath } from "node:url";

export const createDirName = (url) => {
   const filePathUrl = fileURLToPath(url);
   const _dirname = path.dirname(filePathUrl);
   return _dirname
}