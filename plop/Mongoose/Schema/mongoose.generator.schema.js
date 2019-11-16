const PATH_TARGET = 'src/models';
const PATH_TEMPLATES = 'plop/Mongoose/Schema';
module.exports = {
  description:
    'Mongoose Models are used to configure data persist data in organized Schemas use with MongoDB',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter model name (example: User )',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${PATH_TARGET}/{{pascalCase name}}/{{pascalCase name}}.schema.js`,
      templateFile: `${PATH_TEMPLATES}/mongoose.schema.hbs`,
    },
  ],
};
