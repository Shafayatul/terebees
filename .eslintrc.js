module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    "no-mixed-spaces-and-tabs": 0, 
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
