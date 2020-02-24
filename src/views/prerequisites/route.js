export default [
    {
        path: '/prerequisites',
        name: 'Prerequisites',
        redirect: '/prerequisites/contracting-companies',
        component: () => import('@/views/prerequisites'),
        children:
            [
                {
                    path: 'contracting-companies',
                    name: 'Contacting Companies',
                    redirect: '/prerequisites/contracting-companies/pages/list',
                    component: () => import('@/views/prerequisites/pages/contracting-companies'),
                    children:
                        [
                            /**
                             * Display the list of contracting companies
                             */
                            {
                                path: '',
                                name: 'Contracting Companies List',
                                component: () => import('@/views/prerequisites/pages/contracting-companies/pages/list'),
                            },
                        ],
                },

                {
                    path: 'flag-types',
                    name: 'Flag Types',
                    redirect: '/prerequisites/flag-types/pages/list',
                    component: () => import('@/views/prerequisites/pages/flag-types'),
                    children:
                        [
                            /**
                             * Display the list of flag types
                             */
                            {
                                path: '',
                                name: 'Flag Types List',
                                component: () => import('@/views/prerequisites/pages/flag-types/pages/list'),
                            },
                        ],
                },

                {
                    path: 'flag-functions',
                    name: 'Flag Functions',
                    redirect: '/prerequisites/flag-functions/pages/list',
                    component: () => import('@/views/prerequisites/pages/flag-functions'),
                    children:
                        [
                            /**
                             * Display the list of flag functions
                             */
                            {
                                path: '',
                                name: 'Flag Functions List',
                                component: () => import('@/views/prerequisites/pages/flag-functions/pages/list'),
                            },
                        ],
                },

                {
                    path: 'gtv-country',
                    name: 'GTV Country',
                    redirect: '/prerequisites/gtv-country/pages/list',
                    component: () => import('@/views/prerequisites/pages/gtv-country'),
                    children:
                        [
                            /**
                             * Display the list of gtv country
                             */
                            {
                                path: '',
                                name: 'GTV Country List',
                                component: () => import('@/views/prerequisites/pages/gtv-country/pages/list'),
                            },
                        ],
                },

                {
                    path: 'insurance-statuses',
                    name: 'Insurance Statuses',
                    redirect: '/prerequisites/insurance-statuses/pages/list',
                    component: () => import('@/views/prerequisites/pages/insurance-statuses'),
                    children:
                        [
                            /**
                             * Display the list of insurance statuses
                             */
                            {
                                path: '',
                                name: 'Insurance Statuses List',
                                component: () => import('@/views/prerequisites/pages/insurance-statuses/pages/list'),
                            },
                        ],
                },

                {
                    path: 'insurance-types',
                    name: 'Insurance Types',
                    redirect: '/prerequisites/insurance-types/pages/list',
                    component: () => import('@/views/prerequisites/pages/insurance-types'),
                    children:
                        [
                            /**
                             * Display the list of insurance types
                             */
                            {
                                path: '',
                                name: 'Insurance Types List',
                                component: () => import('@/views/prerequisites/pages/insurance-types/pages/list'),
                            },
                        ],
                },

                {
                    path: 'legal-categories',
                    name: 'Legal Categories',
                    redirect: '/prerequisites/legal-categories/pages/list',
                    component: () => import('@/views/prerequisites/pages/legal-categories'),
                    children:
                        [
                            /**
                             * Display the list of legal categories
                             */
                            {
                                path: '',
                                name: 'Legal Categories List',
                                component: () => import('@/views/prerequisites/pages/legal-categories/pages/list'),
                            },
                        ],
                },

                {
                    path: 'liability-types',
                    name: 'Liability Types',
                    redirect: '/prerequisites/liability-types/pages/list',
                    component: () => import('@/views/prerequisites/pages/liability-types'),
                    children:
                        [
                            /**
                             * Display the list of liability types
                             */
                            {
                                path: '',
                                name: 'Liability Types List',
                                component: () => import('@/views/prerequisites/pages/liability-types/pages/list'),
                            },
                        ],
                },

                {
                    path: 'organisational-units',
                    name: 'Organisational Units',
                    redirect: '/prerequisites/organisational-units/pages/list',
                    component: () => import('@/views/prerequisites/pages/organisational-units'),
                    children:
                        [
                            /**
                             * Display the list of organisational units
                             */
                            {
                                path: '',
                                name: 'Organisational Units List',
                                component: () => import('@/views/prerequisites/pages/organisational-units/pages/list'),
                            },
                        ],
                },

                {
                    path: 'product-lines',
                    name: 'Product Lines',
                    redirect: '/prerequisites/product-lines/pages/list',
                    component: () => import('@/views/prerequisites/pages/product-lines'),
                    children:
                        [
                            /**
                             * Display the list of Product lines
                             */
                            {
                                path: '',
                                name: 'Product Lines List',
                                component: () => import('@/views/prerequisites/pages/product-lines/pages/list'),
                            },
                        ],
                },

                {
                    path: 'reasons-for-flags',
                    name: 'Reason for Flags',
                    redirect: '/prerequisites/reasons-for-flags/pages/list',
                    component: () => import('@/views/prerequisites/pages/reasons-for-flags'),
                    children:
                        [
                            /**
                             * Display the list of Reason for flag
                             */
                            {
                                path: '',
                                name: 'Reason for Flags List',
                                component: () => import('@/views/prerequisites/pages/reasons-for-flags/pages/list'),
                            },
                        ],
                },
            ],
    },
];
