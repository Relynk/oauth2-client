module.exports = {
  ...require("@relynk/eslint-config/eslint-node"),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.lint.json"],
  },
  rules: {
    "@typescript-eslint/no-use-before-define": "warn",
    "consistent-return": "warn",
    "default-case": "warn",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-param-reassign": "warn",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "global-require": "off",
    "no-restricted-globals": "warn",
    "no-plusplus": "off",
  },
}
