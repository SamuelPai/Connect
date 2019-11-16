const PATH_TARGET = 'config';
const PATH_TEMPLATES = 'plop/Mongoose/Config';
module.exports = {
  description:
    'Mongoose Models are used to configure data persist data in organized Schemas use with MongoDB',
  prompts: [
    {
      type: 'input',
      name: 'databaseName',
      message: 'Enter database name: ',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${PATH_TARGET}/mongoose.config.js`,
      templateFile: `${PATH_TEMPLATES}/mongoose.config.hbs`,
    },
  ],
};
