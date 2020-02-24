export default [
    {
        path: '/auth',
        name: 'Auth',
        redirect: '/auth/signin',
        component: () => import('@/views/auth'),
        children:
            [
                {
                    path: 'signin',
                    name: 'Signin',
                    component: () => import('@/views/auth/pages/signin'),
                },
            ],
    },
];
