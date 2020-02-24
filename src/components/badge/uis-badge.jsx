/**
 * Display a number as notifications
 * @displayName Badge
 */

export default {
    name: 'UisBadge',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * The color for the badge background
         */
        count:
        {
            type: Number,
            default: null,
            required: true,
        },
    },

    render(h, { data, props })
    {
        return h(
            'div',
            {
                staticClass: data.staticClass,

                class:
                    [
                        'uis-badge',
                    ],
            },

            props.count
        );
    },
};
