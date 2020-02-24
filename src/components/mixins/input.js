import { joinClass } from '../../utils/class';

export default {
    props:
    {
        /**
         * Minimize the style of input
         */
        blank:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Display a message and turn the form into danger color
         */
        error:
        {
            type: String,
            default: null,
        },

        /**
         * Information about the input
         */
        label:
        {
            type: String,
            default: null,
        },

        /**
         * Add small margin on vertical
         */
        margin:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Dimension of the input
         *
         * @values small, large
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Makes the border green to show to the user the data
         * is correct
         */
        success:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify the value of the input
         */
        value:
        {
            type: String,
            defualt: null,
        },

        /**
         * Specify the fix width size
         *
         * @values xsmall, small, medium, large
         */
        fixedWidth:
        {
            type: String,
            default: null,
        },

        /**
         * Specify the width based on width component
         *
         * @values 1-*, 2-*, 3-^, 4-^, 5-^
         */
        width:
        {
            type: String,
            default: null,
        },
    },

    computed:
    {
        wrapperClasses()
        {
            return joinClass(
                this.margin && 'uis-margin'
            );
        },

        classes()
        {
            return joinClass(
                'uis-input',
                this.blank
                    ? 'uis-form-blank'
                    : '',
                this.success && 'uis-form-success',
                this.size && `uis-form-${this.size}`,
                this.fixedWidth
                    ? `uis-form-width-${this.fixedWidth}`
                    : this.width && `uis-width-${this.width}`,
                this.error && 'uis-form-danger'
            );
        },

        labelClasses()
        {
            return joinClass(
                'uis-form-label',
                this.error && 'uis-text-danger',
                this.success && 'uis-text-success'
            );
        },
    },
};
