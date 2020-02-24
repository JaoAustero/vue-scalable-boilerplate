import { joinClass } from '@/utils/class';

/**
 * Display collection of data grouped into rows
 * @displayName Table
 */
export default {
    name: 'UisTable',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Display all rows in horizonta center
         */
        middle:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Adds a divider in every table data
         */
        divider:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Adds a light gray background in every odd items
         */
        striped:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Enable the style of background when mouse over
         */
        hover:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the items display compact
         */
        small:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Align the text into justify
         */
        justify:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Removes the thead when mobile view and enable the stack display
         */
        responsive:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'table',

            {
                class: joinClass(
                    'uis-table',
                    props.middle && 'uis-table-middle',
                    props.divider && 'uis-table-divider',
                    props.striped && 'uis-table-striped',
                    props.hover && 'uis-table-hover',
                    props.small && 'uis-table-small',
                    props.justify && 'uis-table-justify',
                    props.responsive && 'uis-table-responsive'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
