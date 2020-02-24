import { joinClass } from '@/utils/class';

/**
 * A section of card for main content
 * @displayName Card Body
 */
export default {
    name: 'UisCardBody',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-card-body'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
