const Express = require('./plop/Express/express.index');
const Mongoose = require('./plop/Mongoose/mongoose.index');

module.exports = plop => {
  // GENERATORS
  // Express
  plop.setGenerator('Express Controller', Express.generators.controller);
  plop.setGenerator('Express Router', Express.generators.router);
  // Mongoose
  plop.setGenerator('Mongoose Config', Mongoose.generators.config);
  plop.setGenerator('Mongoose Schema', Mongoose.generators.schema);
  plop.setGenerator('Mongoose Express Controller', Mongoose.generators.expressController);
};
