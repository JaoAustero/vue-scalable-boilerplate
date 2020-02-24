/**
 * Removes HTML element
 *
 * @param Element HTML
 */
export const removeElement = function (el)
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
