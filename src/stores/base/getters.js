/**
 * @file A base getters that will access and get the value of states
 */

export const baseGetters = {

    /**
     * List of items
     *
     * @return Array of objects of data
     */
    items: (state) => state.items,

    /**
     * Identifiers for loading
     *
     * @param {String} State base name
     * @return Booolean of target state
     */
    isLoading: (state) => (action) => state.loading[action],

    /**
     * Single data that has been selected
     *
     * @return Object of data
     */
    selected: (state) => Object.assign({}, state.selected),

    /**
     * Get the pagination states
     *
     * @param {Object} Pagination states
     */
    page: (state) => state.page,
};
