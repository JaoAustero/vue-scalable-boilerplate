export const baseGetters = {

    items: (state) => state.items,

    isLoading: (state) => (action) => state[`${action}Loading`],

    selected: (state) => Object.assign({}, state.selected),

    editForm: (state) => Object.assign({}, state.editForm),

    page(state)
    {
        return {
            total: state.total,
            from: state.from,
            to: state.to,
            currentPage: state.currentPage,
            lastPage: state.lastPage,
            url: state.url,
        };
    },
};
