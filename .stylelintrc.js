/**
 * @file A configuration for `style lint` to enable the rules and formats
 * that needs to be follow. 
 */

'use-strict'

module.exports = {
    root: true,

    rules:
    {
        /**
         * Specify a blacklist of disallowed at-rules.
         * 
         * @see {@link {@link https://stylelint.io/user-guide/rules/at-rule-blacklist}
         */
        'at-rule-blacklist': null,

        /**
         * Require or disallow an empty line before at-rules.
         * 
         * @see {@link {@link https://stylelint.io/user-guide/rules/at-rule-empty-line-before}
         */
        'at-rule-empty-line-before': [
            'always',
            {
                'ignore': [
                    'after-comment',
                    'first-nested',
                    'inside-block',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                ],
            }
        ],

        /**
         * Specify lowercase or uppercase for at-rules names.
         *
         * @type {String}
         * 
         * @see {@link {@link https://stylelint.io/user-guide/rules/at-rule-name-case}
         */
        'at-rule-name-case': 'lower',

        /**
         * Require a newline after at-rule names.
         * 
         * @type {String}
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-name-newline-after
         */
        'at-rule-name-newline-after': 'always-multi-line',

        /**
         * Require a single space after at-rule names.
         * 
         * @see {@link {@link https://stylelint.io/user-guide/rules/at-rule-name-space-after}
         */
        'at-rule-name-space-after': 'always',

        /**
         * Disallow vendor prefixes for at-rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix}
         */
        'at-rule-no-vendor-prefix': true,

        /**
         * Type: Object
         * Options: {'at-rule-name': ['array', 'of', 'properties']}
         * 
         * Specify a requirelist of properties for an at-rule.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-property-requirelist}
         */
        'at-rule-property-requirelist': {
            'font-face': [
                'font-display',
                'font-family',
                'src'
            ]
        },

        /**
         * Require a newline after the semicolon of at-rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after}
         */
        'at-rule-semicolon-newline-after': 'always',

        /**
         * Require a single space or disallow whitespace before the semicolons
         * of at-rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before}
         */
        'at-rule-semicolon-space-before': 'never',

        /**
         * Specify a whitelist of allowed at-rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/at-rule-whitelist}
         */
        'at-rule-whitelist': [
            'keyframes',
            'media',
            'include',
            'import',
            'each',
            'if',
            'else if',
            'else',
            'mixin',
            'function',
            'return',
            'warn',
            'error',
            'font-face',
            'supports',
            'page'
        ],

        /**
         * Require or disallow an empty line before the closing brace of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before}
         */
        'block-closing-brace-empty-line-before': 'never',

        /**
         * Require a newline or disallow whitespace after the closing brace of
         * blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-closing-brace-newline-after}
         */
        'block-closing-brace-newline-after': 'always',

        /**
         * Require a newline or disallow whitespace before the closing brace of
         * blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-closing-brace-newline-before}
         */
        'block-closing-brace-newline-before': 'always-multi-line',

        /**
         * Require a single space or disallow whitespace after the closing
         * brace of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-closing-brace-space-after}
         */
        'block-closing-brace-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the closing
         * brace of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-closing-brace-space-before}
         */
        'block-closing-brace-space-before': 'always-single-line',

        /**
         * Disallow empty blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-no-empty}
         */
        'block-no-empty': true,

        /**
         * Require a newline after the opening brace of blocks. This rule
         * allows an end-of-line comment followed by a newline
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-opening-brace-newline-after}
         */
        'block-opening-brace-newline-after': 'always',

        /**
         * Require a newline or disallow whitespace before the opening brace
         * of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-opening-brace-newline-before}
         */
        'block-opening-brace-newline-before': 'never-single-line',

        /**
         * Require a single space or disallow whitespace after the opening
         * brace of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-opening-brace-space-after}
         */
        'block-opening-brace-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the opening
         * brace of blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/block-opening-brace-space-before}
         */
        'block-opening-brace-space-before': 'always',

        /**
         * Specify lowercase or uppercase for hex colors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/color-hex-case}
         */
        'color-hex-case': 'upper',

        /**
         * Specify short or long notation for hex colors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/color-hex-length}
         */
        'color-hex-length': 'long',

        /**
         * Require (where possible) or disallow named colors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/color-named}
         */
        'color-named': 'never',

        /**
         * Disallow hex colors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/color-no-hex}
         */
        'color-no-hex': null,

        /**
         * Disallow invalid hex colors.Longhand hex colors can be either 6 or
         * 8 (with alpha channel) hexadecimal characters. And their shorthand
         * variants are 3 and 4 characters respectively.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/color-no-invalid-hex}
         */
        'color-no-invalid-hex': true,

        /**
         * We require empty line after comment to make it as divider or 
         * that comment is for the new line, But allows comment after brace
         * 
         * @see {@link https://stylelint.io/user-guide/rules/comment-empty-line-before}
         */
        'comment-empty-line-before': [
            'always',
            {
                'except': ['first-nested']
            }
        ],

        /**
         * Disallow empty comments.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/comment-no-empty}
         */
        'comment-no-empty': true,

        /**
         * Require or disallow whitespace on the inside of comment markers.
         * Any number of asterisks are allowed at the beginning or end of
         * the comment.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/comment-whitespace-inside}
         */
        'comment-whitespace-inside': 'always',

        /**
         * Specify a blacklist of disallowed words within comments.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/comment-word-blacklist}
         */
        'comment-word-blacklist': null,

        /**
         * Specify a pattern for custom media query names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/custom-media-pattern}
         */
        'custom-media-pattern': null,

        /**
         * Require or disallow an empty line before custom properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/custom-property-empty-line-before}
         */
        'custom-property-empty-line-before': [
            'always',
            {
                'except': [
                    'after-comment',
                    'after-custom-property',
                ]
            }
        ],

        /**
         * Specify a pattern for custom properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/custom-property-pattern}
         */
        'custom-property-pattern': 'uis-.+',

        /**
         * Require a single space or disallow whitespace after the bang of
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-bang-space-after}
         */
        'declaration-bang-space-after': 'never',

        /**
         * Require a single space or disallow whitespace before the bang of
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-bang-space-before}
         */
        'declaration-bang-space-before': 'always',

        /**
         * Disallow duplicate properties within declaration blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties}
         */
        'declaration-block-no-duplicate-properties': true,

        /**
         * Disallow longhand properties that can be combined into one
         * shorthand property.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties}
         */
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                'ignoreShorthands': [
                    'margin',
                    'padding',
                    'transition'
                ]
            }
        ],

        /**
         * Disallow shorthand properties that override related longhand
         * properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides}
         */
        'declaration-block-no-shorthand-property-overrides': true,

        /**
         * Require a newline or disallow whitespace after the semicolons of
         * declaration blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after}
         */
        'declaration-block-semicolon-newline-after': null,

        /**
         * Require a newline or disallow whitespace before the semicolons
         * of declaration blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before}
         */
        'declaration-block-semicolon-newline-before': null,

        /**
         * Type: String
         * Options: 'always' | 'never' | 'always-single-line' |
         *          'never-single-line'
         * 
         * Require a single space or disallow whitespace after the semicolons
         * of declaration blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after}
         */
        'declaration-block-semicolon-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the semicolons 
         * of declaration blocks.
         * 
         * @see{@link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before}
         */
        'declaration-block-semicolon-space-before': 'never',

        /**
         * Limit the number of declarations within a single-line declaration
         * block.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations}
         */
        'declaration-block-single-line-max-declarations': 1,

        /**
         * Require or disallow a trailing semicolon within declaration blocks.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon}
         */
        'declaration-block-trailing-semicolon': 'always',

        /**
         * Require a newline or disallow whitespace after the colon of
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-colon-newline-after}
         */
        'declaration-colon-newline-after': null,

        /**
         * Require a single space or disallow whitespace after the colon of
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-colon-space-after}
         */
        'declaration-colon-space-after': 'always',

        /**
         * Require a single space or disallow whitespace before the colon of
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-colon-space-before}
         */
        'declaration-colon-space-before': 'never',

        /**
         * Require or disallow an empty line before declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-empty-line-before}
         */
        'declaration-empty-line-before': null,

        /**
         * Disallow !important within declarations. If you always want
         * !important in your declarations, e.g. if you're writing user styles,
         * you can safely add them using postcss-safe-important.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-no-important}
         */
        'declaration-no-important': null,

        /**
         * Specify a blacklist of disallowed property and unit pairs within
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist}
         */
        'declaration-property-unit-blacklist': null,

        /**
         * Specify a whitelist of allowed property and unit pairs within
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist}
         */
        'declaration-property-unit-whitelist': null,

        /**
         * Specify a blacklist of disallowed property and value pairs within declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-property-value-blacklist}
         */
        'declaration-property-value-blacklist': null,

        /**
         * Specify a whitelist of allowed property and value pairs within
         * declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/declaration-property-value-whitelist}
         */
        'declaration-property-value-whitelist': null,

        /**
         * Specify whether or not quotation marks should be used around font
         * family names. This rule checks the font and font-family properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/font-family-name-quotes}
         */
        'font-family-name-quotes': 'always-unless-keyword',

        /**
         * Disallow duplicate font family names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/font-family-no-duplicate-names}
         */
        'font-family-no-duplicate-names': true,

        /**
         * Disallow missing generic families in lists of font family names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword}
         */
        'font-family-no-missing-generic-family-keyword': true,

        /**
         * Require numeric or named (where possible) font-weight values. Also,
         * when named values are expected, require only valid names. Valid
         * font-weight names are normal, bold, bolder, and lighter.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/font-weight-notation}
         */
        'font-weight-notation': 'numeric',

        /**
         * Specify a blacklist of disallowed functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-blacklist}
         */
        'function-blacklist': null,

        /**
         * Disallow an invalid expression within calc functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-calc-no-invalid}
         */
        'function-calc-no-invalid': true,

        /**
         * Disallow an unspaced operator within calc functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator}
         */
        'function-calc-no-unspaced-operator': true,

        /**
         * Requires newline or disallow whitespace after commas when not multiline
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-comma-newline-after}
         */
        'function-comma-newline-after': null,

        /**
         * Require a newline or disallow whitespace before the commas of
         * functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-comma-newline-before}
         */
        'function-comma-newline-before': null,

        /**
         * Require a single space or disallow whitespace after the commas of
         * functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-comma-space-after}
         */
        'function-comma-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the commas of
         * functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-comma-space-before}
         */
        'function-comma-space-before': null,

        /**
         * Disallow direction values in linear-gradient() calls that are not
         * valid according to the standard syntax.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction}
         */
        'function-linear-gradient-no-nonstandard-direction': true,

        /**
         * Limit the number of adjacent empty lines within functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-max-empty-lines}
         */
        'function-max-empty-lines': 0,

        /**
         * Specify lowercase or uppercase for function names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-name-case}
         */
        'function-name-case': 'lower',

        /**
         * Require a newline or disallow whitespace on the inside of the
         * parentheses of functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-parentheses-newline-inside}
         */
        'function-parentheses-newline-inside': 'always-multi-line',

        /**
         * Require a single space or disallow whitespace on the inside of the
         * parentheses of functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-parentheses-space-inside}
         */
        'function-parentheses-space-inside': null,

        /**
         * Disallow scheme-relative urls.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-url-no-scheme-relative}
         */
        'function-url-no-scheme-relative': true,

        /**
         * Require or disallow quotes for urls.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-url-quotes}
         */
        'function-url-quotes': 'always',

        /**
         * Specify a blacklist of disallowed URL schemes.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-url-scheme-blacklist}
         */
        'function-url-scheme-blacklist': null,

        /**
         * Specify a whitelist of allowed URL schemes.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-url-scheme-whitelist}
         */
        'function-url-scheme-whitelist': null,

        /**
         * Specify a whitelist of allowed functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-whitelist}
         */
        'function-whitelist': null,

        /**
         * Require or disallow whitespace after functions.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/function-whitespace-after}
         */
        'function-whitespace-after': 'always',

        /**
         * Specify indention
         * 
         * @see {@link https://stylelint.io/user-guide/rules/indentation}
         */
        'indentation': [
            4 | 'space',
            {
                'baseIndentLevel': 1,
            },
            {
                'indentInsideParens': 'twice',
            },
            {
                'indentClosingBrace': false,
            },
        ],

        /**
         * Disallow !important within keyframe declarations.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/keyframe-declaration-no-important}
         */
        'keyframe-declaration-no-important': true,

        /**
         * Specify a pattern for keyframe names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/keyframes-name-pattern}
         */
        'keyframes-name-pattern': null,

        /**
         * Disallow units for zero lengths.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/length-zero-no-unit}
         */
        'length-zero-no-unit': null,

        /**
         * Specify unix or windows linebreaks
         * 
         * @see {@link https://stylelint.io/user-guide/rules/linebreaks}
         */
        'linebreaks': null,

        /**
         * Limit the number of adjacent empty lines.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/max-empty-lines}
         */
        'max-empty-lines': 5,

        /**
         * Limit the length of the line
         * 
         * @see {@link https://stylelint.io/user-guide/rules/max-line-length}
         */
        'max-line-length': [
            80,
            {
                'ignore': [
                    'non-comments',
                ]
            }
        ],

        /**
         * Limit the depth of nesting
         * 
         * @see {@link https://stylelint.io/user-guide/rules/max-nesting-depth}
         */
        'max-nesting-depth': 4,

        /**
         * Require a single space or disallow whitespace after the colon in
         * media features.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-colon-space-after}
         */
        'media-feature-colon-space-after': 'always',

        /**
         * Require a single space or disallow whitespace before the colon in
         * media features.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-colon-space-before}
         */
        'media-feature-colon-space-before': 'never',

        /**
         * Specify a blacklist of disallowed media feature names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-blacklist}
         */
        'media-feature-name-blacklist': null,

        /**
         * Specify lowercase or uppercase for media feature names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-case}
         */
        'media-feature-name-case': 'lower',

        /**
         * Disallow unknown media feature names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-no-unknown}
         */
        'media-feature-name-no-unknown': true,

        /**
         * Disallow vendor prefixes for media feature names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix}
         */
        'media-feature-name-no-vendor-prefix': true,

        /**
         * Specify arguments value that allowed
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist}
         */
        'media-feature-name-value-whitelist': null,

        /**
         * Specify a whitelist of allowed media feature names.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-name-whitelist}
         */
        'media-feature-name-whitelist': null,

        /**
         * Require a single space or disallow whitespace on the inside of the
         * parentheses within media features.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside}
         */
        'media-feature-parentheses-space-inside': 'never',

        /**
         * Require a single space or disallow whitespace after the range
         * operator in media features.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after}
         */
        'media-feature-range-operator-space-after': 'always',

        /**
         * Require whitespace before media operator
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before}
         */
        'media-feature-range-operator-space-before': 'always',

        /**
         * Require a newline or disallow whitespace after the commas of media
         * query lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after}
         */
        'media-query-list-comma-newline-after': 'always-multi-line',

        /**
         * Require a newline or disallow whitespace before the commas of media
         * query lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before}
         */
        'media-query-list-comma-newline-before': null,

        /**
         * Require a single space or disallow whitespace after the commas of
         * media query lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-query-list-comma-space-after}
         */
        'media-query-list-comma-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the commas of
         * media query lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/media-query-list-comma-space-before}
         */
        'media-query-list-comma-space-before': null,

        /**
         * Disallow selectors of lower specificity from coming after
         * overriding selectors of higher specificity
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-descending-specificity}
         */
        'no-descending-specificity': null,

        /**
         * Disallow duplicate @import rules within a stylesheet.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules}
         */
        'no-duplicate-at-import-rules': true,

        /**
         * Disallow duplicate selectors within a stylesheet.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-duplicate-selectors}
         */
        'no-duplicate-selectors': null,

        /**
         * Disallow empty first lines.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-empty-first-line}
         */
        'no-empty-first-line': true,

        /**
         * Disallow empty sources.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-empty-source}
         */
        'no-empty-source': true,

        /**
         * Disallow trailing whitespace
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-eol-whitespace}
         */
        'no-eol-whitespace': true,

        /**
         * Disallow extra semicolns
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-extra-semicolons}
         */
        'no-extra-semicolons': true,

        /**
         * Disallow double-slash comments (//...) which are not supported by
         * CSS and could lead to unexpected results.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments}
         */
        'no-invalid-double-slash-comments': true,

        /**
         * Disallow missing end-of-source newlines.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline}
         */
        'no-missing-end-of-source-newline': true,

        /**
         * Disallow unkown animation
         * 
         * @see {@link https://stylelint.io/user-guide/rules/no-unknown-animations}
         */
        'no-unknown-animations': true,

        /**
         * Requires number zero on leading
         * 
         * @see {@link https://stylelint.io/user-guide/rules/number-leading-zero}
         */
        'number-leading-zero': 'always',

        /**
         * Limit the number of decimal places allowed in numbers.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/number-max-precision}
         */
        'number-max-precision': 3,

        /**
         * Disallow trailing zeros in numbers.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/number-no-trailing-zeros}
         */
        'number-no-trailing-zeros': true,

        /**
         * Specify a blacklist of disallowed properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/property-blacklist}
         */
        'property-blacklist': null,

        /**
         * Specify lowercase or uppercase for properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/property-case}
         */
        'property-case': 'lower',

        /**
         * Disallow unknown properties
         * 
         * @see {@link https://stylelint.io/user-guide/rules/property-no-unknown}
         */
        'property-no-unknown': true,

        /**
         * Disallow vendor prefixes for properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/property-no-vendor-prefix}
         */
        'property-no-vendor-prefix': true,

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'unprefixed'] | 'properties'
         * 
         * Specify a whitelist of allowed properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/property-whitelist}
         */
        'property-whitelist': null,

        /**
         * Require or disallow an empty line before rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/rule-empty-line-before}
         */
        'rule-empty-line-before': [
            'always',
            {
                'ignore': [
                    'after-comment',
                    'first-nested',
                    'inside-block',
                ]
            }
        ],

        /**
         * Require a single space or disallow whitespace on the inside of
         * the brackets within attribute selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside}
         */
        'selector-attribute-brackets-space-inside': 'never',

        /**
         * Type: Array | String
         * Options: ['array', 'of', 'properties'] | 'operator'
         * 
         * Specify a blacklist of disallowed attribute operators.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist}
         */
        'selector-attribute-operator-blacklist': null,

        /**
         * Type: String
         * Options: 'always' | 'never'
         * 
         * Require a single space or disallow whitespace after operators within
         * attribute selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after}
         */
        'selector-attribute-operator-space-after': 'never',

        /**
         * Require a single space or disallow whitespace before operators
         * within attribute selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before}
         */
        'selector-attribute-operator-space-before': 'never',

        /**
         * Specify a whitelist of allowed attribute operators.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist}
         */
        'selector-attribute-operator-whitelist': null,

        /**
         * Require or disallow quotes for attribute values.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-attribute-quotes}
         */
        'selector-attribute-quotes': 'always',

        /**
         * Specify a pattern for class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-class-pattern}
         */
        'selector-class-pattern': 'uis-[a-z]+.',

        /**
         * Specify a blacklist of disallowed combinators.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-combinator-blacklist}
         */
        'selector-combinator-blacklist': null,

        /**
         * Require a single space or disallow whitespace after the combinators
         * of selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-combinator-space-after}
         */
        'selector-combinator-space-after': 'always',

        /**
         * Require a single space or disallow whitespace before the
         * combinators of selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-combinator-space-before}
         */
        'selector-combinator-space-before': 'always',

        /**
         * Specify a whitelist of allowed combinators.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-combinator-whitelist}
         */
        'selector-combinator-whitelist': null,

        /**
         * Disallow non-space characters for descendant combinators of
         * selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space}
         */
        'selector-descendant-combinator-no-non-space': true,

        /**
         * Specify patter of ID value
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-id-pattern}
         */
        'selector-id-pattern': null,

        /**
         * Require a newline or disallow whitespace after the commas of
         * selector lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-list-comma-newline-after}
         */
        'selector-list-comma-newline-after': 'always-multi-line',

        /**
         * Require a newline or disallow whitespace before the commas of
         * selector lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-list-comma-newline-before}
         */
        'selector-list-comma-newline-before': null,

        /**
         * Require a single space or disallow whitespace after the commas of
         * selector lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-list-comma-space-after}
         */
        'selector-list-comma-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the commas 
         * f selector lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-list-comma-space-before}
         */
        'selector-list-comma-space-before': 'never',

        /**
         * Limit the number of attribute selectors in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-attribute}
         */
        'selector-max-attribute': 2,

        /**
         * Limit the number of classes in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-class}
         */
        'selector-max-class': 4,

        /**
         * Limit the number of combinators in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-combinators}
         */
        'selector-max-combinators': 4,

        /**
         * Limit the number of compound selectors in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-compound-selectors}
         */
        'selector-max-compound-selectors': 4,

        /**
         * Limit the number of adjacent empty lines within selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-empty-lines}
         */
        'selector-max-empty-lines': 0,

        /**
         * Limit the number of ID selectors in a selector.
         *
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-id}
         */
        'selector-max-id': 2,

        /**
         * Limit the number for pseudo-classes in a selector
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-pseudo-class}
         */
        'selector-max-pseudo-class': 4,

        /**
         * Limit the specify to selectors
         *
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-specificity}
         */
        'selector-max-specificity': null,

        /**
         * Limit the number of type selectors in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-type}
         */
        'selector-max-type': 4,

        /**
         * Limit the number of universal selectors in a selector.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-max-universal}
         */
        'selector-max-universal': 2,

        /**
         * Specify a pattern for the selectors of rules nested within rules.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-nested-pattern}
         */
        'selector-nested-pattern': null,

        /**
         * Disallow qualifying a selector by type.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-no-qualifying-type}
         */
        'selector-no-qualifying-type': null,

        /**
         * Disallow vendor prefixes for selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-no-vendor-prefix}
         */
        'selector-no-vendor-prefix': null,

        /**
         * Specify a blacklist of disallowed pseudo-class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist}
         */
        'selector-pseudo-class-blacklist': null,

        /**
         * Specify lowercase or uppercase for pseudo-class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-class-case}
         */
        'selector-pseudo-class-case': 'lower',

        /**
         * Disallow unknown pseudo-class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown}
         */
        'selector-pseudo-class-no-unknown': true,

        /**
         * Require a single space or disallow whitespace on the inside of the
         * parentheses within pseudo-class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside}
         */
        'selector-pseudo-class-parentheses-space-inside': 'never',

        /**
         * Specify a whitelist of allowed pseudo-class selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist}
         */
        'selector-pseudo-class-whitelist': null,

        /**
         * Specify a blacklist of disallowed pseudo-element selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist}
         */
        'selector-pseudo-element-blacklist': null,

        /**
         * Specify lowercase or uppercase for pseudo-element selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-element-case}
         */
        'selector-pseudo-element-case': 'lower',

        /**
         * Specify single or double colon notation for applicable
         * pseudo-elements.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation}
         */
        'selector-pseudo-element-colon-notation': 'single',

        /**
         * Disallow unknown pseudo-element selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown}
         */
        'selector-pseudo-element-no-unknown': true,

        /**
         * Specify a whitelist of allowed pseudo-element selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist}
         */
        'selector-pseudo-element-whitelist': null,

        /**
         * Specify lowercase or uppercase for type selectors.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/selector-type-case}
         */
        'selector-type-case': 'lower',

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow unknown type selectors.
         *
         * @see {@link https://stylelint.io/user-guide/rules/selector-type-no-unknown}
         */
        'selector-type-no-unknown': true,

        /**
         * Type: Boolean
         * Options: true
         * 
         * Disallow redundant values in shorthand properties.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values}
         */
        'shorthand-property-no-redundant-values': true,

        /**
         * Disallow (unescaped) newlines in strings.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/string-no-newline}
         */
        'string-no-newline': true,

        /**
         * Specify single or double quotes around strings.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/string-quotes}
         */
        'string-quotes': 'single',

        /**
         * Specify the minimum number of milliseconds for time values.
         * 
         * Referene: {@link https://stylelint.io/user-guide/rules/time-min-milliseconds}
         */
        'time-min-milliseconds': 150,

        /**
         * Require or disallow the Unicode Byte Order Mark.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/unicode-bom}
         */
        'unicode-bom': null,

        /**
         * Specify a blacklist of disallowed units.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/unit-blacklist}
         */
        'unit-blacklist': null,

        /**
         * Specify lowercase or uppercase for units.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/unit-case}
         */
        'unit-case': 'lower',

        /**
         * Disallow unknown unit case
         * 
         * @see {@link https://stylelint.io/user-guide/rules/unit-no-unknown}
         */
        'unit-no-unknown': true,

        /**
         * Specify a whitelist of allowed units.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/unit-whitelist}
         */
        'unit-whitelist': null,

        /** 
         * Specify lowercase or uppercase for keywords values.
         *
         * @see {@link https://stylelint.io/user-guide/rules/value-keyword-case}
         */
        'value-keyword-case': null,

        /**
         * Require a newline or disallow whitespace after the commas of
         * value lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-list-comma-newline-after}
         */
        'value-list-comma-newline-after': null,

        /**
         * Require a newline or disallow whitespace before the commas of
         * value lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-list-comma-newline-before}
         */
        'value-list-comma-newline-before': null,

        /**
         * Require a single space or disallow whitespace after the commas of value lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-list-comma-space-after}
         */
        'value-list-comma-space-after': 'always-single-line',

        /**
         * Require a single space or disallow whitespace before the commas of
         * value lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-list-comma-space-before}
         */
        'value-list-comma-space-before': null,

        /**
         * Limit the number of adjacent empty lines within value lists.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-list-max-empty-lines}
         */
        'value-list-max-empty-lines': null,

        /**
         * Disallow vendor prefixes for values.
         * 
         * @see {@link https://stylelint.io/user-guide/rules/value-no-vendor-prefix}
         */
        'value-no-vendor-prefix': true,
    }
}