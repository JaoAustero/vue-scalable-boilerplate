import { joinClass } from '@/utils/class';

/**
 * A navbar dropdown menu
 * @displayName Navbar Dropdown
 */
export default {
    name: 'UisNavbarDropdown',

    props:
    {
        /**
         * Toggle the navbar dropdown
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },
    },

    created()
    {
        window.addEventListener('click', this.close);
    },

    beforeDestroy()
    {
        window.removeEventListener('click', this.close);
    },

    methods:
    {
        close(e)
        {
            if (!this.$el.contains(e.target))
            {
                this.$emit('update:isOpen', false);
            }
        },
    },

    render(h)
    {
        return h(
            'li',

            {
                class: joinClass(
                    'uis-navbar-item',
                    'uis-position-relative'
                ),
            },

            [
                /**
                 * @slot Contains any element that will trigger the toggle
                 */
                this.$slots.default,

                h(
                    'div',

                    {
                        class: joinClass(
                            'uis-navbar-dropdown',
                            'uis-navbar-dropdown-right',
                            'uis-box-shadow-small',
                            this.isOpen && 'uis-open'
                        ),
                    },

                    /**
                     * @slot Contains the nav menu
                     */
                    this.$slots.menu
                ),
            ]
        );
    },
};
