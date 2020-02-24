export default [
    {
        path: '/account',
        name: 'Account',
        redirect: '/account/general',
        component: () => import('@/views/account'),
        children:
            [
                {
                    path: 'general',
                    name: 'General Settings',
                    component: () => import('@/views/account/pages/general'),
                },
            ],
    },
];
