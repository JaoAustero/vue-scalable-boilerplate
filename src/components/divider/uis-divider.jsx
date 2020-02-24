import { joinClass } from '@/utils/class';

/**
 * Add a horizontal line or block element with title as divider of content
 * sections
 * @displayName Divider
 */
export default {
    name: 'UisDivider',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Display a block with idle background and title
         */
        title:
        {
            type: String,
            default: null,
        },

        /**
         * Make the style dashed
         */
        dashed:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the style dotted
         */
        dotted:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props })
    {
        return props.title
            ? h(
                'div',

                {
                    class:
                        [
                            'uis-divider',
                        ],

                    staticClass: data.staticClass,
                },

                props.title
            )
            : h(
                'hr',

                {
                    class: joinClass(
                        'uis-hr',
                        props.dashed
                            ? 'uis-hr-dashed'
                            : props.dotted
                                ? 'uis-hr-dotted'
                                : ''
                    ),

                    staticClass: data.staticClass,
                }
            );
    },
};
