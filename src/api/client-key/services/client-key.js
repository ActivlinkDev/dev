'use strict';

/**
 * client-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-key.client-key');
