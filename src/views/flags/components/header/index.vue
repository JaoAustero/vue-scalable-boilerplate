<template>
    <section class="uis-margin-medium">
        <uis-grid class="uis-flex-middle">
            <uis-width
                :small="'1-2'">
                <h3 class="uis-text-title
                    uis-margin-remove">
                    My Flags
                </h3>
            </uis-width>

            <uis-width
                class="uis-text-right"
                :small="'1-2'">
                <slot></slot>
            </uis-width>
        </uis-grid>
    </section>
</template>

<script>
export default {
    name: 'FlagsHeader',
};
</script>
