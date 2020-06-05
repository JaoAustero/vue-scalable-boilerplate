/**
 * @file A collection of utility DOM
 */

export const HTML = {
    /**
     * Removes HTML element.
     *
     * @param {*} el - Element HTML
     */
    removeElement = function (el)
    {
        if (typeof el.remove !== 'undefined')
        {
            el.remove();
        }
        else
        {
            el.parentNode.removeChild(el);
        }
    };
}
