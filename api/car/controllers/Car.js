'use strict';

/**
 * Car.js controller
 *
 * @description: A set of functions called "actions" for managing `Car`.
 */

module.exports = {

  /**
   * Retrieve car records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.car.search(ctx.query);
    } else {
      return strapi.services.car.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a car record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.car.fetch(ctx.params);
  },

  /**
   * Count car records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.car.count(ctx.query, populate);
  },

  /**
   * Create a/an car record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.car.add(ctx.request.body);
  },

  /**
   * Update a/an car record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.car.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an car record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.car.remove(ctx.params);
  }
};
