<template>
    <tr>
        <td>
            <div class="uis-flex
                    uis-flex-middle">
                <uis-avatar
                    class="uis-margin-small-right"
                    :label="userInitials(item.first_name, item.last_name)"/>

                <div>
                    <p class="uis-text-emphasis
                            uis-margin-remove">
                        {{ `${item.first_name} ${item.last_name}` }}
                    </p>
                    <p class="uis-text-meta
                            uis-margin-remove">
                        {{ item.username }}
                    </p>
                </div>
            </div>
        </td>

        <td>
            {{ item.role.name }}
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
    name: 'UserTableItem',

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
                title: 'Delete user?',
                description: `Are you sure do you want to delete ${this.item.first_name} ${this.item.last_name}? Once you delete their flag will be lost if they are the creator, accountable or member, and there's no trash of users.`,
                module: 'user/sampleDestroy',
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
