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
// Utilities
import { initials } from '@/utils/text';

export default {
    name: 'LegalCategoryTableItem',

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

        userInitials(first_name, last_name)
        {
            return initials(first_name, last_name);
        },

        onDeleteItem()
        {
            // Set the message content
            const content = {
                title: 'Delete legal category?',
                description: `Are you sure do you want to delete ${this.item.name} legal category? Once you delete it, all flags that has relationship will be also deleted.`,
                module: 'legalCategory/sampleDestroy',
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
