import { relative, relative as relativePath } from "node:path";
import { fileURLToPath } from "node:url";
import { copyFilesToFunction } from "./fs.js";
async function copyDependenciesToFunction({
  entry,
  outDir,
  includeFiles,
  excludeFiles,
  logger
}, cache) {
  const entryPath = fileURLToPath(entry);
  logger.info(`Bundling function ${relative(fileURLToPath(outDir), entryPath)}`);
  let base = entry;
  while (fileURLToPath(base) !== fileURLToPath(new URL("../", base))) {
    base = new URL("../", base);
  }
  const { nodeFileTrace } = await import("@vercel/nft");
  const result = await nodeFileTrace([entryPath], {
    base: fileURLToPath(base),
    // If you have a route of /dev this appears in source and NFT will try to
    // scan your local /dev :8
    ignore: ["/dev/**"],
    cache
  });
  for (const error of result.warnings) {
    if (error.message.startsWith("Failed to resolve dependency")) {
      const [, module, file] = /Cannot find module '(.+?)' loaded from (.+)/.exec(error.message);
      if (module === "@astrojs/")
        continue;
      if (module === "sharp")
        continue;
      if (entryPath === file) {
        console.warn(
          `[@astrojs/vercel] The module "${module}" couldn't be resolved. This may not be a problem, but it's worth checking.`
        );
      } else {
        console.warn(
          `[@astrojs/vercel] The module "${module}" inside the file "${file}" couldn't be resolved. This may not be a problem, but it's worth checking.`
        );
      }
    } else if (error.message.startsWith("Failed to parse")) {
      continue;
    } else {
      throw error;
    }
  }
  const commonAncestor = await copyFilesToFunction(
    [...result.fileList].map((file) => new URL(file, base)).concat(includeFiles),
    outDir,
    excludeFiles
  );
  return {
    // serverEntry location inside the outDir
    handler: relativePath(commonAncestor, entryPath)
  };
}
export {
  copyDependenciesToFunction
};
