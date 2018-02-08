#!/usr/bin/env node
/**
 * 2018 Truong Pham. 
 */

'use strict';

process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');

// removes react-dev-utils/webpackHotDevClient.js at first in the array
config.entry.shift();

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.error(stats.toString({
    chunks: false,
    colors: true
  }));
});