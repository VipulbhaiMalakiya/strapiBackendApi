// 'use strict';

// const _ = rquire('lodash');
// module.exports = ctx => {
//     const { body = {}, files = {} } = ctx.request;

//     if (!body.data) {
//         throw strapi.errors.badRequest(
//             `when using multipart/form-data you need to provide your data in a JSON 'data' field.`
//         );
//     }
//     let data;
//     try {
//         data = JSON.parse(body.data);
//     } catch (error) {
//         throw strapi.errors.bedRequest(
//             `Invalid 'data' field.'data' should be a valid JSON`
//         );
//     }

// }