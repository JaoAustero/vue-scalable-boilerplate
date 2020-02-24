/**
 * Display an icon from material made by google
 * @displayName Icon
 */
export default {
    name: 'UisIcon',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add margin on the right
         * @values xsmall. small, medium, large, xlarge
         */
        marginRight:
        {
            type: String,
            default: null,
        },

        /**
         * Specify the icon
         */
        type:
        {
            type: String,
            default: null,
            required: true,
        },

        /**
         * Set a size of icon
         * @values lg, 2x, 3x, 4x, 5x
         */
        size:
        {
            type: String,
            default: null,
        },
    },

    render(h, { props, data })
    {
        return h(
            'i',

            {
                staticClass: data.staticClass,

                class:
                    [
                        'material-icons-outlined',
                        props.marginRight && `uis-margin-${props.marginRight}-right`,
                        props.size && `fa-${props.size}`,
                    ],
            },

            props.type
        );
    },
};
