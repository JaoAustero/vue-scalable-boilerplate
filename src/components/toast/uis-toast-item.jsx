import { joinClass } from '@/utils/class';

/**
 * Items for toast
 * @displayName Toast Item
 */
export default {
    name: 'UisToastItem',

    functional: false,

    inheritAttrs: false,

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },

        index:
        {
            type: Number,
        },
    },

    created()
    {
        setTimeout(() =>
        {
            this.$emit('removeToast');
        }, 2000);
    },

    render(h)
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-animate',
                    'uis-animate-slide-in-down',
                    'uis-toast-message',
                    'uis-flex',
                    'uis-flex-middle',
                    this.item.color
                        ? `uis-toast-message-${this.item.color}`
                        : 'uis-toast-message-default'
                ),
            },

            [
                Boolean(this.item.icon) && h(
                    'uis-icon',

                    {
                        staticClass: 'uis-margin-xsmall-right',

                        props:
                        {
                            type: this.item.icon,
                        },
                    }
                ),

                h(
                    'span',

                    this.item.message
                ),
            ]
        );
    },
};
