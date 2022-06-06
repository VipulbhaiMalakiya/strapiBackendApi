// 'use strict';
// const _ = require('lodash');
// const parseMultipartBody = require('../utils/parse-multipart');
// const {
//     validateGenerateUIDInput,
//     validateCheckUIDAvailabilityInput,
//     validateUIDField
// } = require('./validation');

// module.exports = {
//     async update(ctx) {
//         const { id, model } = ctx.params;
//         console.log("STRAPI");
//         const contentManagerService = strapi.plugins['content-manager'].services.contentmanager;
//         try {
//             if (ctx.is('multipart')) {
//                 const { data, files } = parseMultipartBody(ctx);
//                 ctx.body = await contentManagerService.edit({ id }, data, {
//                     files,
//                     model
//                 });
//             }
//             else {
//                 ctx.body = await contentManagerService.edit({ id }, ctx.request.bosy, {
//                     model,
//                 });
//             }

//         }
//         catch (error) {
//             strapi.log.error(error);
//             ctx.badRequest(null, [
//                 {
//                     messages: [{ id: error.message, message: error.message, field: error.field }],
//                     errors: _.get(error, 'data.errors'),
//                 },

//             ]);
//         }
//     },

    
// }

