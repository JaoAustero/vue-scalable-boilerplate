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
    mode: 'history',
    transitionOnLoad: true,
    root: '/',
    routes,
});
