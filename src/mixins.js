import { Data } from '@/utils';

/**
 * @function baseFormMethods
 *
 * A mixin for common forms that will handle a error messages and basic
 * submit or store request.
 */
export const baseFormMethods = {
    data()
    {
        return {
            /**
             * Error container
             */
            error: {},

            /**
             * Base endpoint
             */
            endpoint: '/module-name',
        };
    },

    methods:
    {
        /**
         * This will return if this property has an error that included on
         * @this error local data
         *
         * @param { name } name - property name
         * @return Boolean
         */
        hasError(name = null)
        {
            if (!name)
            {
                return Object.keys(this.error).length > 0;
            }

            return Object.prototype.hasOwnProperty.call(this.error, name);
        },

        /**
         * A store HTTP request on server side
         *
         * @param {*} event - get the event on trigger
         */
        async submit(event)
        {
            // Preventing to refresh the page
            event.preventDefault();

            /**
             * Remove empty properties inside of the object
             * even if nested object
             *
             * @param { Object } obj - Form object
             * @param { Boolean } deep - Identifier if check the nested object
             */
            Data.removeEmptyProperty({
                obj: this.form,
                deep: true,
            });

            // Clear the error message
            this.error = {};

            // HTTP request
            const response = await this.store({
                url: this.endpoint,
                form: this.form,
            });

            if (response.status === 200)
            {
                // Code here
            }
            else
            {
                // Code here
            }
        },
    },
};
