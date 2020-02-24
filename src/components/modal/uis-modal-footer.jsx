/**
 * The footer of the modal
 * @displayName Modal Footer
 */
export default {
    namne: 'UisModalFooter',

    functional: true,

    inheritAttrs: false,

    render(h, { data, slots })
    {
        return h(
            'div',

            {
                staticClass: data.staticClass,

                class: 'uis-modal-footer',
            },

            slots().default
        );
    },
};
