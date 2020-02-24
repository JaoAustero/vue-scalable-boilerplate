/**
 * Enable and display the previous button of the lightbox
 * @displayName Lightbox Prev
 */
export default {
    name: 'UisLightboxPrev',

    functional: false,

    inheritAttrs: true,

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'uis-lightbox-toolbar',
                        'uis-position-center-left',
                        'uis-lightbox-left',
                    ],
            },

            [
                h(
                    'uis-button',

                    {
                        props:
                        {
                            color: null,
                            text: true,
                        },

                        class: 'uis-lightbox-toolbar-icon',

                        on:
                        {
                            click: (e) =>
                            {
                                this.$emit('click', e);
                            },
                        },
                    },

                    [
                        h(
                            'uis-icon',
                            {
                                props:
                                {
                                    type: 'angle-left',
                                    size: 'lg',
                                },
                            }
                        ),
                    ]
                ),
            ]
        );
    },
};
