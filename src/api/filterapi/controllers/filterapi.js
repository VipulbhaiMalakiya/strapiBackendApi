'use strict';

/**
 * A set of functions called "actions" for `filterapi`
 */

module.exports = {
  async index(ctx, next) {
    const category = ctx.params.category;
    // const category = 'headphone';
    const entries = await strapi.db.query('api::product.product').findMany({
      where: {
        categories: {
          Name: {
            $contains: category
          },
        }
      },
      //  orderBy:{name:'DESC'},
    });
    ctx.body = entries;
  }
};
