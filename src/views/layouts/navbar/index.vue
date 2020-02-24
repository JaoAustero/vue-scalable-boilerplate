<template>
    <nav
        class="uis-navbar
            uis-navbar-sticky
            uis-navbar-container
            uis-padding
            uis-padding-remove-vertical">
        <div class="uis-navbar-left">
            <uis-breadcrumb
                :items="breadcrumbItems"/>
        </div>
        <div class="uis-navbar-right">
            <ul class="uis-navbar-nav">
                <li @click="isDropdownMenuOpen = true">
                    <a>
                        <uis-navbar-dropdown
                            :isOpen.sync="isDropdownMenuOpen">
                            <uis-avatar
                                :label="'JA'"
                                :color="'secondary'"/>

                            <uis-nav
                                :isNavDropdown="true"
                                slot="menu">
                                <router-link
                                    tag="uis-nav-item"
                                    @click="isDropdownMenuOpen = false"
                                    :to="{path: '/account/general'}">
                                    <uis-icon
                                        :type="'account_circle'"
                                        :marginRight="'small'"/>
                                    Account
                                </router-link>
                                <router-link
                                    tag="uis-nav-item"
                                    @click="isDropdownMenuOpen = false"
                                    :to="{path: '/account/general'}">
                                    <uis-icon
                                        :type="'info'"
                                        :marginRight="'small'"/>
                                    Instructions
                                </router-link>
                                <router-link
                                    tag="uis-nav-item"
                                    @click="isDropdownMenuOpen = false"
                                    :to="{path: '/account/general'}">
                                    <uis-icon
                                        :type="'policy'"
                                        :marginRight="'small'"/>
                                    Privacy Notice
                                </router-link>

                                <uis-nav-item
                                    :isDivider="true"/>

                                <router-link
                                    tag="uis-nav-item"
                                    @click="isDropdownMenuOpen = false"
                                    :to="{path: '/account/general'}">
                                    <uis-icon
                                        :type="'meeting_room'"
                                        :marginRight="'small'"/>
                                    Log out
                                </router-link>
                            </uis-nav>
                        </uis-navbar-dropdown>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
    
    data()
    {
        return {
            isDropdownMenuOpen: false,
            isDropdownNotificationOpen: false,
            breadcrumbItems: [],
        };
    },

    watch:
    {
        $route()
        {
            this.breadcrumbGenerator();
        },
    },

    created()
    {
        this.breadcrumbGenerator();
    },

    methods:
    {
        breadcrumbGenerator()
        {
            this.breadcrumbItems = [];

            const currentPath = this.$route.path;
            const matched = this.$route.matched;

            for (let index = 0; index < matched.length; index++)
            {
                const breadcrumbItem = {
                    label: matched[index].name,
                    href: matched[index].path,
                };

                this.breadcrumbItems.push(breadcrumbItem);

                if (currentPath === matched[index].path)
                {
                    break;
                }
            }
        },
    },
};
</script>
