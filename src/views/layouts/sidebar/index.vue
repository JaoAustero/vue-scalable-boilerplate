<template>
    <div class="uis-sidebar">
        <div class="uis-text-center">
            <img
                height="auto"
                width="150px"
                src="/static/images/logo/WS-v.png"
                alt="Wartsila Logo">
        </div>

        <div
            class="uis-margin-medium-top">
            <uis-nav
                :color="'primary'">
                <uis-nav-item
                    :isHeader="true">
                    Flags
                </uis-nav-item>

                <router-link
                    tag="uis-nav-item"
                    title="My Flags"
                    :to="{path: '/flags/my-flags'}">
                    <uis-icon
                        :type="'inbox'"
                        :marginRight="'small'"/>
                    My Flags
                </router-link>

                <router-link
                    tag="uis-nav-item"
                    title="All Flags"
                    :to="{path: '/flags/all'}">
                    <uis-icon
                        :type="'all_inbox'"
                        :marginRight="'small'"/>
                    All Flags
                </router-link>

                <router-link
                    tag="uis-nav-item"
                    title="Flags with Legal"
                    :to="{path: '/flags/legal'}">
                    <uis-icon
                        :type="'gavel'"
                        :marginRight="'small'"/>
                    Flags with Legal
                </router-link>


                <router-link
                    tag="uis-nav-item"
                    title="Deleted Flags"
                    :to="{path: '/flags/deleted'}">
                    <uis-icon
                        :type="'delete'"
                        :marginRight="'small'"/>
                    Deleted Flags
                </router-link>
            </uis-nav>

            <uis-nav
                :color="'primary'"
                class="uis-margin-top">
                <uis-nav-item
                    :isHeader="true">
                    Access Control
                </uis-nav-item>
                <router-link
                    tag="uis-nav-item"
                    title="Users"
                    :to="{path: '/access-control/users'}">
                    <uis-icon
                        :type="'person'"
                        :marginRight="'small'"/>
                    Users
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Modules"
                    :to="{path: '/access-control/modules'}">
                    <uis-icon
                        :type="'widgets'"
                        :marginRight="'small'"/>
                    Modules
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Roles"
                    :to="{path: '/access-control/roles'}">
                    <uis-icon
                        :type="'stars'"
                        :marginRight="'small'"/>
                    Roles
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Permissions"
                    :to="{path: '/access-control/permissions'}">
                    <uis-icon
                        :type="'lock'"
                        :marginRight="'small'"/>
                    Permissions
                </router-link>

            </uis-nav>
            

            <uis-nav
                :color="'primary'"
                class="uis-margin-top">
                <uis-nav-item
                    :isHeader="true">
                    Prerequisites
                </uis-nav-item>
                <router-link
                    tag="uis-nav-item"
                    title="Contracting Companies"
                    :to="{path: '/prerequisites/contracting-companies'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Contracting Companies
                </router-link>
                
                <router-link
                    tag="uis-nav-item"
                    title="Flag Types"
                    :to="{path: '/prerequisites/flag-types'}">
                    <uis-icon
                        :type="'flag'"
                        :marginRight="'small'"/>
                    Flag Types
                </router-link>
                <!--<uis-nav-item
                    title="Flag Related Categories">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Flag Related Categories
                </uis-nav-item>-->
                <router-link
                    tag="uis-nav-item"
                    title="Flag Functions"
                    :to="{path: '/prerequisites/flag-functions'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Flag Functions
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Gross Transaction Value Country"
                    :to="{path: '/prerequisites/gtv-country'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    GTV Country
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Insurance Statuses"
                    :to="{path: '/prerequisites/insurance-statuses'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Insurance Statuses
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Insurance Type"
                    :to="{path: '/prerequisites/insurance-types'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Insurance Types
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Legal Categories"
                    :to="{path: '/prerequisites/legal-categories'}">
                    <uis-icon
                        :type="'gavel'"
                        :marginRight="'small'"/>
                    Legal Categories
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Liability Type"
                    :to="{path: '/prerequisites/liability-types'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Liability Type
                </router-link>
                <uis-nav-item
                    title="Organizations">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Organizations
                </uis-nav-item>
                <router-link
                    tag="uis-nav-item"
                    title="Organization Units"
                    :to="{path: '/prerequisites/organisational-units'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Organization Units
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Product Line"
                    :to="{path: '/prerequisites/product-lines'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Product Lines
                </router-link>
                <router-link
                    tag="uis-nav-item"
                    title="Reasons for Flag"
                    :to="{path: '/prerequisites/reasons-for-flags'}">
                    <uis-icon
                        :type="'group_work'"
                        :marginRight="'small'"/>
                    Reasons for Flag
                </router-link>
            </uis-nav>

            <uis-nav
                :color="'primary'"
                class="uis-margin-top">
                <uis-nav-item
                    :isHeader="true">
                    System Settings
                </uis-nav-item>
                <uis-nav-item
                    title="Exchange Rate">
                    <uis-icon
                        :type="'attach_money'"
                        :marginRight="'small'"/>
                    Exchange Rate
                </uis-nav-item>
                <uis-nav-item
                    title="General Settings">
                    <uis-icon
                        :type="'build'"
                        :marginRight="'small'"/>
                    General Settings
                </uis-nav-item>
            </uis-nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSidebar',
};
</script>
