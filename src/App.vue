<template>
    <div id="app">
        <uis-toast
                :messages="getToastMessages"/>

        <div
            v-if="!isAuthenticated">
            <Auth />
        </div>

        <div v-else>
            <app-navbar />
            <app-sidebar />
            
            <main class="uis-main-wrapper">
                <transition
                    name="uis-fade"
                    mode="out-in">
                    <router-view />
                </transition>
            </main>
        </div>

        <delete-modal />
    </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

// Auth
import Auth from '@/views/auth';

// Layouts
import AppNavbar from '@/views/layouts/navbar';
import AppSidebar from '@/views/layouts/sidebar';

// Global Modal
import DeleteModal from '@/views/layouts/modal/delete';

export default {
    name: 'app',

    data()
    {
        return {
            isAuthenticated: true,
        };
    },

    components:
    {
        Auth,
        AppNavbar,
        AppSidebar,
        DeleteModal,
    },

    computed:
    {
        ...mapGetters({
            getToastMessages: 'global/getToastMessages',
        }),
    },
};
</script>

<style lang="scss">
    @import './scss/app.scss';
    @import url('https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp');
</style>
