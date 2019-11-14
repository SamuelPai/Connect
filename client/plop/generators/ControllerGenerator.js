const FOLDER_ROOT = 'src/pages';
const PLOP_TEMPLATES_ROOT = 'plop/templates';
module.exports = {
  description:
    'Controller Components are used to manage and definee data, state and event handlers',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter controller name (generator automatically appends Page: ItemList -> ItemListPage)',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}Page/{{pascalCase name}}Page.component.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/Controller/component.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}Page/{{pascalCase name}}Page.propTypes.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/Controller/controller.propTypes.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}Page/{{pascalCase name}}Page.styles.scss`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/styles.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}Page/{{pascalCase name}}Page.spec.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/test.hbs`,
      skipIfExists: true,
    }
  ],
};
