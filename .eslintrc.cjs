module.exports = {
    env: {
        browser: true,
        es2022: true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        'plugin:jsx-a11y/recommended',
        "standard-with-typescript",
        "eslint-config-prettier",
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: './tsconfig.json',
    },
    plugins: [
        "react",
        "@emotion"
    ],
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/no-unknown-property": ["error", { "ignore": ["css"] }]
    }
}
