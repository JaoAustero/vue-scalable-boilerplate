import { joinClass } from '../../utils/class';

/**
 * Creates a full responsive, fluid and nestable grid layout.
 * @displayName Grid
 */
export default {
    name: 'UisGrid',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Creates border between elements
         */
        divider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Determine the space between
         * @values small, medium, large, collapse
         */
        gutter:
        {
            type: String,
            default: null,
        },

        /**
         * Foce all child to be same height
         */
        matchHeight:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { props, data, children })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-grid',
                    props.gutter && `uis-grid-${props.gutter}`,
                    props.divider && 'uis-grid-divider',
                    props.matchHeight && 'uis-grid-match'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
