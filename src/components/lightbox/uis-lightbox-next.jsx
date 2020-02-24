/**
 * Enable and display the next button of the lightbox
 * @displayName Lightbox Next
 */
export default {
    name: 'UisLightboxNext',

    functional: true,

    inheritAttrs: false,

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'uis-lightbox-toolbar',
                        'uis-position-center-right',
                        'uis-text-right',
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
                                    type: 'angle-right',
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
