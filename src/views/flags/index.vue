<template>
    <div class="uis-position-relative">
        <transition
            name="uis-fade"
            mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Flags',
};
</script>
