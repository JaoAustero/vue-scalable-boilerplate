/**
 * @file A base actions similar to mutations
 */

import { http } from '@/services/http';

export const baseActions = {

    /**
     * A HTTP request for getting data
     * Toggle @this setLoading state
     *
     * @param {String} url - endpoint
     * @return {*} a collection of data
     */
    load: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'index', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'index', boolean: false });

        if (response.status === 200) commit('setLoad', response.data);

        return response;
    },

    /**
     * A HTTP request for getting specific data based on
     * URL parameter used for display data
     * Toggle @this setLoading state
     *
     * @param {String} url - endpoint
     * @return {*} a collection of data
     */
    show: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'show', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'show', boolean: false });

        if (response.status === 200) commit('setSelected', response.data);

        return response;
    },

    /**
     * A HTTP requeust for getting initial data when create
     * route has been called.
     * Toggle @this setLoading state
     *
     * @param {String} url - endpoint
     * @return {*} a collection of data
     */
    create: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'create', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'create', boolean: false });

        if (response.status === 200) commit('setOption', response.data);

        return response;
    },

    /**
     * A HTTP request for adding new record of data
     * Toggle @this setLoading state
     * Prepend new data at @this items state
     *
     * @param { String } url - endpoint
     * @param { Object } form - Data object
     * @return {*} Message or data
     */
    store: async ({ commit }, { url, form }) =>
    {
        commit('setLoading', { action: 'store', boolean: true });

        const response = await http.post(url, form);

        commit('setLoading', { action: 'store', boolean: false });

        if (response.status === 200 || response.status === 201) commit('prepend', response.data);

        return response;
    },

    /**
     * A HTTP request for getting specific data based on
     * URL parameter used for edit form to display the data.
     * Toggle @this setLoading state
     *
     * @param {String} url - endpoint
     * @return {*} a collection of data
     */
    edit: async ({ commit }, url) =>
    {
        commit('setLoading', { action: 'edit', boolean: true });

        const response = await http.get(url);

        commit('setLoading', { action: 'edit', boolean: false });

        if (response.status === 200) commit('setEditForm', response.data);

        return response;
    },

    /**
     * A HTTP request for updating a data
     * Toggle @this setLoading state
     *
     * @param { String } url - endpoint
     * @param {Object} form - Data object
     * @return {*} Message or data
     */
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

    /**
     * A HTTP request for deleting a item
     * Toggle @this setLoading state
     *
     * @param {String} url - endpoint
     * @param {Object} item - Object item that will be spliced
     * @return Message or data
     */
    destroy: async ({ commit }, { url, item }) =>
    {
        commit('setLoading', { action: 'delete', boolean: true });

        const response = await http.delete(url);

        commit('setLoading', { action: 'delete', boolean: false });

        if (response.status === 200) commit('remove', item);

        return response;
    },

    /**
     * Set a value at @this selected state
     */
    select: ({ commit }, item) =>
    {
        commit('setSelected', item);
    },

    /**
     * Set items only at @this items state
     */
    setItems: ({ commit }, items) =>
    {
        commit('setLoad', { data: items });
    },

    /**
     * Clear @this items state
     */
    unsetItems: ({ commit }) =>
    {
        commit('setLoad', { data: [] });
    },

    /**
     * Clear @this selected state
     */
    unsetSelected: ({ commit }) =>
    {
        commit('setSelected', {});
    },
};
