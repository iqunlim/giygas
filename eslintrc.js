module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "prettier",
  ],
  rules: {
    // ESLint base rules
    "no-console": "warn",
    "no-unused-vars": "off", // handled by TS
    "no-empty-function": "off",

    // TypeScript rules
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

    // Import rules
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "off", // let TS handle module resolution

    // Node rules
    "node/no-unsupported-features/es-syntax": "off", // allow ESM
    "node/no-missing-import": "off", // handled by TS

    // Prettier
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
