// Core
import Vue from 'vue';

// Dependencies
import axios from 'axios';

// Stores
import { store } from './stores';

// Routes
import { router } from './router';

// Entry file
import App from './App.vue';

// Components
import './components';

// Directives
import './directives';

// Global properties
window.axios = axios;
window.store = store;

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
