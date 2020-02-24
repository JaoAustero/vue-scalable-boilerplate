<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Reasons For Flags
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
                    @click="$router.push({path: 'legal-categories/create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'create'"/>
                        <span>New Reason for Flag</span>
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
    name: 'ReasonsForFlagsList',
    
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
                    name: 'Compliance Matter',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 2,
                    name: 'Claim based on Breach of Contract',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 3,
                    name: 'Health, Safety and Environment (HSE)',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 4,
                    name: 'Human ResHuman Resources Matter',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 5,
                    name: 'Product Liability Claim',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 6,
                    name: 'Quality Matter',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 7,
                    name: 'Claim by Insurance Company',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 8,
                    name: 'Taxation',
                    description: '',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 9,
                    name: 'Claim based on tort',
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
