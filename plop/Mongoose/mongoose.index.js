const config = require('./Config/mongoose.generator.config');
const schema = require('./Schema/mongoose.generator.schema');
const expressController = require('./ExpressController/mongoose.generator.express.controller');

module.exports = {
  generators: {
    config,
    schema,
    expressController
  }
};
