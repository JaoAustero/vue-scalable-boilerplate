/**
 * @file A collection of utility for class names
 */

export const Class = {
    /**
     * Join the bulk classes
     *
     * @param {*} args - spread all classes
     * @return One string classnames
     */
    joinClass = function (...args)
    {
        let classnames = '';

        for (let i = 0; i < args.length; i++)
        {
            if (args[i])
            {
                classnames += (`${args[i]} `);
            }
        }

        return classnames;
    },
};
