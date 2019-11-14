const controllerGenerator = require('./plop/generators/ControllerGenerator');
const presentationGenerator = require('./plop/generators/PresentationGenerator');

module.exports = plop => {
  plop.setGenerator('Presentation Component', presentationGenerator);
  plop.setGenerator('Page Component', controllerGenerator);
};
