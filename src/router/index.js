/**
 * @file A main file for the vue router
 */
import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

Vue.use(Router);

// Meta config
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});

export const router = new Router({
    /**
     * Collection of routes in the whole application
     */
    routes,

    /**
     * We get rid of the Hash(#) to make it more readable
     */
    mode: 'history',

    /**
     * Make the transition active when we try to navigate into new route.
     */
    transitionOnLoad: true,

    /**
     * Set the default root when the application was initialized.
     */
    root: '/',

    /**
     * We added a @this scrollBehavior for native scroll behavior to a new
     * route and using back/forward buttons.
     *
     * @param {*} savedPosition - Current position
     */
    scrollBehavior(savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
});
