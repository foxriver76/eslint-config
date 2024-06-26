module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "unicorn"
    ],
    "ignorePatterns": [
        "**/doc",
        "**/build"
    ],
    "reportUnusedDisableDirectives": true,
    "rules": {
        "curly": "error",
        "brace-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "no-console": "off",
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "caughtErrors": "all"
            }
        ],
        "no-useless-escape": "warn",
        "no-constant-condition": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1
            }
        ],
        "no-var": "error",
        "prefer-const": "error",
        "no-throw-literal": "error",
        "prefer-promise-reject-errors": "error",
        "require-await": "error",
        "no-return-await": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }
        ],
        "no-trailing-spaces": "error",
        "prettier/prettier": "error",
        "no-nested-ternary": "off",
        "no-unneeded-ternary": "error",
        "unicorn/prefer-module": "error",
        "unicorn/prefer-node-protocol": "error"
    },
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "overrides": [
        {
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 2021,
                "sourceType": "module",
                "project": "./tsconfig.json"
            },
            "files": [
                "**/*.ts",
                "**/*.tsx"
            ],
            "extends": [
                "plugin:@typescript-eslint/recommended"
            ],
            "rules": {
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        "functions": false,
                        "typedefs": false,
                        "classes": false
                    }
                ],
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "ignoreRestSiblings": true,
                        "argsIgnorePattern": "^_",
                        "caughtErrors": "all"
                    }
                ],
                "@typescript-eslint/no-object-literal-type-assertion": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-inferrable-types": [
                    "error",
                    {
                        "ignoreProperties": true,
                        "ignoreParameters": true
                    }
                ],
                "@typescript-eslint/ban-ts-comment": [
                    "error",
                    {
                        "ts-expect-error": false,
                        "ts-ignore": true,
                        "ts-nocheck": true,
                        "ts-check": false
                    }
                ],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        "allowNumber": true,
                        "allowBoolean": true,
                        "allowAny": true,
                        "allowNullish": true
                    }
                ],
                "@typescript-eslint/no-misused-promises": [
                    "error",
                    {
                        "checksVoidReturn": false
                    }
                ],
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        "allowTypedFunctionExpressions": true,
                        "allowExpressions": true
                    }
                ],
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-implied-eval": "off",
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error",
                    {
                        "allowArgumentsExplicitlyTypedAsAny": true
                    }
                ],
                "@typescript-eslint/no-this-alias": "off",
                "dot-notation": "off",
                "@typescript-eslint/dot-notation": [
                    "error",
                    {
                        "allowPrivateClassPropertyAccess": true,
                        "allowProtectedClassPropertyAccess": true
                    }
                ],
                "@typescript-eslint/no-unsafe-declaration-merging": "off",
                "quote-props": [
                    "error",
                    "as-needed"
                ]
            }
        },
        {
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 2019,
                "sourceType": "module",
                "project": "./tsconfig.json"
            },
            "files": [
                "**/*.test-d.ts"
            ],
            "extends": [
                "plugin:@typescript-eslint/recommended",
                "plugin:jsdoc/recommended-typescript"
            ],
            "rules": {
                "jsdoc/require-returns": 0,
                "jsdoc/tag-lines": ["error", "never", { "startLines": 1 }],
                "jsdoc/no-blank-blocks": ["error", { "enableFixer": true }],
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        "functions": false,
                        "typedefs": false,
                        "classes": false
                    }
                ],
                "@typescript-eslint/no-unused-vars": [
                    "off",
                    {
                        "ignoreRestSiblings": true,
                        "argsIgnorePattern": "^_"
                    }
                ],
                "@typescript-eslint/no-object-literal-type-assertion": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-inferrable-types": [
                    "error",
                    {
                        "ignoreProperties": true,
                        "ignoreParameters": true
                    }
                ],
                "@typescript-eslint/ban-ts-comment": [
                    "error",
                    {
                        "ts-expect-error": false,
                        "ts-ignore": true,
                        "ts-nocheck": true,
                        "ts-check": false
                    }
                ],
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        "allowTypedFunctionExpressions": true,
                        "allowExpressions": true
                    }
                ],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        "allowNumber": true,
                        "allowBoolean": true,
                        "allowAny": true,
                        "allowNullish": true
                    }
                ],
                "@typescript-eslint/no-misused-promises": [
                    "error",
                    {
                        "checksVoidReturn": false
                    }
                ],
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-implied-eval": "off",
                "@typescript-eslint/explicit-module-boundary-types": [
                    "warn",
                    {
                        "allowArgumentsExplicitlyTypedAsAny": true
                    }
                ],
                "@typescript-eslint/no-this-alias": "off",
                "dot-notation": "off",
                "@typescript-eslint/dot-notation": [
                    "error",
                    {
                        "allowPrivateClassPropertyAccess": true,
                        "allowProtectedClassPropertyAccess": true
                    }
                ],
                "quote-props": [
                    "error",
                    "as-needed"
                ],
                "@typescript-eslint/consistent-type-imports": "error",
                "@typescript-eslint/consistent-type-exports": "error"
            }
        }
    ]
}