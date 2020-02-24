/**
 * Display a caption for image
 * @displayName Lightbox Caption
 */
export default {
    name: 'UisLightboxCaption',

    functional: true,

    inheritAttrs: false,

    render(h, { slots })
    {
        return h(
            'div',

            {
                class:
                    [
                        'uis-lightbox-caption',
                        'uis-lightbox-toolbar',
                        'uis-position-bottom',
                    ],
            },

            slots().default
        );
    },
};
