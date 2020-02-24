import { baseStates, baseMutations, baseActions, baseGetters } from '@/stores/base';

/**
 * A user state that will be used for module data and actions.
 */
export const permission = {
    namespaced: true,

    state:
    {
        ...baseStates,
    },

    mutations:
    {
        ...baseMutations,
    },

    actions:
    {
        ...baseActions,
    },

    getters:
    {
        ...baseGetters,
    },
};
