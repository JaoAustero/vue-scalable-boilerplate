// Core
import Vue from 'vue';
import VueMeta from 'vue-meta';

// Dependencies
import axios from 'axios';

// Stores
import { store } from './stores';

// Routes
import { router } from './router';

// Entry file
import App from './App.vue';

// UIS Components
import './components';

// Global properties
window.axios = axios;
window.store = store;

// Meta config
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});