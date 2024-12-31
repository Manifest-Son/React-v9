import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

/**@type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended, //chooses the specified
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  ...pluginQuery.configs["flat/recommended"],
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
    rules: {
      "react/no-unescaped-entities": "off", //This makes you change things like ' to &apos
      "react/prop-types": "off", //This ignores prop types that no one has used for a while
    },
  },
  prettier, //Turns off formatting which is useful
];
