/**
 * @file Register each file as corresponding Vuex module. It will
 * search in the whole application with file name `store.js`.
 */

const modulesCache = {};
const storeData = { modules: {} };
const fs = require('.');

(function updateModules()
{
    /**
     * Allow us to dynamically require all Vuex module files.
     *
     * @see {@link https://webpack.js.org/guides/dependency-management/#require-context}
     */
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
         * Search `store.js` in all directories inside of this app.
         */
        /store.js/
    );

    /**
     * For every Vuex module.
     */
    requireModule.keys().forEach((fileName) =>
    {
        const moduleDefinition = requireModule(fileName);

        /**
         * Skip the module during hot reload if it refers to the same module
         * definition as the one we have cached.
         */
        if (modulesCache[fileName] === moduleDefinition) return;

        /**
         * Update the module cache, for efficient hot reloading.
         */
        modulesCache[fileName] = moduleDefinition;

        /**
         * Add the module to our modules object.
         */
        storeData.modules = Object.assign({ ...moduleDefinition }, storeData.modules);
    });

    /**
     * If the environment supports hot reloading
     */
    if (module.hot)
    {
        // Whenever any Vuex module is updated...
        module.hot.accept(requireModule.id, () =>
        {
            /**
             * Update `storeData.modules` with the latest definitions.
             */
            updateModules();

            /**
             * Trigger a hot update in the store.
             */
            fs.default.hotUpdate({ modules: storeData.modules });
        });
    }
}());

export default storeData.modules;
