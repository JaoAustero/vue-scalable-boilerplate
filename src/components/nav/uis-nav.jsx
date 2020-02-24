import { joinClass } from '../../utils/class';

/**
 * Classic button with different color, sizes and states
 * @displayName Nav
 */
export default {
    name: 'UisNav',

    functional: true,

    inheritAttrs: false,

    props:
    {

        /**
         * Set the foreground color of the text
         * @values primary, secondary, sucess. warning, danger
         */
        color:
        {
            type: String,
            default: null,
        },

        /**
         * Make the items to be align center of the wrapper
         */
        isCenter:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Apply the style of navbar dropdown
         */
        isNavDropdown:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add padding on the left
         */
        isNavSub:
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
                    'uis-nav',
                    props.isNavDropdown && 'uis-navbar-dropdown-nav',
                    props.color && `uis-nav-${props.color}`,
                    props.isNavDropdown
                        ? 'uis-dropdown-nav'
                        : 'uis-nav-default',
                    props.isCenter
                        ? 'uis-nav-center'
                        : '',
                    props.isNavSub
                        ? 'uis-nav-sub'
                        : ''
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
