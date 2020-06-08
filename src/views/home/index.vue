<template>
    <div>
        Home
    </div>
</template>

<script>
// Meta
import { meta } from '@/meta';

export default {
    name: 'Home',

    mixins:
    [
        meta,
    ],

    data()
    {
        return {
            metaTitle: 'Home',
        };
    },
};
</script>
