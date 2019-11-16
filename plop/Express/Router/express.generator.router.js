const PATH_TARGET = 'routes';
const PATH_TEMPLATE = 'plop/Express/Router';
module.exports = {
  description:
    'Express Routers are used to define the URL Patterns for API Endpoints and associate the appropriate Controllers',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter router name (generator automatically appends Router: User -> UserRouter)',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.router.js`,
      templateFile: `${PATH_TEMPLATE}/express.template.router.hbs`,
    },
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.router.spec.js`,
      templateFile: `${PATH_TEMPLATE}/express.template.router.spec.hbs`,
    },
  ],
};
