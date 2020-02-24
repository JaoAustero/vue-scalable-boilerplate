<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Permissions
            </h3>

            <div slot="right">
                <select class="uis-select">
                    <option value="1" selected>Normal User</option>
                    <option value="2">Moderator</option>
                    <option value="3">System Administrator</option>
                </select>
            </div>
        </app-header>

        <uis-table
            :divider="true">
            <thead>
                <th>Module</th>
                <th>Access</th>
                <th>Load</th>
                <th>Create</th>
                <th>Update</th>
                <th>Delete</th>
                <th class="uis-table-shrink"></th>
            </thead>
            <tbody>
                <item
                    v-for="item in items"
                    :item="item"
                    :key="item.id"/>
            </tbody>
        </uis-table>
    </div>
</template>

<script>
// Layouts
import AppHeader from '@/views/layouts/header';

// Sub-components
import Item from './item';

export default {
    name: 'PermissionsList',

    components:
    {
        AppHeader,
        Item,
    },

    data()
    {
        return {
            items: [
                {
                    id: 1,
                    module: 'Flags',
                    access: 1,
                    load: 1,
                    create: 1,
                    update: 1,
                    delete: 0,
                },

                {
                    id: 2,
                    module: 'Organizations',
                    access: 1,
                    load: 1,
                    create: 0,
                    update: 0,
                    delete: 0,
                },

                {
                    id: 3,
                    module: 'Flag Type',
                    access: 0,
                    load: 0,
                    create: 0,
                    update: 0,
                    delete: 0,
                },

                {
                    id: 4,
                    module: 'Users',
                    access: 1,
                    load: 1,
                    create: 0,
                    update: 1,
                    delete: 0,
                },

                {
                    id: 5,
                    module: 'Roles',
                    access: 0,
                    load: 0,
                    create: 0,
                    update: 0,
                    delete: 0,
                },

                {
                    id: 6,
                    module: 'Exhange Rate',
                    access: 0,
                    load: 0,
                    create: 0,
                    update: 0,
                    delete: 0,
                },

                {
                    id: 7,
                    module: 'General Settings',
                    access: 1,
                    load: 1,
                    create: 1,
                    update: 1,
                    delete: 1,
                },
            ],
        };
    },
};
</script>
