'use strict';

// {
//     "routes" [
//         {
//             "method":"GET",
//             "path":"/email",
//             "handler":"Email.index",
//             "config":{
//                 "policies":[]
//             }
//         }
//     ]
// }
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::todo.todo');
