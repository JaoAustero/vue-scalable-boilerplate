/**
 * An Interactive toggleable dropdown menu
 * @displayName Dropdown
 */
export default {
    name: 'UisDropdown',

    functional: false,

    inheritAttrs: true,

    props:
    {
        /**
         * Toggles the dropdown menu
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify which side the dropdown menu will show
         * @values left, right
         */
        position:
        {
            type: String,
            default: null,
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
                /**
                 * This will modify the prop value when click outside to close the dropdown
                 */
                this.$emit('update:isOpen', false);
            }
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class: 'uis-inline',
            },

            [
                /**
                 * @slot This is for the button that will trigger to open the dropdown
                 */
                this.$slots.default,

                h(
                    'div',
                    {
                        staticClass: this.$data.staticClass,

                        class:
                            [
                                'uis-dropdown',
                                this.position && `uis-dropdown-${this.position}`,
                                this.isOpen && 'uis-open',
                            ],
                    },

                    /**
                     * @slot This are the place for the list of the menu
                     */
                    this.$slots.menu
                ),
            ]
        );
    },
};
