// eslint.config.js — Flat ESLint config for React + TypeScript

import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Ignore build output and node_modules
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
    ],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: "@typescript-eslint/parser",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
    rules: {
      // General rules
      "no-unused-vars": "off",
      "no-undef": "off",

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",

      // React and Hooks rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);
