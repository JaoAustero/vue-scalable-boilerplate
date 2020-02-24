/**
 * A global state that will be used for global data and actions.
 */
export const global = {
    namespaced: true,

    state:
    {
        /**
         * Contains Array of objects for pop-up toast
         */
        toastMessages: [],

        /**
         * State of toggle delete modal
         */
        deleteModalOpen: false,

        /**
         * A state for global delete modal for dynamically changes the content
         * and to reuse across of the application.
         *
         * @property {string} deleteModalContent.title - The title of the modal
         * @property {string} deleleModalContent.description - Message or describe the action
         * @property {string} deleteModalContent.module - A store module that will dispatch when the delete button is clicked
         */
        deleteModalContent:
        {
            title: '',
            description: '',
            module: '',
        },
    },

    mutations:
    {
        /**
         * Change the `toastMessage` state data
         *
         * @param {object} message
         */
        setToastMessage(state, message)
        {
            state.toastMessages.push(message);
        },

        /**
         * Set the value of deleteModalOpen state to true
         */
        setDeleteModalOpen(state)
        {
            state.deleteModalOpen = true;
        },

        /**
         * Close Modal
         */
        setDeleteModalClose(state)
        {
            state.deleteModalOpen = false;
        },

        /**
         * This will set the state into new value, follow the format of the state
         * the format example described on the state.
         *
         * @param {object} state
         * @param {object} content
         */
        setDeleteModalContent(state, content)
        {
            state.deleteModalContent = content;
        },

        /**
         * Unset the current value into empty, this will replace the value
         * into defaul content or original value.
         *
         * @param {object} state
         */
        setDeleteModalContentEmpty(state)
        {
            const defaultContent = {
                title: '',
                description: '',
                module: '',
            };

            state.deleteModalContent = defaultContent;
        },
    },

    actions:
    {
        /**
         * Push an object into `toastMessage` state
         *
         * @param {object} message
         * @example {color: 'primary', icon: 'link', message: 'A simple message'}
         * @module src/components/toast/uis-toast.jsx
         */
        addToastMessage({ commit }, message)
        {
            commit('setToastMessage', message);
        },

        /**
         * Call back for cancel button of delete modal
         *
         * @param {function} callback
         */
        onCancelDeleteModal()
        {
            console.log('Cancel Button on Delete Modal has been clicked');
        },

        /**
         * Open/Show the Global Delete Modal
         */
        showDeleteModal({ commit })
        {
            commit('setDeleteModalOpen');
        },

        /**
         * Hide the modal and set the state of modal content into default value
         */
        hideDeleteModal({ commit })
        {
            commit('setDeleteModalClose');
            commit('setDeleteModalContentEmpty');
        },

        /**
         * Call back for delete button of delete modal
         *
         * @param {function} callback
         */
        onDeleteDeleteModal(context)
        {
            store.dispatch(context.state.deleteModalContent.module);
        },

        /**
         * Update delete modal content
         *
         * @param {object}
         */
        updateDeleteModalContent({ commit }, content)
        {
            commit('setDeleteModalContent', content);
        },
    },

    getters:
    {
        /**
         * Get Toast messages array
         *
         * @return {array} A content for displaying description and icon for toast
         */
        getToastMessages: (state) => state.toastMessages,

        /**
         * Get delete modal content
         *
         * @return {object} A content for display title, desccription in the modal
         */
        getDeleteModalContent: (state) => state.deleteModalContent,

        /**
         * Get the global delete modal state
         *
         * @returns {boolean} true||false
         */
        isDeleteModalOpen: (state) => state.deleteModalOpen,
    },
};
