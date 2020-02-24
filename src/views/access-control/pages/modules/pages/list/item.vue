<template>
    <tr>
        <td>
            {{ item.name }}
        </td>

        <td>
            {{ item.description }}
        </td>

        <td>
            {{ item.status.name }}
        </td>

        <td>
            <uis-dropdown
                :position="'right'"
                :isOpen.sync="isDropdownOpen">
                <uis-button
                    :icon="true"
                    @click="isDropdownOpen = true">
                    <uis-icon
                        :type="'more_horiz'"/>
                </uis-button>

                <uis-nav
                    slot="menu">
                    <uis-nav-item>
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'edit'"/>
                        Edit
                    </uis-nav-item>
                    <uis-nav-item
                        :isDivider="true"/>
                    <uis-nav-item
                        @click="onDeleteItem">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'delete'"/>
                        Delete
                    </uis-nav-item>
                </uis-nav>
            </uis-dropdown>
        </td>
    </tr>
</template>

<script>
// Vuex
import { mapActions } from 'vuex';

export default {
    name: 'ModuleTableItem',

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },
    },

    data()
    {
        return {
            isDropdownOpen: false,
        };
    },

    methods:
    {
        ...mapActions({
            showDeleteModal: 'global/showDeleteModal',
            updateDeleteModalContent: 'global/updateDeleteModalContent',
        }),

        onDeleteItem()
        {
            // Set the message content
            const content = {
                title: 'Delete module?',
                description: `Are you sure do you want to delete ${this.item.name} module?`,
                module: 'module/sampleDestroy',
            };

            // Close dropdown
            this.isDropdownOpen = false;

            // Update the global delete modal content state
            this.updateDeleteModalContent(content);

            // Show the global delete modal
            this.showDeleteModal();
        },
    },
};
</script>
