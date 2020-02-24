import InputMixins from '../mixins/input';
import { joinClass } from '../../utils/class';

/**
 * The text input and its variations
 * @displayName Input
 */

export default {
    name: 'UisInput',

    functional: false,

    inheritAttrs: false,

    mixins: [InputMixins],

    props:
    {
        /**
         * Pass a material-icon name to add icon on the beginning of input
         */
        icon:
        {
            type: String,
            default: null,
        },
    },

    render(h)
    {
        const vm = this;

        return h(
            'div',

            {
                class: this.wrapperClasses,
            },

            [
                Boolean(this.label) && h(
                    'label',

                    {
                        class: this.labelClasses,
                    },

                    [
                        this.label,

                        this.$attrs.required === 'true' && h(
                            'span',

                            {
                                class: joinClass(
                                    'uis-text-primary'
                                ),
                            },

                            '*'
                        ),
                    ]
                ),

                this.icon
                    /**
                     * Wrap the input into inline class if there is icon
                     */
                    ? h(
                        'div',

                        {
                            class: joinClass(
                                this.icon && 'uis-inline',
                                this.width && `uis-width-${this.width}`
                            ),
                        },

                        [
                            h(
                                'uis-icon',

                                {
                                    staticClass:
                                        [
                                            'uis-form-icon',
                                        ],

                                    props:
                                    {
                                        type: this.icon,
                                    },
                                }
                            ),

                            h(
                                'input',

                                {
                                    attrs: this.$attrs,

                                    class: this.classes,

                                    domProps:
                                    {
                                        value: vm.value,
                                    },

                                    on:
                                    {
                                        input(event)
                                        {
                                            vm.$emit('input', event.target.value);
                                        },

                                        keyup()
                                        {
                                            vm.$emit('keyup');
                                        },
                                    },
                                }
                            ),
                        ]
                    )
                    /**
                     * If There is no Icon, render the input only
                     */
                    : h(
                        'input',

                        {
                            attrs: this.$attrs,

                            class: this.classes,

                            domProps:
                            {
                                value: vm.value,
                            },

                            on:
                            {
                                input(event)
                                {
                                    vm.$emit('input', event.target.value);
                                },

                                keyup()
                                {
                                    vm.$emit('keyup');
                                },
                            },
                        }
                    ),

                Boolean(this.error) && h(
                    'small',

                    {
                        class: 'uis-text-danger',
                    },

                    this.error
                ),
            ]
        );
    },
};
