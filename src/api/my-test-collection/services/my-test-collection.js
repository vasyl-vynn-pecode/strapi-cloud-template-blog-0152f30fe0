'use strict';

/**
 * my-test-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-test-collection.my-test-collection');
