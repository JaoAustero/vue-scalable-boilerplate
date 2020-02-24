export default [
    {
        path: '/flags',
        name: 'Flags',
        redirect: '/flags/my-flags',
        component: () => import('@/views/flags'),
        children:
            [
                /**
                 * Display the flags that you are only member
                 */
                {
                    path: 'my-flags',
                    name: 'My Flags',
                    component: () => import('@/views/flags/pages/my-flags'),
                },

                /**
                 * Display all flags list
                 */
                {
                    path: 'all',
                    name: 'All Flags',
                    component: () => import('@/views/flags/pages/all'),
                },

                /**
                 * Filter the flags list with Legal information only
                 */
                {
                    path: 'legal',
                    name: 'Flags with Legal',
                    component: () => import('@/views/flags/pages/legal'),
                },

                /**
                 * Shows the list of deleted items
                 */
                {
                    path: 'deleted',
                    name: 'Deleted Flags',
                    component: () => import('@/views/flags/pages/deleted'),
                },

                /**
                 * Shows the form for creation ot edit of flag
                 */
                {
                    path: 'create',
                    name: 'Create Flag',
                    component: () => import('@/views/flags/pages/form'),
                },

                /**
                 * This will display the details of specific flag base on
                 * reference id
                 *
                 * @param {Reference ID}
                 */
                {
                    path: ':reference_id',
                    name: 'View Flag',
                    component: () => import('@/views/flags/pages/view'),
                },
            ],
    },
];
