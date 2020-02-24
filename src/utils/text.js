/**
 * @param String 2 params
 * @return String two first letters of params
 */
export const initials = function (firstWord = '', secondWord = '')
{
    return `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
};
