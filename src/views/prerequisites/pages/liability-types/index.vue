<template>
    <div>
        <transition
            name="uis-fade"
            mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'LiabilityTypes',
};
</script>
