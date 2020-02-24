/**
 * Enable and display the close button of the modal
 * @displayName Lightbox Close
 */
export default {
    name: 'UisLightboxClose',

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
                        'uis-position-top',
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
                                    type: 'close',
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
