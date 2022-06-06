module.exports = {
  routes: [
    {
      method: 'GET',
      // path: '/product',
      path: '/product/category/:category',
      handler: 'filterapi.index',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
