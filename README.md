# Eslint config for projects
Just extend this project in your lint config in your `.eslintrc.json`.

```json
{
  "extends": ["@foxriver76/eslint-config"]
}
```

And create a `prettier.config.js` with the following content:

```js
module.exports = require('@foxriver76/eslint-config/prettier');
```