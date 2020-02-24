import Vue from 'vue';
import Router from 'vue-router';
// import { Cookie } from '@/utils/cookie';

import routes from './routes';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    transitionOnLoad: true,
    linkActiveClass: 'uis-active',
    linkExactActiveClass: 'uis-active',
    root: '/',
    routes,
});

// router.beforeEach((to, from, next) =>
// {
//     const notAuthRequired = [
//         'signin',
//         'forgot-password',
//         'activation',
//         'reset-password',
//         'validate-code',
//     ];

//     const authRequired = !notAuthRequired.includes(to.meta.page);

//     const hasAccessToken = Cookie.get(process.env.ACCESS_TOKEN) !== null;

//     if (authRequired && !hasAccessToken) return next('/signin');

//     if (!authRequired && hasAccessToken) return next('/');

//     if (to.path === '/') return next('/instructions');

//     return next();
// });
