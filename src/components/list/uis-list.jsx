import { joinClass } from '@/utils/class';

/**
 * Display a collection of items into list style
 * @displayName List
 */
export default {
    name: 'UisList',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a bullet or middle dot before of the list
         */
        bullet:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add divider of each list
         */
        divider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify specific spacing of each element
         * @values medium, large, xlarge
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Add a light gray background every Odd of items
         */
        striped:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'ul',

            {
                class: joinClass(
                    'uis-list',
                    props.bullet && 'uis-list-bullet',
                    props.divider && 'uis-list-divider',
                    props.size && `uis-list-${props.size}`,
                    props.striped && 'uis-list-striped'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
