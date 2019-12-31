module.exports = {
  extends: [
    'react-app',
    'airbnb',
  ],
  globals: {
    document: false,
    it: false,
  },
  rules: {
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: { some: ['nesting', 'id'] },
    }],
  },
  root: true,
};
