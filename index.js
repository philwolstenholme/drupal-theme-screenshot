#!/usr/bin/env node

const argv = require("yargs").argv;
const webshot = require("webshot");
const fs = require("fs");
const sharp = require("sharp");

const options = {
  windowSize: {
    width: 1680,
    height: 1050
  },
  renderDelay: 2500,
  phantomConfig: {
    "ignore-ssl-errors": "true"
  }
};

const file = fs.createWriteStream("screenshot.png", {
  encoding: "binary"
});
const renderStream = webshot(argv.url, options);
const resizeStream = sharp()
  .resize(588, 438)
  .png();
renderStream.pipe(resizeStream).pipe(file);