#!/usr/bin/env node
/**
 * 2018 Truong Pham. 
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
// Now that we have packed them, call the global CLI.
var webpack = "node_modules/webpack/bin/webpack.js"
var webpackConfig = resolveOwn('config/webpack.config.dev.js');
var command = "cross-env NODE_ENV=development "+ webpack + " --config " + webpackConfig + " --watch --progress --hide-modules";
cp.execSync(command);
