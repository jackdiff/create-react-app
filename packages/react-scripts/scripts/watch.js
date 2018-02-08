#!/usr/bin/env node
/**
 * 2018 Truong Pham. 
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

// Now that we have packed them, call the global CLI.
cp.execSync("cross-env NODE_ENV=development ../config/webpack.config.dev.js --watch --progress --hide-modules");
