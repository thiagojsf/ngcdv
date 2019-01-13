#!/usr/bin/env node

const minimist = require('minimist')
const path = require('path')
const fs = require('fs')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  console.log(args)
}

path.basename(path.dirname(fs.realpathSync(__filename)));

console.log("Welcome to ngCdv");