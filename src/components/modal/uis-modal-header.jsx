/**
 * The header of the modal
 * @displayName Modal Header
 */
export default {
    name: 'UisModalHeader',

    functional: true,

    inheritAttrs: false,

    render(h, { data, slots })
    {
        return h(
            'div',

            {
                class: 'uis-modal-header',

                staticClass: data.staticClass,
            },

            slots().default
        );
    },
};
