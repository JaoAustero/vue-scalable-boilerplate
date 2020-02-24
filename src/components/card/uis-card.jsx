import { joinClass } from '@/utils/class';

/**
 * Container with gutter and other differnt style
 * @displayName Card
 */
export default {
    name: 'UisCard',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a background color
         *
         * @values default, primary, secondary
         */
        color:
        {
            type: String,
            default: 'default',
        },

        /**
         * Adding box-shadow when mouse over on the card
         */
        hover:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Change the card size by adjusting the gutters
         *
         * @values small, large
         */
        size:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { children, data, props })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-card',
                    props.color && `uis-card-${props.color}`,
                    props.hover && 'uis-card-hover',
                    props.size && `uis-card-${props.size}`
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
