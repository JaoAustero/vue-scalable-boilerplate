/**
 * @file A main file for the vue router
 */
import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    transitionOnLoad: true,
    root: '/',
    routes,
});