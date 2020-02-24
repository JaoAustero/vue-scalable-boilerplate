<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                Users
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
                    @click="$router.push({path: 'users/create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'person_add'"/>
                        <span>New User</span>
                    </div>
                </uis-button>
            </div>
        </app-header>

        <uis-table
            :divider="true">
            <thead>
                <th>User Details</th>
                <th>Role</th>
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
    name: 'UsersList',

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
                    first_name: 'Diego',
                    last_name: 'Collicchia',
                    username: 'DC001',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 2,
                    first_name: 'Jennifer',
                    last_name: 'Gartuzo',
                    username: 'JG032',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 3,
                    first_name: 'Jerald',
                    last_name: 'Austero',
                    username: 'JA001',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 4,
                    first_name: 'Esmee',
                    last_name: 'Moloy',
                    username: 'MC239',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 5,
                    first_name: 'Chenai',
                    last_name: 'Doherty',
                    username: 'CD871',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 6,
                    first_name: 'Lara',
                    last_name: 'Bowden',
                    username: 'LB236',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 7,
                    first_name: 'Glyn',
                    last_name: 'Butler',
                    username: 'GB092',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 8,
                    first_name: 'Vivaan',
                    last_name: 'Sims',
                    username: 'VS982',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 9,
                    first_name: 'Gregor',
                    last_name: 'Garner',
                    username: 'GG001',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 10,
                    first_name: 'Halima',
                    last_name: 'Muir',
                    username: 'HM028',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 11,
                    first_name: 'Evie-Grace',
                    last_name: 'Moran',
                    username: 'EM088',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 12,
                    first_name: 'Azaan',
                    last_name: 'Nash',
                    username: 'AN081',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },

                {
                    id: 13,
                    first_name: 'Gleen',
                    last_name: 'Gunn',
                    username: 'GG002',
                    role:
                    {
                        id: 1,
                        name: 'Normal User',
                    },
                    status:
                    {
                        id: 1,
                        name: 'Enabled',
                    },
                    profile:
                    {
                        img_src: null,
                    },
                },
            ],
        };
    },
};
</script>
