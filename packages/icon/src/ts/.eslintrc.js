const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: __dirname + "/tsconfig.json",
        createDefaultProgram: true
    },
    plugins: ["@typescript-eslint"],
    settings: {
        react: {
            version: "detect"
        }
    },
    ignorePatterns: [".eslintrc.js"],
    rules: {
        // ----------------------         Base Rules         ---------------------- \\

        "linebreak-style": [ERROR, "unix"],
        quotes: [ERROR, "double"],
        semi: [WARN, "always"],
        "semi-spacing": [
            ERROR,
            {
                before: false,
                after: true
            }
        ],
        "semi-style": [ERROR, "last"],
        eqeqeq: [WARN, "always"],
        "default-case-last": WARN,
        "no-alert": WARN,
        "no-constructor-return": ERROR,
        "no-else-return": WARN,
        "no-eval": ERROR,
        "no-implied-eval": ERROR,
        "no-extend-native": ERROR,
        "no-extra-bind": WARN,
        "no-floating-decimal": ERROR,
        "no-implicit-coercion": WARN,
        "no-invalid-this": WARN,
        "no-iterator": ERROR,
        "no-labels": [
            ERROR,
            {
                allowSwitch: true
            }
        ],
        "no-lone-blocks": WARN,
        "no-magic-numbers": [
            WARN,
            {
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 1]
            }
        ],
        "no-multi-spaces": ERROR,
        "no-new-func": ERROR,
        "no-new-wrappers": ERROR,
        "no-param-reassign": ERROR,
        "no-proto": ERROR,
        "no-return-assign": WARN,
        "no-script-url": ERROR,
        "no-self-compare": WARN,
        "no-sequences": ERROR,
        "no-throw-literal": ERROR,
        "no-useless-catch": WARN,
        "no-useless-concat": WARN,
        "no-useless-return": WARN,
        "no-void": ERROR,
        "no-with": ERROR,
        "require-await": WARN,
        "array-bracket-spacing": WARN,
        "block-spacing": WARN,
        camelcase: WARN,
        "comma-style": [WARN, "last"],
        "computed-property-spacing": [WARN, "never"],
        "func-style": [
            WARN,
            "declaration",
            {
                allowArrowFunctions: true
            }
        ],
        "jsx-quotes": [WARN, "prefer-double"],
        "key-spacing": [
            ERROR,
            {
                beforeColon: false,
                afterColon: true,
                mode: "strict"
            }
        ],
        "keyword-spacing": [
            WARN,
            {
                before: true,
                after: true
            }
        ],
        "lines-between-class-members": [WARN, "always"],
        "new-cap": [
            ERROR,
            {
                newIsCap: true
            }
        ],
        "new-parens": [ERROR, "always"],
        "no-lonely-if": WARN,
        "no-mixed-operators": WARN,
        "no-multi-assign": ERROR,
        "no-unneeded-ternary": WARN,
        "object-curly-spacing": [WARN, "always"],
        "operator-linebreak": [WARN, "before"],
        "arrow-spacing": WARN,
        "no-confusing-arrow": WARN,
        "no-duplicate-imports": ERROR,
        "no-useless-computed-key": WARN,
        "no-useless-constructor": WARN,
        "no-var": ERROR,
        "prefer-const": ERROR,
        "prefer-rest-params": ERROR,
        "prefer-spread": WARN,
        "prefer-object-spread": WARN,
        "prefer-template": ERROR,
        "max-len": [
            WARN,
            {
                code: 120
            }
        ],
        "func-call-spacing": [ERROR, "never"],
        "comma-dangle": [WARN, "never"],
        "comma-spacing": [
            ERROR,
            {
                before: false,
                after: true
            }
        ],
        "brace-style": [WARN, "1tbs"],
        indent: [WARN, 4],
        "default-param-last": WARN,
        "no-empty-function": WARN,

        // --------------------         End Base Rules         ---------------------- \\

        // --------------------        TypeScript Rules        ---------------------- \\

        // disable base rules
        "func-call-spacing": OFF, // implemented by @typescript-eslint/func-call-spacing
        "comma-dangle": OFF, // implemented by @typescript-eslint/comma-dangle
        "comma-spacing": OFF, // implemented by @typescript-eslint/comma-spacing
        "brace-style": OFF, // implemented by @typescript-eslint/brace-style
        indent: OFF, // implemented by @typescript-eslint/indent
        "default-param-last": OFF, // implemented by @typescript-eslint/default-param-last
        "keyword-spacing": OFF, // implemented by @typescript-eslint/keyword-spacing
        "lines-between-class-members": OFF, // implemented by @typescript-eslint/lines-between-class-members
        "no-duplicate-imports": OFF, // implemented by @typescript-eslint/no-duplicate-imports
        "no-empty-function": OFF, // implemented by @typescript-eslint/no-empty-function
        "no-implied-eval": OFF, // implemented by @typescript-eslint/no-implied-eval
        "no-invalid-this": OFF, // implemented by @typescript-eslint/no-invalid-this
        "no-magic-numbers": OFF, // implemented by @typescript-eslint/no-magic-numbers
        "no-useless-constructor": OFF, // implemented by @typescript-eslint/no-useless-constructor
        quotes: OFF, // implemented by @typescript-eslint/quotes
        "require-await": OFF, // implemented by @typescript-eslint/require-await
        semi: OFF, // implemented by @typescript-eslint/semi
        "object-curly-spacing": OFF, // implemented by @typescript-eslint/object-curly-spacing

        "@typescript-eslint/array-type": ERROR,
        "@typescript-eslint/class-literal-property-style": [ERROR, "getters"],
        "@typescript-eslint/consistent-type-definitions": [ERROR, "interface"],
        "@typescript-eslint/explicit-function-return-type": ERROR,
        "@typescript-eslint/explicit-member-accessibility": [
            ERROR,
            {
                accessibility: "explicit",
                overrides: {
                    constructors: "no-public"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            ERROR,
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                },
                multilineDetection: "brackets"
            }
        ],
        "@typescript-eslint/method-signature-style": [ERROR, "method"],
        "@typescript-eslint/no-confusing-non-null-assertion": WARN,
        "@typescript-eslint/no-extra-non-null-assertion": ERROR,
        "@typescript-eslint/no-invalid-void-type": ERROR,
        "@typescript-eslint/no-non-null-assertion": ERROR,
        "@typescript-eslint/no-parameter-properties": [
            ERROR,
            {
                allows: ["readonly"]
            }
        ],
        "@typescript-eslint/no-require-imports": ERROR,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": WARN,
        "@typescript-eslint/no-unnecessary-condition": WARN,
        "@typescript-eslint/no-unnecessary-type-constraint": WARN,
        "@typescript-eslint/prefer-enum-initializers": WARN,
        "@typescript-eslint/prefer-for-of": WARN,
        "@typescript-eslint/prefer-function-type": WARN,
        "@typescript-eslint/prefer-includes": WARN,
        "@typescript-eslint/prefer-literal-enum-member": ERROR,
        "@typescript-eslint/prefer-nullish-coalescing": WARN,
        "@typescript-eslint/prefer-optional-chain": WARN,
        "@typescript-eslint/prefer-readonly": WARN,
        "@typescript-eslint/prefer-string-starts-ends-with": WARN,
        "@typescript-eslint/require-array-sort-compare": WARN,
        "@typescript-eslint/type-annotation-spacing": WARN,
        "@typescript-eslint/unified-signatures": WARN,
        "@typescript-eslint/brace-style": [WARN, "1tbs"],
        "@typescript-eslint/comma-dangle": [WARN, "never"],
        "@typescript-eslint/comma-spacing": [
            ERROR,
            {
                before: false,
                after: true
            }
        ],
        "@typescript-eslint/default-param-last": WARN,
        "@typescript-eslint/func-call-spacing": [ERROR, "never"],
        "@typescript-eslint/indent": [WARN, 4], // implemented by @typescript-eslint/indent
        "@typescript-eslint/keyword-spacing": [
            WARN,
            {
                before: true,
                after: true
            }
        ],
        "@typescript-eslint/lines-between-class-members": [WARN, "always"],
        "@typescript-eslint/no-duplicate-imports": ERROR,
        "@typescript-eslint/no-empty-function": WARN,
        "@typescript-eslint/no-implied-eval": ERROR,
        "@typescript-eslint/no-invalid-this": WARN,
        "@typescript-eslint/no-magic-numbers": [
            WARN,
            {
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 1],
                ignoreDefaultValues: true,
                ignoreEnums: true
            }
        ],
        "@typescript-eslint/no-useless-constructor": WARN,
        "@typescript-eslint/quotes": [ERROR, "double"],
        "@typescript-eslint/require-await": WARN,
        "@typescript-eslint/semi": [WARN, "always"],
        "@typescript-eslint/object-curly-spacing": [WARN, "always"]

        // --------------------      End TypeScript Rules       ---------------------- \\
    }
};
