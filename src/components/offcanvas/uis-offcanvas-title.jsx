/**
 * Display a title on offcanvas
 * @displayName Offcanvas Title
 */
export default {
    name: 'UisOffcanvasTitle',

    functional: true,

    inheritAttrs: false,

    render(h, { data, slots })
    {
        return h(
            'h3',

            {
                staticClass: data.staticClass,

                class: 'uis-offcanvas-title',
            },

            slots().default
        );
    },
};
