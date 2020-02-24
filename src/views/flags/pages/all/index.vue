<template>
    <div>
        <app-header>
            <h3 slot="left"
                class="uis-text-title
                    uis-margin-remove">
                All Flags
            </h3>
            
            <div slot="right">
                <uis-button
                    class="uis-margin-small-right"
                    :icon="true">
                    <uis-icon
                        :type="'filter_list'"/>
                </uis-button>

                <uis-button
                    class="uis-margin-small-right">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-small-right"
                            :type="'cloud_download'"/>
                        <span>Export</span>
                    </div>
                </uis-button>

                <uis-button
                    :color="'primary'"
                    @click="$router.push({path: 'create'})">
                    <div class="uis-flex uis-flex-middle">
                        <uis-icon
                            class="uis-margin-xsmall-right"
                            :type="'edit'"/>
                        <span>New Flag</span>
                    </div>
                </uis-button>
            </div>
        </app-header>

        <flag-table
            :items="items"/>
    </div>
</template>

<script>
// Component
import AppHeader from '@/views/layouts/header';

// Items
import FlagTable from '../../components/table';

export default {
    name: 'AllFlags',

    components:
    {
        AppHeader,
        FlagTable,
    },

    data()
    {
        return {
            items:
            [
                {
                    id: 1,
                    reference_id: 'F2013101',
                    title: 'FS EX WGR Personnel Claim',
                    status:
                    {
                        id: 3,
                        name: 'In process',
                    },
                    flag_type:
                    {
                        id: 1,
                        name: 'Third Party Claims',
                    },
                    initiating_organization:
                    {
                        id: 23,
                        name: 'SUGC',
                        accountable:
                        {
                            id: 62,
                            first_name: 'Marques',
                            last_name: 'Brownlee',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                        approver:
                        {
                            id: 24,
                            first_name: 'Joost',
                            last_name: 'Engelen',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                    },
                    financial_function:
                    {
                        id: 1,
                        name: 'S - Field Services',
                        description: 'Claims within revenue stream',
                    },
                    financial_risk_category:
                    {
                        id: 4,
                        name: 'Non-recurring items',
                        description: `Probability that economic developments might have a negative
                        impact on the profit margin of company expected... `,
                    },
                    target_date: '01 Jan 2020',
                    members:
                    {
                        accountable:
                        {
                            id: 4,
                            first_name: 'John',
                            last_name: 'Doe',
                            profile:
                            {
                                img_src: '/static/liza-soberano.jpg',
                            },
                        },

                        responsibles:
                        [
                            {
                                id: 1,
                                first_name: 'Azimuot',
                                last_name: 'Surtok',
                                profile:
                                {
                                    img_src: null,
                                },
                            },
                            {
                                id: 6,
                                first_name: 'Vurtulo',
                                last_name: 'Apipi',
                                profile:
                                {
                                    img_src: null,
                                },
                            },
                            {
                                id: 7,
                                first_name: 'Powell',
                                last_name: 'Juyto',
                                profile:
                                {
                                    img_src: null,
                                },
                            },
                        ],
                    },
                    red_flag: 0,
                },

                {
                    id: 2,
                    reference_id: 'F5236489',
                    title: 'Social Contributions (INSS payroll) and penalties for Incorporation',
                    status:
                    {
                        id: 3,
                        name: 'In process',
                    },
                    flag_type:
                    {
                        id: 1,
                        name: 'Third Party Claims',
                    },
                    initiating_organization:
                    {
                        id: 3,
                        name: 'SULAS',
                        accountable:
                        {
                            id: 62,
                            first_name: 'Marques',
                            last_name: 'Brownlee',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                        approver:
                        {
                            id: 24,
                            first_name: 'Joost',
                            last_name: 'Engelen',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                    },
                    financial_function:
                    {
                        id: 1,
                        name: 'S - Field Services',
                        description: 'Claims within revenue stream',
                    },
                    financial_risk_category:
                    {
                        id: 6,
                        name: 'Tax',
                        description: `Probability that economic developments might have a negative
                        impact on the profit margin of company expected... `,
                    },
                    target_date: '23 Feb 2020',
                    members:
                    {
                        accountable:
                        {
                            id: 4,
                            first_name: 'Zukembolo',
                            last_name: 'Ousthter',
                            profile:
                            {
                                img_src: null,
                            },
                        },

                        responsibles:
                        [
                            {
                                id: 1,
                                first_name: 'Jey',
                                last_name: 'Powrk',
                                profile:
                                {
                                    img_src: null,
                                },
                            },
                        ],
                    },
                    red_flag: 1,
                },

                {
                    id: 3,
                    reference_id: 'F9285749',
                    title: 'Tarbit Shipping warranty budget',
                    status:
                    {
                        id: 3,
                        name: 'In process',
                    },
                    flag_type:
                    {
                        id: 1,
                        name: 'Third Party Claims',
                    },
                    initiating_organization:
                    {
                        id: 3,
                        name: 'Finland project centre',
                        accountable:
                        {
                            id: 62,
                            first_name: 'Marques',
                            last_name: 'Brownlee',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                        approver:
                        {
                            id: 24,
                            first_name: 'Joost',
                            last_name: 'Engelen',
                            profile:
                            {
                                img_src: null,
                            },
                        },
                    },
                    financial_function:
                    {
                        id: 1,
                        name: 'S - Projects',
                        description: 'Claims within revenue stream',
                    },
                    financial_risk_category:
                    {
                        id: 6,
                        name: 'Margin',
                        description: `Probability that economic developments might have a negative
                        impact on the profit margin of company expected... `,
                    },
                    target_date: '23 Feb 2020',
                    members:
                    {
                        accountable:
                        {
                            id: 4,
                            first_name: 'Buchow',
                            last_name: 'Salomu',
                            profile:
                            {
                                img_src: null,
                            },
                        },

                        responsibles: [],
                    },
                    red_flag: 0,
                },
            ],
        };
    },
};
</script>
