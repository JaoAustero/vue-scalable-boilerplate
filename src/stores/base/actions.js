import { http } from '@/services/http';

export const baseActions = {

    load: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'index', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'index', boolean: false });

        if (response.status === 200) commit('setLoad', response.data);

        return response;
    },

    show: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'show', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'show', boolean: false });

        if (response.status === 200) commit('setSelected', response.data);

        return response;
    },

    edit: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'edit', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'edit', boolean: false });

        if (response.status === 200) commit('setEditForm', response.data);

        return response;
    },

    store: async ({ commit }, { url, form }) =>
    {
        commit('setLoading', { action: 'store', boolean: true });

        const response = await http.post(url, form);

        commit('setLoading', { action: 'store', boolean: false });

        if (response.status === 200 || response.status === 201) commit('prepend', response.data);

        return response;
    },

    update: async ({ commit }, { url, form }) =>
    {
        commit('setLoading', { action: 'update', boolean: true });

        const response = await http.put(url, form);

        commit('setLoading', { action: 'update', boolean: false });

        if (response.status === 200)
        {
            commit('update', response.data);
            commit('setSelected', {});
        }

        return response;
    },

    destroy: async ({ commit }, { url, item }) =>
    {
        commit('setLoading', { action: 'delete', boolean: true });

        const response = await http.delete(url);

        commit('setLoading', { action: 'delete', boolean: false });

        if (response.status === 200) commit('remove', item);

        return response;
    },

    select: ({ commit }, item) =>
    {
        commit('setSelected', item);
    },

    unsetItems: ({ commit }) =>
    {
        commit('setLoad', { data: [] });
    },

    unsetSelected: ({ commit }) =>
    {
        commit('setSelected', {});
    },
};
