#!/usr/bin/env node
import { readFile } from 'fs/promises';
import { join } from 'path';

const cwd = process.cwd();

const readPackageJSON = async () => {
  return JSON.parse(await readFile(join(cwd, 'package.json')));
};

const readMain = async (packageJSON) => {
  let main = join(cwd, './src/index.html');
  
  if (packageJSON.main) {
    main = join(cwd, packageJSON.main);

    if (!main.endsWith('.html')) {
      throw new Error(`Main script needs to be html, got: ${main}`);
    }
  }

  return (await readFile(main)).toString();
}

const packageJSON = await readPackageJSON();
const main = await readMain(packageJSON);

console.log({main});
