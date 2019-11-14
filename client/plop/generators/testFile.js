module.exports = {
  description: 'Test a component using Jest and Enzyme.',
  prompts: [
    {
      type: 'list',
      name: 'folder',
      message: 'Where is the component located?',
      choices: ['atoms', 'molecules', 'organisms', 'templates'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the component name',
    },
  ],
  actions: [
    {
      type: 'add',
      path:
        'src/components/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.spec.js',
      templateFile: 'plop/templates/test.hbs',
      skipIfExists: true,
    },
  ],
};
