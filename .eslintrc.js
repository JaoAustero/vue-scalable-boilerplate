/**
 * @file A configuration for `EcmaScript Lint` to enable the rules and formats
 * that needs to be follow.
 */

'use-strict'

module.exports = {
    root: true,

    parserOptions:
    {
        parser: 'babel-eslint',
    },

    env:
    {
        browser: true,
    },

    /**
     * Consider switching to `plugin:vue/strongly-recommended` or
     * `plugin:vue/recommended` for stricter rules.
     *
     * @see {@link https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention}
     */
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],

    /**
     * Required lint in all vue files
     *
     * @see {@link https://eslint.org/docs/developer-guide/working-with-plugins}
     */
    plugins: [
        'vue'
    ],

    /**
     * Add custom rules inside of the object below.
     *
     * @see {@link https://eslint.org/docs/rules/}
     */
    rules: {
        /**
         * Turned off the arrow style
         *
         * @see {@link https://eslint.org/docs/rules/prefer-arrow-callback}
         */
        'arrow-body-style': 'off',

        /**
         * Force the curly brace new line
         *
         * @see {@link https://eslint.org/docs/rules/brace-style}
         */
        'brace-style': ['error', 'allman'],

        /**
         * Requires `camelcase` on properties
         * @see {@link https://eslint.org/docs/rules/camelcase}
         */
        camelcase: 'off',

        /**
         * Force you to add comma on multilines.
         *
         * @see {@link https://eslint.org/docs/rules/comma-dangle}
         */
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],

        /**
         * Spacing around commas improves readability of a list of items
         *
         * @see {@link https://eslint.org/docs/rules/comma-spacing}
         */
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],

        /**
         * Requires comma after of the text not on new line
         *
         * @see {@link https://eslint.org/docs/rules/comma-style}
         */
        'comma-style': ['error', 'last'],

        /**
         * Requires comma after of the text not on new line
         *
         * @see {@link https://eslint.org/docs/rules/consistent-return}
         */
        'consistent-return': 'off',

        /**
         * Allow to assigned name on functions if it's required on ES6
         * environment
         *
         * @see {@link https://eslint.org/docs/rules/func-names}
         */
        'func-names': ['error', 'as-needed'],

        /**
         * We override the configuration of airbnb, because
         * Some cases we need to export named source.
         *
         * @see {@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md}
         */
        "import/prefer-default-export": "off",

        /**
         * Requires 4 space; We enforce case to have indent
         * level greater than switch
         * @see {@link https://eslint.org/docs/rules/indent}
         */
        'indent': [
            'error',
            4,
            {
                "SwitchCase": 1,
            },
        ],

        /**
         * Enforce new line after arrow function
         *
         * @see {@link https://eslint.org/docs/rules/implicit-arrow-linebreak}
         */
        'implicit-arrow-linebreak': 'off',

        /**
         * Ensures an imported module can be resolved to a module on the local
         * filesystem, as defined by standard Node require.resolve behavior.
         *
         * @see {@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md}
         */
        'import/no-unresolved': 'off',

        /**
         * Configurations for test files
         *
         * @see {@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md}
         */
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: [
                    'test/unit/index.js'
                ],
            },
        ],

        /**
         * Enforce consistent line ending
         *
         * @see {@link https://eslint.org/docs/rules/linebreak-style}
         */
        'linebreak-style': 'off',

        /**
         * Enforce to break the long line of code to make the code more
         * readable, But ignores some cases like import with very long path
         *
         * @see {@link https://eslint.org/docs/rules/max-len}
         */
        'max-len': [
            'error',
            {
                'code': 200,
                'ignoreTrailingComments': true,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                "ignorePattern": 'import(.*)',
            }
        ],


        /**
         * Requires captical letter on constructor or new instance
         *
         * @link {@see https://eslint.org/docs/rules/new-cap}
         */
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: false,
            },
        ],

        /**
         * Let console to be use for debuggine before production make the
         * APP_DEBUG to false in .env to hide consoles
         *
         * @see {@link https://eslint.org/docs/rules/no-console}
         */
        'no-console': [
            'error',
            {
                allow: [
                    'log',
                    'warn',
                    'error',
                    'table',
                ],
            },
        ],

        /**
         * Doesn't allow empty conditions like try catch if else, white,
         * and switch case
         *
         * @see {@link https://eslint.org/docs/rules/no-empty}
         */
        'no-empty': [
            'error',
            {
                allowEmptyCatch: false,
            },
        ],

        /**
         * Doesn't allow empty functions, except constructor
         *
         * @see {@link https://eslint.org/docs/rules/no-empty-function}
         */
        'no-empty-function': [
            'error',
            {
                allow: [
                    'constructors',
                ],
            },
        ],


        /**
         * Disallow space and tabs together to avoid inconsistent spaces
         *
         * @see {@link https://eslint.org/docs/rules/no-mixed-spaces-and-tabs}
         */
        'no-mixed-spaces-and-tabs': [
            'error',
            'smart-tabs',
        ],

        /**
         * Allow the short hand of if-else condition, Need to use inside of
         * return, in JSX doesn't saccept if-else long-hand condition
         *
         * @see {@link https://eslint.org/docs/rules/no-nested-ternary}
         */
        'no-nested-ternary': 'off',

        /**
         * Allow ++ over +=1 for team preference and overrides the airbnb
         * default configuration
         *
         * @see {@link https://eslint.org/docs/6.0.0/rules/no-plusplus}
         */
        "no-plusplus": 'off',

        /**
         * Allow the short hand of if-else condition, Need to use inside of
         * return, in JSX doesn't saccept if-else long-hand condition
         *
         * @see {@link https://eslint.org/docs/rules/no-nested-ternary}
         */
        'no-nested-ternary': 'off',

        /**
         * Disallow spaces after {}
         *
         * @see {@link https://eslint.org/docs/rules/no-trailing-spaces}
         */
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: false,
            },
        ],

        /**
         * Turned off to avoid error due to declaring some variable as global in
         * window.*
         *
         * @see {@link https://eslint.org/docs/rules/no-undef}
         */
        'no-undef': 'off',

        /**
         * Turned off the new to avoid creating constant or variable.
         *
         * @see {@link https://eslint.org/docs/rules/no-new}
         */
        'no-new': 'off',

        /**
         * Enforce to break the long import object
         *
         * @see {@link https://eslint.org/docs/rules/object-curly-newline}
         */
        'object-curly-newline': 'off',

        /**
         * Force to use spread object than Object.assign
         *
         * @see {@link https://eslint.org/docs/rules/prefer-object-spread}
         */
        'prefer-object-spread': 'off',

        /**
         * Enforces usage of destructuring instead of accessing a property
         * through a member expression.
         *
         * @see {@link https://eslint.org/docs/rules/prefer-destructuring}
         */
        'prefer-destructuring': 'off',

        /**
         * Enforce all object properties should wrap on single quotes
         *
         * @see {@link https://eslint.org/docs/rules/quote-props}
         */
        'quote-props': 'off',

        /**
         * Requires semi colon after function
         *
         * @see {@link https://eslint.org/docs/rules/semi-style}
         */
        'semi-style': ['error', 'last'],

        // don't require .vue extension when importing

        /**
         * Don't require estension when importing
         *
         * @see {@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md}
         */
        'import/extensions': 'never',

        /**
         * disallow reassignment of function parameters and disallow parameter
         * object manipulation except for specific exclusions
         *
         * @see {@link https://eslint.org/docs/rules/no-param-reassign}
         */
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state', // for vuex state
                    'acc', // for reduce accumulators
                    'e', // for e.returnvalue
                ],
            },
        ],

        /**
         * Allow debugger during development
         *
         * @see {@link https://eslint.org/docs/rules/no-debugger}
         */
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        /**
         * Set the rules for shorthand in object
         *
         * @see {@link https://eslint.org/docs/rules/object-shorthand}
         */
        'object-shorthand': 'off',

        /**
         * Shadowing is the process by which a local variable shares the
         * same name as a variable in its containing scope
         *
         * @see {@link https://eslint.org/docs/rules/no-shadow}
         */
        'no-shadow': 'off',
    },
};
