/**
 * @file A collection of javascript
 */

export const Lang = {
    /*
     * Check object if empty
     *
     * @param {Object} collection of data
     * @return {*} If true `length` else `false`
     */
    isObjectEmpty(obj)
    {
        return this.isObject(obj)
            ? Object.keys(obj).length === 0
                ? true
                : false
            : false;
    },
};
