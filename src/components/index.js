/**
 * @file Register each file components file for convenience. All components
 * registered as PascalCase this will be based on the file name even you
 * are using spinal this will be converted into CamelCase or PascalCase
 */

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
    /**
     * Look for files in the current directory
     */
    '@/components/',
    /**
     * Look in subdirectories
     */
    true,
    /**
     * Only include "v-" prefixed files and any on these
     * file formats vue, js or jsx
     */
    /ist-[\w-]+\.(?!(vue|js|jsx))?[^.]*$/
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
    Vue.component(componentName, componentConfig.default || componentConfig);
});
