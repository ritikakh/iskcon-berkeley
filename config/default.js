"use strict";

const defaultListenPort = 3000;

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10);
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort;
};

module.exports = {
  "plugins": {
    "inert": {
      "enable": true
    },
    "electrodeStaticPaths": {
      "enable": true,
      "options": {
        "pathPrefix": "dist"
      }
    },
    "server/plugins/pwa": {
      "module": "./{{env.APP_SRC_DIR}}/server/plugins/pwa"
    },
    "server/plugins/contact-us": {
      "module": "./{{env.APP_SRC_DIR}}/server/plugins/contact-us"
    },
    "server/plugins/downloads": {
      "module": "./{{env.APP_SRC_DIR}}/server/plugins/downloads"
    },
    "webapp": {
      "module": "electrode-react-webapp/lib/hapi",
      "options": {
        "pageTitle": "Iskcon Berkeley",
        "webpackDev": process.env.WEBPACK_DEV === "true",
        "renderJS": true,
        "serverSideRendering": true,
        "htmlFile": "index.html",
        "devServer": {
          "host": "127.0.0.1",
          "port": "2992"
        },
        "paths": {
          "/{args*}": {
            "content": {
              "module": "./{{env.APP_SRC_DIR}}/server/views/index-view"
            }
          }
        }
      }
    }
  },
  "connections": {
    "default": {
      "host": process.env.HOST,
      "address": process.env.HOST_IP || "0.0.0.0",
      "port": portFromEnv(),
      "routes": {
        "cors": false
      },
      "state": {
        "ignoreErrors":true
      }
    }
  }
};
