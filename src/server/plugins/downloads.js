'use strict';

const Path = require('path');
const Chalk = require('chalk');
const _ = require('lodash');
const assert = require('assert');

const after = options => (server, next) => {
  server.route({
    method: 'GET',
    path: `/static/{param*}`,
    handler: {
      directory: {
        path: 'static',
        listing: false
      }
    }
  });
  next();
};

const DownloadStaticPlugin = (server, options, next) => {
  server.dependency('inert', after(options));
  next();
};

DownloadStaticPlugin.attributes = {
  pkg: {
    name: 'downloadStaticPlugin',
    version: '1.0.0'
  }
};

module.exports = DownloadStaticPlugin;
