const PATH_TARGET = 'controllers';
const PATH_TEMPLATES = 'plop/Mongoose/ExpressController';
module.exports = {
  description:
    'Mongoose Express Controllers are preconfigured to work with Mongoose',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter controller name: ',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.controller.js`,
      templateFile: `${PATH_TEMPLATES}/mongoose.template.express.controller.hbs`,
    },
  ],
};
