<template>
    <tr
        class="uis-point"
        :class="activeClass && 'uis-active'"
        @click="setActiveClass"
        @dblclick="$router.push({path: `/flags/${item.reference_id}`})"
        @mouseover="showCheckbox"
        @mouseleave="unShowCheckbox">
        <td class="uis-td-checkbox"
            :class="checkBoxActive && 'uis-active'">
            <input class="uis-checkbox"
                type="checkbox">
        </td>
        <td>
            <p class="uis-text-semibold
                uis-margin-xsmall-bottom">
                <uis-icon
                    v-if="item.red_flag"
                    class="uis-text-danger uis-md-18"
                    :type="'flag'"/>
                {{ item.title }}
            </p>
            <div class="uis-flex uis-flex-middle">
                <div>
                    <uis-label
                        :color="'secondary'">
                        #{{ item.reference_id }}
                    </uis-label>
                </div>
                <span class="uis-margin-small-left
                    uis-margin-small-right">
                    |
                </span>
                <p class="uis-text-secondary
                    uis-margin-remove">
                    {{ item.initiating_organization.name }}
                </p>
            </div>
        </td>
        <td>
            <p class="uis-text-secondary
                uis-margin-remove">
                {{ item.financial_function.name }}
            </p>
            <p class="uis-margin-remove">
                <span>Risk at</span>
                <span class="uis-text-secondary">
                    {{ item.financial_risk_category.name }}
                </span>
            </p>
        </td>

        <td>
            {{ item.target_date }}
        </td>

        <td>
            <div class="uis-flex uis-flex-middle">
                <uis-avatar
                    :label="userInitials(item.members.accountable.first_name, item.members.accountable.last_name)"
                    :size="'small'"/>
                    
                <!-- Show this divider when there is responsible only -->
                <span
                    v-if="item.members.responsibles.length > 0"
                    class="uis-text-muted
                        uis-margin-xsmall-left
                        uis-margin-xsmall-right">
                    |
                </span>
                
                <uis-avatar
                    v-for="selected in selectedResponsibles"
                    :key="selected.id"
                    class="uis-margin-xsmall-right"
                    :label="userInitials(selected.first_name, selected.last_name)"
                    :src="selected.profile.img_src"
                    :size="'small'"/>

                <!-- Render `+<length>` more when more than 2 -->
                <uis-avatar
                        v-if="item.members.responsibles.length > 2"
                        class="uis-margin-xsmall-right"
                        :label="`+${item.members.responsibles.length - 2}`"
                        :size="'small'"/>
            </div>
        </td>

        <td>
            <uis-dropdown
                :isOpen.sync="isDropdownOpen"
                :position="'right'">
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
                    <uis-nav-item>
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'cloud_download'"/>
                        Export
                    </uis-nav-item>
                    <uis-nav-item
                        @click="generateLink(`flags/${item.reference_id}`)">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'link'"/>
                        Copy link
                    </uis-nav-item>
                    <uis-nav-item
                        @click="onRedFlagItem">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="item.red_flag
                                ? 'emoji_flags'
                                : 'flag'"/>
                        <span
                            v-if="item.red_flag">
                            Remove Red flag
                        </span>
                        <span
                            v-else>
                            Marked as Red flag
                        </span>
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
import { copyLink } from '@/utils/clipboard';

export default {
    name: 'FlagTableItem',

    props:
    {
        item:
        {
            type: Object,
        },
    },

    data()
    {
        return {
            activeClass: false,
            checkBoxActive: false,
            isDropdownOpen: false,
        };
    },

    created()
    {
        window.addEventListener('click', this.unsetActiveClass);
    },

    beforeDestroy()
    {
        window.removeEventListener('click', this.unsetActiveClass);
    },

    computed:
    {
        /**
         * This will return up to 2 index only
         *
         * @return Array of responsibles
         */
        selectedResponsibles()
        {
            return this.item.members.responsibles.slice(0, 2);
        },
    },
    
    methods:
    {
        ...mapActions({
            addToastMessage: 'global/addToastMessage',
            showDeleteModal: 'global/showDeleteModal',
            updateDeleteModalContent: 'global/updateDeleteModalContent',
        }),

        generateLink(url)
        {
            // Default message for copying clipboard
            const message = {
                color: 'primary',
                icon: 'link',
                message: 'Copied to Clipboard',
            };

            // Add message on the global state
            this.addToastMessage(message);
            
            // Close the dropdown
            this.isDropdownOpen = false;

            // Call utils `copylink` that execute the command of
            // save to clipboard
            return copyLink(url);
        },

        onDeleteItem()
        {
            // Set the message content
            const content = {
                title: 'Delete flag?',
                description: `Are you sure do you want to delete ${this.item.reference_id} flag? You can still restore this flag on trash page.`,
                module: 'flags/sampleDestroy',
            };

            // Close the dropdown
            this.isDropdownOpen = false;

            // Update the global delete modal content state
            this.updateDeleteModalContent(content);

            // Show the global delete modal
            this.showDeleteModal();
        },

        onRedFlagItem()
        {
            // Close the dropdown
            this.isDropdownOpen = false;

            // Default message for copying clipboard
            const message = {
                color: 'primary',
                icon: 'flag',
                message: 'Marked as Red flag',
            };

            // Add message on the global state
            this.addToastMessage(message);
        },

        setActiveClass()
        {
            this.activeClass = true;
        },

        unsetActiveClass(e)
        {
            if (!this.$el.contains(e.target))
            {
                this.activeClass = false;
            }
        },

        userInitials(first_name, last_name)
        {
            return initials(first_name, last_name);
        },

        showCheckbox()
        {
            this.checkBoxActive = true;
        },

        unShowCheckbox()
        {
            this.checkBoxActive = false;
        },
    },
};
</script>
