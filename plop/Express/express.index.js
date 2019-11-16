const controller = require('./Controller/express.generator.controller');
const router = require('./Router/express.generator.router');

module.exports = {
  generators: {
    controller,
    router
  }
};
