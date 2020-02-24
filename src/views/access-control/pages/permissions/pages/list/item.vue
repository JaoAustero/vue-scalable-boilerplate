<template>
    <tr>
        <td>
            {{ item.module }}
        </td>

        <td>
            <label class="uis-toggle">
                <input type="checkbox"
                    :checked="item.access && 'checked'">
                <span class="uis-toggle-slider"></span>
            </label>
        </td>

        <td>
            <label class="uis-toggle">
                <input type="checkbox"
                    :checked="item.load && 'checked'">
                <span class="uis-toggle-slider"></span>
            </label>
        </td>

        <td>
            <label class="uis-toggle">
                <input type="checkbox"
                    :checked="item.create && 'checked'">
                <span class="uis-toggle-slider"></span>
            </label>
        </td>

        <td>
            <label class="uis-toggle">
                <input type="checkbox"
                    :checked="item.edit && 'checked'">
                <span class="uis-toggle-slider"></span>
            </label>
        </td>

        <td>
            <label class="uis-toggle">
                <input type="checkbox"
                    :checked="item.delete && 'checked'">
                <span class="uis-toggle-slider"></span>
            </label>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'PermissionTableItem',

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },
    },
};
</script>
