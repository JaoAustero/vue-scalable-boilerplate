/**
 * Display the body of the modal
 * @displayName Modal Body
 */
export default {
    name: 'UisModalBody',

    functional: true,

    inheritAttrs: false,

    render(h, { data, slots })
    {
        return h(
            'div',

            {
                staticClass: data.staticClass,

                class: 'uis-modal-body',
            },

            slots().default
        );
    },
};
