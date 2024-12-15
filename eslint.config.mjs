import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/**@type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended, //chooses the specified
  {
    files: ["**/*.js", "**/*.jsx"], //Choose everything to do with js files
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier, //Turns off formatting which is useful
];
