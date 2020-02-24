<template>
    <uis-modal
        :isOpen.sync="deleteModalToggle"
        :isCenter="true">
        <uis-modal-body>
            <uis-modal-title>
                {{ getDeleteModalContent.title }}
            </uis-modal-title>

            <p class="uis-margin-top">
                {{ getDeleteModalContent.description }}
            </p>
        </uis-modal-body>

        <uis-modal-footer
            class="uis-text-right">
            <uis-button
                class="uis-margin-small-right"
                @click="onCancel">
                Cancel
            </uis-button>

            <uis-button
                :color="'primary'"
                @click="onDelete">
                Delete
            </uis-button>
        </uis-modal-footer>
    </uis-modal>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'DeleteModal',

    data()
    {
        return {
            deleteModalToggle: false,
        };
    },

    watch:
    {
        /**
         * We create a watch for global state of `isDeleteModalOpen` to watch
         * the value if changes, then we manually update the local data of
         * `delete.vue`.
         *
         * Note: You can't pass directly the state because it is getters not
         * `data`, the modal component has automatically update the data we
         * passed that's why it has `.sync`
         */
        isDeleteModalOpen()
        {
            if (this.isDeleteModalOpen)
            {
                this.deleteModalToggle = true;
            }
        },

        /**
         * When the data has been false we call the global method of delete
         * modal to update it.
         */
        deleteModalToggle()
        {
            if (!this.deleteModalToggle)
            {
                this.hideDeleteModal();
            }
        },
    },

    computed:
    {
        ...mapGetters({
            getDeleteModalContent: 'global/getDeleteModalContent',
            isDeleteModalOpen: 'global/isDeleteModalOpen',
        }),
    },

    methods:
    {
        ...mapActions({
            hideDeleteModal: 'global/hideDeleteModal',
            onDeleteDeleteModal: 'global/onDeleteDeleteModal',
        }),

        onCancel()
        {
            // Close the modal
            this.deleteModalToggle = false;
        },

        onDelete()
        {
            // Close the modal
            this.deleteModalToggle = false;

            this.onDeleteDeleteModal();
        },
    },
};
</script>
