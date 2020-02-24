import { joinClass } from '@/utils/class';

/**
 * A section of card for title
 * @displayName Card Header
 */
export default {
    name: 'UisCardHeader',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-card-header'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
