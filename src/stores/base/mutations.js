export const baseMutations = {

    append: (state, item) =>
    {
        state.items.push(item);
    },

    prepend: (state, item) =>
    {
        state.items.unshift(item);
    },

    update: (state, item) =>
    {
        Object.assign(state.selected, item);
    },

    remove: (state, item) =>
    {
        state.items.splice(state.items.indexOf(item), -1);
    },

    setLoad: (state, items) =>
    {
        state.total = items.total;
        state.from = items.from;
        state.to = items.to;
        state.currentPage = items.current_page;
        state.lastPage = items.last_page;

        state.items = items.data;
    },

    setEditForm: (state, item) =>
    {
        state.editForm = item;
    },

    setSelected: (state, item) =>
    {
        state.selected = item;
    },

    setLoading: (state, { action, boolean }) =>
    {
        state[`${action}Loading`] = boolean;
    },
};
