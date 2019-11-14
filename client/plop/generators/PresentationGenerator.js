const FOLDER_ROOT = 'src/components';
const PLOP_TEMPLATES_ROOT = 'plop/templates';
module.exports = {
  description:
    'Presentational Components are responsible for pure JSX/HTML absent of Controller Logic and State.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter Component Name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}/{{pascalCase name}}.component.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/Presentation/component.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}/{{pascalCase name}}.propTypes.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/Presentation/presentation.propTypes.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}/{{pascalCase name}}.story.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/Presentation/storybook.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}/{{pascalCase name}}.styles.scss`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/styles.hbs`,
    },
    {
      type: 'add',
      path: `${FOLDER_ROOT}/{{pascalCase name}}/{{pascalCase name}}.spec.js`,
      templateFile: `${PLOP_TEMPLATES_ROOT}/test.hbs`,
      skipIfExists: true,
    }
  ],
};
