<template>
    <div>
        <uis-dropdown
            class="uis-flags-dropdown"
            :isOpen.sync="isDropdownMenuOpen"
            :position="'right'">
            <uis-button
                :icon="true"
                @click="isDropdownMenuOpen = true">
                <uis-icon
                    :type="'more_horiz'"/>
            </uis-button>

            <uis-nav
                slot="menu">
                <uis-nav-item
                    @click="isDropdownMenuOpen = false">
                    <uis-icon
                        :type="'edit'"
                        :marginRight="'small'"/>
                    Edit
                </uis-nav-item>
                <uis-nav-item
                    @click="isDropdownMenuOpen = false">
                    <uis-icon
                        :type="'cloud_download'"
                        :marginRight="'small'"/>
                    Export
                </uis-nav-item>
                <uis-nav-item
                    @click="isDropdownMenuOpen = false">
                    <uis-icon
                        :type="'error_outline'"
                        :marginRight="'small'"/>
                    Mark as Red flag
                </uis-nav-item>
                <uis-nav-item
                    :isDivider="true"/>
                <uis-nav-item
                    @click="isDropdownMenuOpen = false">
                    <uis-icon
                        :type="'delete'"
                        :marginRight="'small'"/>
                    Delete Flag
                </uis-nav-item>
            </uis-nav>
        </uis-dropdown>

        <section class="uis-flags-header">
            <uis-label
                :color="'primary'">
                F2013101
            </uis-label>
            <h1 class="uis-text-title
                uis-margin-remove">
                Social Contributions (INSS payroll) and penalties for incorrect procedures
            </h1>
            <p class="uis-text-secondary
                uis-margin-remove">
                Third Party Claims
            </p>

            <div class="uis-margin-top">
                <p class="uis-text-meta
                    uis-margin-remove">
                    Created by <span class="uis-text-secondary">John Doe</span> on Nov 26, 2018
                </p>
                <p class="uis-text-meta
                    uis-margin-remove">
                    Last modified by <span class="uis-text-secondary">John Doe</span> on Jan 22, 2020
                </p>
            </div>
        </section>

        <section class="uis-margin-large-top">
            <ul class="uis-subnav">
                <li :class="switcherActive == 1 && 'uis-active'"
                    @click="switcherActive = 1">
                    <a>Details</a>
                </li>
                <li :class="switcherActive == 2 && 'uis-active'"
                    @click="switcherActive = 2">
                    <a>Comments</a>
                </li>
                <li :class="switcherActive == 3 && 'uis-active'"
                    @click="switcherActive = 3">
                    <a>History</a>
                </li>
            </ul>
        </section>

        <section class="uis-margin">
            <ul class="uis-switcher">
                <li :class="switcherActive == 1 && 'uis-active'">
                    <flag-details />
                </li>

                <li :class="switcherActive == 2 && 'uis-active'">
                    <flag-comments />
                </li>

                <li :class="switcherActive == 3 && 'uis-active'">
                    <flag-history />
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
// Components
import FlagDetails from './details';
import FlagComments from './comments';
import FlagHistory from './history';

export default {
    name: 'ViewFlag',

    data()
    {
        return {
            switcherActive: 1,
            isDropdownMenuOpen: false,
        };
    },

    components:
    {
        FlagDetails,
        FlagComments,
        FlagHistory,
    },
};
</script>
