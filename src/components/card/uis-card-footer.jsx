import { joinClass } from '@/utils/class';

/**
 * A section of card for action buttons
 * @displayName Card Footer
 */
export default {
    name: 'UisCardFooter',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-card-footer'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
