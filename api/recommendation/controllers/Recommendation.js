'use strict';

/**
 * Recommendation.js controller
 *
 * @description: A set of functions called "actions" for managing `Recommendation`.
 */

module.exports = {

  findCars: async (ctx) => {
    const requirement = await strapi.services.recommendation.fetch(ctx.params);
    const attrs = requirement && requirement.attributes;
    if (attrs) {
      const query = {
        make: attrs.makes && attrs.makes.split('&'),
        year_gte: attrs.minYear,
        year_lte: attrs.maxYear,
        price_gte: attrs.minPrice,
        price_lte: attrs.maxPrice,
      };
      return strapi.services.car.fetchAll(query);
    } else {
      return [];
    }
  },

  /**
   * Retrieve recommendation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.recommendation.search(ctx.query);
    } else {
      return strapi.services.recommendation.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a recommendation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.recommendation.fetch(ctx.params);
  },

  /**
   * Count recommendation records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.recommendation.count(ctx.query, populate);
  },

  /**
   * Create a/an recommendation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.recommendation.add(ctx.request.body);
  },

  /**
   * Update a/an recommendation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.recommendation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an recommendation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.recommendation.remove(ctx.params);
  }
};
