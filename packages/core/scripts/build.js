"use strict";

const pkg = require("../package.json");
const globby = require("globby");
const sass = require("node-sass");
const path = require("path");
const fs = require("fs-extra");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const sassRender = util.promisify(sass.render);

const inputDir = path.resolve(__dirname, "..", "src");
const tempDir = path.resolve(__dirname, "..", "tmp");
const outputDir = path.resolve(__dirname, "..");

const postcss = require("postcss")([
  require("autoprefixer")(),
  require("cssnano")({ preset: "default" }),
  require("postcss-reporter")()
]);

/**
 * Compiles a single file using node-sass.
 */
async function compileSassFile(file) {
  if (path.basename(file).startsWith("_")) {
    return Promise.resolve();
  }
  return sassRender({ file }).then(result =>
    fs.outputFile(
      file.replace(inputDir, tempDir).replace(".scss", ".css"),
      result.css
    )
  );
}

/**
 * Compiles all .scss files in src/
 */
async function compileSassFiles() {
  const files = await globby(path.join(inputDir, "**", "*.scss"));
  return Promise.all(files.map(compileSassFile));
}

/**
 * Compiles a single file using postcss
 */
async function compileCssFile(file) {
  return readFile(file)
    .then(buffer => postcss.process(buffer, { from: file, to: file }))
    .then(result => fs.outputFile(file, result.css));
}

/**
 * Compiles all .css files in tmp/
 */
async function compileCssFiles() {
  const files = await globby(path.join(tempDir, "**", "*.css"));
  return Promise.all(files.map(compileCssFile));
}

/**
 * Copies all .scss files from src/ to tmp/
 */
async function copySassFiles() {
  const files = await globby(path.join(inputDir, "**", "*.scss"));
  return Promise.all(
    files.map(file =>
      fs.copy(file, file.replace(inputDir, path.join(tempDir, "kono", "core")))
    )
  );
}

async function build() {
  console.log("Building %s", pkg.name);
  try {
    // console.log("> Cleaning directories…");
    // await fs.emptyDir(tempDir);
    // await fs.emptyDir(outputDir);

    console.log("> Compiling .scss files…");
    await compileSassFiles();

    console.log("> Compiling .css files…");
    await compileCssFiles();

    console.log("> Copy source files…");
    await copySassFiles();

    console.log("> Copy files to dist/");
    await fs.copy(tempDir, outputDir);

    // console.log("> Copy remaining files");
    // await globby(["package.json", "index.js", "README.md"], {
    //   base: path.join(__dirname, "..")
    // }).then(files =>
    //   Promise.all(files.map(file => fs.copy(file, path.join(outputDir, file))))
    // );

    console.log("Done.");
  } catch (err) {
    console.error(err);
  }
}

module.exports.compileCssFile = compileCssFile;
module.exports.compileCssFiles = compileCssFiles;
module.exports.compileSassFile = compileSassFile;
module.exports.compileSassFiles = compileSassFiles;
module.exports.build = build;

if (!module.parent) {
  build();
}
