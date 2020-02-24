/**
 * Expandable panels for long contents
 * @displayName Accordion
 */
export default {
    name: 'UisAccordion',

    functional: false,

    inheritAttrs: true,

    data()
    {
        return {
            isActive: false,
        };
    },

    render(h)
    {
        return h(
            'div',

            {
                class:
                    [
                        'uis-accordion',
                        'uis-point',
                    ],

                staticClass: this.staticClass,
            },

            [
                h(
                    'div',

                    {
                        class:
                            [
                                'uis-accordion-header',
                            ],

                        on:
                        {
                            click: () =>
                            {
                                if (this.isActive)
                                {
                                    this.isActive = false;
                                }
                                else
                                {
                                    this.isActive = true;
                                }
                            },
                        },
                    },

                    this.$slots.default
                ),

                h(
                    'div',

                    {
                        class:
                            [
                                'uis-accordion-content',
                                this.isActive
                                    ? 'uis-open'
                                    : '',
                            ],
                    },

                    this.$slots.content
                ),
            ]
        );
    },
};
