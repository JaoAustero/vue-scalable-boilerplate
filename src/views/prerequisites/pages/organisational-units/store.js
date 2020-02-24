import { baseStates, baseMutations, baseActions, baseGetters } from '@/stores/base';

/**
 * A user state that will be used for user data and actions.
 */
export const organisationalUnit = {
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

        sampleDestroy()
        {
            console.log('Sample delete action, when the api is ready please use the baseActions destroy');

            // Toast message
            const message = {
                color: 'primary',
                icon: 'delete',
                message: 'The Organization Unit was deleted',
            };

            /**
             * Toast a message after the http request delete was successful
             */
            store.dispatch('global/addToastMessage', message);
        },
    },

    getters:
    {
        ...baseGetters,
    },
};
