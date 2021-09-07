#!/usr/bin/env node
import { join } from "path";
import { readFile } from "fs/promises";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

const cwd = process.cwd();

const readPackageJSON = async () => {
  return JSON.parse(await readFile(join(cwd, "package.json")));
};

const readMain = async (packageJSON) => {
  let main = join(cwd, "./src/index.html");

  if (packageJSON.main) {
    main = join(cwd, packageJSON.main);

    if (!main.endsWith(".html")) {
      throw new Error(`Main script needs to be html, got: ${main}`);
    }
  }

  return (await readFile(main)).toString();
};

const importMaps = {};
const collectImportMaps = (node) => {
  if (node.tagName === "script" && node.properties.type === "importmap") {
    const imports = JSON.parse(node.children[0].value).imports;
    Object.entries(imports).forEach(([key, value]) => {
      importMaps[key] = value;
    });
  } else if (node.children) {
    node.children.forEach(collectImportMaps);
  }

  return node;
};

const getAST = (html) => {
  return unified()
    .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
    .use(() => collectImportMaps)
    .use(rehypeStringify)
    .process(html);
};

const packageJSON = await readPackageJSON();
const main = await readMain(packageJSON);
const mainAST = await getAST(main);

console.log(importMaps);
