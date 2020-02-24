/**
 * Display title in the modal
 * @displayName Modal Title
 */
export default {
    name: 'UisModalTitle',

    functional: true,

    inheritAttrs: false,

    render(h, { data, slots })
    {
        return h(
            'h3',

            {
                staticClass: data.staticClass,

                class: 'uis-modal-title',
            },

            slots().default
        );
    },
};
