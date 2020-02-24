<template>
    <uis-container
        :size="'small'">
        
        <router-view />

        <div class="uis-auth-copyright">
            <p>© 2020 Warsila Inc, All Rights Reserved</p>
        </div>
    </uis-container>
</template>

<script>
export default {
    name: 'Signin',
};
</script>
