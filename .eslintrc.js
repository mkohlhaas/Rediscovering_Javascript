module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
    ],
    "rules": {
        "eqeqeq": "error",
        "strict": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-console": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
        "error",
        "unix"
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
