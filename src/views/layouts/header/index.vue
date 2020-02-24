<template>
    <header class="uis-margin-medium">
        <uis-grid>
            <uis-width
                :small="'1-2'">
                <slot name="left"></slot>
            </uis-width>

            <uis-width
                class="uis-text-right"
                :small="'1-2'">
                <slot name="right"></slot>
            </uis-width>
        </uis-grid>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>
