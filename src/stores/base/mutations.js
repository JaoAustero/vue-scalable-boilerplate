/**
 * @file A base mutations the only way to actually change the state.
 */

export const baseMutations = {

    /**
     * Insert item in the end of array
     *
     * @param {Object} item from API endpoint
     */
    append: (state, item) =>
    {
        state.items.push(item);
    },

    /**
     * Insert item in the start of array
     *
     * @param {Object} item from API endpoint
     */
    prepend: (state, item) =>
    {
        state.items.unshift(item);
    },

    /**
     * Overrides the state value of new selected
     *
     * @param {Object} Single data from API endpoint
     */
    update: (state, item) =>
    {
        Object.assign(state.selected, item);
    },

    /**
     * Instantly removes from teh array
     *
     * @param {Object} Single data that will be spliced
     */
    remove: (state, item) =>
    {
        state.items.splice(state.items.indexOf(item), -1);
    },

    /**
     * Insert data from API endpoint and overrides
     * the state of paginations
     *
     * @param {Object} Data from APi endpoint
     */
    setLoad: (state, items) =>
    {

        state.items = items.data;

        state.page.total = items.total;
        state.page.from = items.from;
        state.page.to = items.to;
        state.page.currentPage = items.current_page;
        state.page.lastPage = items.last_page;
    },

    /**
     * Overrides the selected state of new
     * single data selected
     *
     * @param {Object} Data from APi endpoint
     */
    setSelected: (state, item) =>
    {
        state.selected = item;
    },

    /**
     * Toggle the loading state
     *
     * @param {String} Base name of laoding
     * @param {Boolean} Toggle boolean
     */
    setLoading: (state, { action, boolean }) =>
    {
        state.loading[action] = boolean;
    },
};
