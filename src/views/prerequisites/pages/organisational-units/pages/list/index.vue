<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Organisational Units
            </h3>

            <div slot="right">
                <uis-button
                    class="uis-margin-small-right"
                    :icon="true">
                    <uis-icon
                        :type="'filter_list'"/>
                </uis-button>

                <uis-button
                    :color="'primary'"
                    @click="$router.push({path: 'organisational-units/create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'create'"/>
                        <span>New Organization Unit</span>
                    </div>
                </uis-button>
            </div>
        </app-header>

        <uis-table
            :divider="true">
            <thead>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
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
    name: 'OrganisationalUnitsList',
    
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
                    name: 'S-AMER',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 2,
                    name: 'S-NE',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 3,
                    name: 'S-SEAF',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 4,
                    name: 'S-MEA',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 5,
                    name: 'Delivery Management',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 5,
                    name: 'Solution Management',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },
            ],
        };
    },
};
</script>
