/**
 * @file A collection of utility for data objects or array
 */

import { Lang } from './lang';

export const Data = {
    /**
     * Delete a empty property in Object.
     *
     * @param { Object } obj - a container of properties or methods
     * @param { Boolean } deep - Determine if recurssion to delete items from
     *                          nested objects
     */
    removeEmptyProperty: ({ obj = null, deep = false }) =>
    {
        if (Lang.isObjectEmpty(obj))
        {
            return;
        }

        const localObj = obj;

        if (deep)
        {
            Object.keys(obj).forEach((key) =>
            {
                if (obj[key] && typeof obj[key] === 'object')
                {
                    Data.removeEmptyProperty({ obj: obj[key], deep: true });
                }
                else if (obj[key] == null)
                {
                    delete localObj[key];
                }
            });
        }

        Object.keys(obj).forEach((key) =>
            (!obj[key] && obj[key] !== undefined) && delete localObj[key]);
        return localObj;
    },
};
