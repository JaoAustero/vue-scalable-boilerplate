/**
 * Display the array of content
 * @displayName Lightbox Item
 */
export default {
    name: 'UisLightboxItem',

    functional: false,

    inheritAttrs: true,

    props:
    {
        items:
        {
            type: Array,
        },

        activeItem:
        {
            type: Number,
        },
    },

    render(h)
    {
        return h(
            'ul',

            {
                class: 'uis-lightbox-items',
            },

            this.items.map((item, index) => h(
                'li',

                {
                    class:
                        [
                            this.activeItem === index && 'uis-active',
                        ],
                },

                [
                    h(
                        'img',

                        {
                            domProps:
                            {
                                src: item.src,
                                alt: item.caption,
                            },
                        }
                    ),
                ]
            ))
        );
    },
};
