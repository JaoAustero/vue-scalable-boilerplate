import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';


const requireComponent = require.context(
    /**
     * Look for files in the current directory
     */
    '@/directives/',
    /**
     * Look in subdirectories
     */
    true,
    /**
     * Look for both "js" and "vue" prexied files
     */
    /\.(?!(vue|js|jsx))?[^.]*$/
);

requireComponent.keys().forEach((fileName) =>
{
    /**
     * Get the component config
     */
    const componentConfig = requireComponent(fileName);

    /**
     * Get the PascalCase version of the component name
     */
    const componentName = upperFirst(
        camelCase(
            fileName
                /**
                 * get files on the folder
                 */
                .split('/')[2]
                /**
                 * Remove the "./_" from the beginning
                 */
                .replace(/^\.\/_/, '')
                /**
                 * Remove the file extension from the end
                 */
                .replace(/\.\w+$/, '')
        )
    );

    /**
     * Globally register the component
     */
    Vue.directive(componentName, componentConfig.default || componentConfig);
});
