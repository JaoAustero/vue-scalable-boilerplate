import { joinClass } from '../../utils/class';

export default {
    props:
    {
        /**
         * The color for the background background
         * @values default, primary, secondary, success, warning, danger
         */
        color:
        {
            type: String,
            default: 'default',
        },

        /**
         * This will be disabled the button
         */
        disabled:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the dimension equal, Must contain icon only
         */
        icon:
        {
            type: Boolean,
            default: false,
        },

        /**
         * It will set 100% of the width
         */
        fullWidth:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the button dashed outline without any selector modifiers
         */
        ghost:
        {
            type: Boolean,
            default: false,
        },

        /**
         * If the button is anchor you can specify the URL
         */
        href:
        {
            type: String,
            default: null,
        },

        /**
         * You can set to the button if the form is loading
         * to avoid clickable and change into loading icon
         */
        loading:
        {
            type: Boolean,
            default: false,
        },

        /**
         * It will remove the background and change into
         * border. The color will be based on :color prop
         */
        outline:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify the specific dimension
         * @values small, large
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * If this button is text without background
         */
        text:
        {
            type: Boolean,
            default: false,
        },
    },

    computed:
    {
        classes()
        {
            return joinClass(
                'uis-button',
                this.text
                    ? `uis-button-text uis-button-text-${this.color}`
                    : this.ghost
                        ? 'uis-button-ghost'
                        : this.outline
                            ? `uis-button-outline uis-button-outline-${this.color}`
                            : this.color && `uis-button-${this.color}`,
                this.size && `uis-button-${this.size}`,
                this.icon
                    ? 'uis-button-icon'
                    : this.fullWidth && 'uis-width-1-1'
            );
        },

        isAnchor()
        {
            return this.href !== null;
        },
    },
};
