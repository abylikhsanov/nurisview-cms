'use strict';

/**
 * jacket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jacket.jacket');
