<template>
    <uis-table class="uis-checkbox-activ">
        <thead>
            <th class="uis-td-checkbox">
                <input class="uis-checkbox"
                    type="checkbox">
            </th>
            <th>
                Flag
            </th>
            <th>
                Financial
            </th>
            <th class="uis-width-small">
                Target Date
            </th>
            <th class="uis-table-shrink">
                Members
            </th>
            <th class="uis-table-shrink"></th>
        </thead>
        <tbody>
            <item
                v-for="item in items"
                :key="item.id"
                :item="item"/>
        </tbody>
    </uis-table>
</template>

<script>
import item from './item';

export default {
    name: 'FlagsTable',

    props:
    {
        items:
        {
            type: Array,
            required: true,
        },
    },

    components:
    {
        item,
    },
};
</script>
