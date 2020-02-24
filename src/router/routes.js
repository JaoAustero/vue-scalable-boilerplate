import { store } from '@/stores';

const routesData = [];

(function updateModules()
{
    const requireModule = require.context(
        // Search for files in the current directory.
        '@/views/',
        // Search for files in subdirectories.
        true,
        // Include any .js files that are not this file or a unit test.
        // /^((?!index|\.unit\.).)*\.js$/
        /route.js/
    );

    const root = {
        path: '/',
        name: 'Root',
        component: () => import('@/views/auth'),
        beforeEnter: (to, from, next) =>
        {
            const isActive = store.getters['auth/isActive'];

            if (isActive) next();
        },
    };

    routesData.push(root);

    // For every Vuex module...
    requireModule.keys().forEach((fileName) =>
    {
        const moduleDefinition = requireModule(fileName);

        moduleDefinition.default.forEach((route) =>
        {
            routesData.push(route);
        });
    });

    routesData.push({ path: '*', redirect: '/404-page-not-found' });
}());

export default routesData;
