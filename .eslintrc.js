module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "prettier",
        "airbnb",
        "standard-with-typescript",
        "next/core-web-vitals",
        "plugin:storybook/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
    }
};