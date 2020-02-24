import { joinClass } from '@/utils/class';

/**
 * Create seperation of sections in one form
 * @displayName Fieldset
 */
export default {
    name: 'UisFieldset',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * A title for specific section of long form
         */
        legend:
        {
            type: String,
            default: null,
        },
    },

    render(h, { props, data, children })
    {
        return h(
            'fieldset',

            {
                class: joinClass(
                    'uis-fieldset'
                ),

                staticClass: data.staticClass,
            },

            [
                props.legend && h(
                    'legend',

                    {
                        class: joinClass(
                            'uis-legend'
                        ),
                    },

                    props.legend
                ),

                children,
            ]
        );
    },
};
