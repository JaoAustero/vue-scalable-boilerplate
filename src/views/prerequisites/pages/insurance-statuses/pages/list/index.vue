<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Insurance Status
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
                    @click="$router.push({path: 'insurance-status/create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'create'"/>
                        <span>New Insurance Status</span>
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
    name: 'InsuranceStatusesList',
    
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
                    name: 'Insurance claim made',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 2,
                    name: 'Pending insurance decision',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 3,
                    name: 'No Insurance coverage',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 4,
                    name: 'Insurance claim accepted',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 5,
                    name: 'Insurance claim rejected',
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
