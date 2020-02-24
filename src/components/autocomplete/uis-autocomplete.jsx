import InputMixins from '@/components/mixins/input';

/**
 * A autocomlete dropdown
 * @displayName Autocomplete
 */
export default {
    name: 'UisAutocomplete',

    functional: false,

    inheritAttrs: false,

    mixins: [InputMixins],

    data()
    {
        return {
            event: null,
            timeout: 1000,
            isLoading: false,
        };
    },

    props:
    {
        /**
         * A callback when the user donetyping
         */
        doneTyping:
        {
            type: Function,
        },

        /**
         * To open the dropdown menu
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },

        /**
         * A collection of items in array, that serves as suggestion
         *
         * @values [{id: 1, label: 'String'}]
         */
        items:
        {
            type: Array,
            default: null,
        },

        /**
         * A callback function when user select on the option
         */
        onSelect:
        {
            type: Function,
        },
    },

    mounted()
    {
        window.addEventListener('keyup', this.escapeEvent);
    },

    methods:
    {
        isTyping()
        {
            console.log('user is typing...');

            clearTimeout(this.event);

            this.event = setTimeout(() =>
            {
                this.doneTyping();
            }, this.timeout);
        },

        clickOutside(event)
        {
            if (!this.$el.contains(event.target))
            {
                this.close();
            }
        },

        close()
        {
            this.$emit('update:isOpen', false);
        },

        escapeEvent(event)
        {
            if (event.keyCode === 27)
            {
                this.close();
                this.$refs.autocomplete.$el.blur();
            }
        },
    },

    render(h)
    {
        const vm = this;

        return h(
            'div',

            {
                class: this.wrapperClasses,

                staticClass: 'uis-position-relative',

                ref: 'autocompleteWrapper',
            },

            [
                Boolean(this.label) && h(
                    'label',

                    {
                        class: this.labelClasses,
                    },

                    this.label
                ),

                h(
                    'input',

                    {
                        class: this.classes,

                        attrs: this.$attrs,

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

                            keypress()
                            {
                                vm.isTyping();
                            },
                        },

                        ref: 'autocomplete',
                    }
                ),

                Boolean(this.error) && h(
                    'small',

                    {
                        class: 'uis-text-danger',
                    },

                    this.error
                ),

                h(
                    'uis-autocomplete-dropdown',

                    {
                        props:
                        {
                            isOpen: this.isOpen,

                            items: this.items,

                            onSelect: this.onSelect,
                        },

                        on:
                        {
                            'update:isOpen': ($event) =>
                            {
                                this.$emit('update:isOpen', $event);
                            },
                        },
                    }
                ),
            ]
        );
    },
};
