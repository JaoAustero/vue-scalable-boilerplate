/**
 * Determine to the layout of the form
 * @displayName Form
 */

export default {
    name: 'UisForm',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Define if stacked or horizontal form
         *
         * @values stacked
         */
        type:
        {
            type: String,
            default: 'stacked',
        },
    },

    render(h, { props, children })
    {
        return h(
            'form',

            {
                class: props.type && `uis-form-${props.type}`,
            },

            children
        );
    },
};
