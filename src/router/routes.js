/**
 * @file A auto-register of page routes, This will compile all `routes.js` and
 * output a single file of routes.
 */

const routesData = [];

(function updateModules()
{
    const requireModule = require.context(
        /**
         * Search for files in the current directory.
         */
        '@/views/',

        /**
         * Search for files in subdirectories.
         */
        true,
        
        /**
         * Include any .js files that are not this file or a unit test.
         */
        /route.js/
    );

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
