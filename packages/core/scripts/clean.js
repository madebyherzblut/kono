"use strict";

const path = require("path");
const fs = require("fs-extra");

const inputDir = path.resolve(__dirname, "..", "src");
const tempDir = path.resolve(__dirname, "..", "tmp");
const outputDir = path.resolve(__dirname, "..");

async function clean() {
  try {
    console.log("> Cleaning directories…");
    await fs.emptyDir(tempDir);
    await fs.readdir(inputDir).then(files =>
      Promise.all(
        files
          .map(file => path.join(outputDir, file))
          .concat(path.join(__dirname, "..", "kono"))
          .map(file => fs.remove(file))
      )
    );

    console.log("Done.");
  } catch (err) {
    console.error(err);
  }
}
module.exports.clean = clean;

if (!module.parent) {
  clean();
}
