const PATH_TARGET = 'controllers';
const PATH_TEMPLATE = 'plop/Express/Controller';
module.exports = {
  description:
    'Express Controllers are used to manage the business logic associated with API Endpoints',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter controller name (generator automatically appends Controller: User -> UserController)',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.controller.js`,
      templateFile: `${PATH_TEMPLATE}/express.template.controller.hbs`,
    },
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.controller.spec.js`,
      templateFile: `${PATH_TEMPLATE}/express.template.controller.spec.hbs`,
    },
  ],
};
