<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Contracting Companies
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
                    @click="$router.push({path: 'flag-types/create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'flag'"/>
                        <span>New Flag Type</span>
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
    name: 'FlagTypesList',
    
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
                    name: 'Third Party Claims',
                    description: 'Refers to claim made by a defendant during the course.',
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                },

                {
                    id: 2,
                    name: 'First Party Claims',
                    description: 'When the policy holder makes a claim against their own insurance policy.',
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
