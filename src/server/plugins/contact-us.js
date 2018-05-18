'use strict';

const ContactUs = require('../services/contact-us.service');

const ContactUsAPIPlugin = (server, options, next) => {
  server.route({
    method: 'POST',
    path: '/contact-us',
    config: ContactUs
  });

  next();
};

ContactUsAPIPlugin.attributes = {
  name: "contactUs",
  version: "1.0.0"
};

module.exports = ContactUsAPIPlugin;
