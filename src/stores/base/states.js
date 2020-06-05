/**
 * @file A base state that serve as single source of truth
 */

export const baseStates = {
    /**
     * Containers for list of items
     * fetched from API
     *
     * @type {Array}
     */
    items: [],

    /**
     * A single object data used for
     * Displaying single item
     *
     * @type {Object}
     */
    selected: {},

    /**
     * Loading identifiers
     */
    loading:
    {
        /**
         * Loading identifier for
         * list of items
         *
         * @type {Boolean}
         */
        index: false,

        /**
         * Loading identifier for
         * viewing single item
         *
         * @type {Boolean}
         */
        show: false,

        /**
         * Loading identifier for
         * create data
         *
         * @type {Boolean}
         */
        create: false,

        /**
         * Loading identifier for
         * posting a data
         *
         * @type {Boolean}
         */
        store: false,

        /**
         * Loading identifier for
         * fetching single data
         *
         * @type {Boolean}
         */
        edit: false,

        /**
         * Loading identifier for
         * updating data
         *
         * @type {Boolean}
         */
        update: false,

        /**
         * Loading identifier for
         * destroying data
         *
         * @type {Boolean}
         */
        destroy: false,
    },

    /**
     * Pagination
     */
    page:
    {
        /**
         * Total length of items
         *
         * @type {Number}
         */
        total: 0,

        /**
         * Beggining of pagination
         *
         * @type {Number}
         */
        to: 1,

        /**
         * Ending of pagination
         *
         * @type {Number}
         */
        from: 15,

        /**
         * Current selected page
         *
         * @type {Number}
         */
        current: 1,

        /**
         * Ending of pagination
         *
         * @type {Number}
         */
        last: 1,

        /**
         * URl of the endpoint
         *
         * @type {String}
         */
        url: '',
    },
};
