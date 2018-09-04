"use strict";

const pkg = require("../package.json");
const path = require("path");
const Gaze = require("gaze").Gaze;
const Builder = require("./build");

const inputDir = path.resolve(__dirname, "..", "src");

async function watch() {
  try {
    const gaze = new Gaze(path.join(inputDir, "**", "*.scss"));

    gaze.on("ready", function() {
      console.log("Watching %s…", pkg.name);
    });

    gaze.on("all", function(event, file) {
      console.log("> Change detected. Building.");
      Builder.build();
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = watch;

if (!module.parent) {
  watch();
}
