/**
 * @file A collection of utility for text
 */

export const Text = {
    /**
     * Get the first character of parameters
     *
     * @param String 2 params
     * @return String two first letters of params
     */
    initials = function (firstWord = '', secondWord = '')
    {
        return `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
    },
};
