export default [
    {
        path: '/access-control',
        name: 'Access Control',
        redirect: '/access-control/users',
        component: () => import('@/views/access-control'),
        children:
            [
                {
                    path: 'users',
                    name: 'Users',
                    redirect: '/access-control/users/pages/list',
                    component: () => import('@/views/access-control/pages/users'),
                    children:
                        [
                            /**
                             * Display the list of users
                             */
                            {
                                path: '',
                                name: 'Users List',
                                component: () => import('@/views/access-control/pages/users/pages/list'),
                            },

                            /**
                             * Form creation for the user
                             */
                            {
                                path: 'create',
                                name: 'Create',
                                component: () => import('@/views/access-control/pages/users/pages/form'),
                            },
                        ],
                },

                {
                    path: 'modules',
                    name: 'Modules',
                    redirect: '/access-control/modules/pages/list',
                    component: () => import('@/views/access-control/pages/modules'),
                    children:
                        [
                            /**
                             * Display the list of modules
                             */
                            {
                                path: '',
                                name: 'Modules List',
                                component: () => import('@/views/access-control/pages/modules/pages/list'),
                            },
                        ],
                },

                {
                    path: 'roles',
                    name: 'Roles',
                    redirect: '/access-control/roles/pages/list',
                    component: () => import('@/views/access-control/pages/roles'),
                    children:
                        [
                            /**
                             * Display the list of modules
                             */
                            {
                                path: '',
                                name: 'Roles List',
                                component: () => import('@/views/access-control/pages/roles/pages/list'),
                            },
                        ],
                },

                {
                    path: 'permissions',
                    name: 'Permissions',
                    redirect: '/access-control/permissions/pages/list',
                    component: () => import('@/views/access-control/pages/permissions'),
                    children:
                        [
                            /**
                             * Display the list of permissions
                             */
                            {
                                path: '',
                                name: 'Permissions List',
                                component: () => import('@/views/access-control/pages/permissions/pages/list'),
                            },
                        ],
                },
            ],
    },
];
