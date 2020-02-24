import { joinClass } from '@/utils/class';

/**
 * A dropdown for options
 * @displayName Autocomplete Dropdown
 */
export default {
    name: 'UisAutocompleteDropdown',

    functional: false,

    inheritAttrs: false,

    props:
    {
        /**
         * Toggles the dropdown
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },

        /**
         * List of array
         */
        items:
        {
            type: Array,
            default: null,
        },

        /**
         * Callback when select
         */
        onSelect:
        {
            type: Function,
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-autocomplete',
                    this.isOpen && 'uis-open'
                ),
            },

            [
                this.items.length !== 0
                    ? h(
                        'ul',

                        {
                            class: 'uis-list uis-autocomplete-list',
                        },

                        [
                            this.items.map((item) => h(
                                'li',

                                {
                                    on:
                                    {
                                        click: () =>
                                        {
                                            this.onSelect(item);
                                            this.$emit('update:isOpen', false);
                                        },
                                    },
                                },

                                [
                                    h(
                                        'p',

                                        {
                                            class: 'uis-text-emhpasis uis-margin-remove',
                                        },

                                        item.title
                                    ),

                                    h(
                                        'p',

                                        {
                                            class: 'uis-text-meta uis-margin-remove',
                                        },

                                        item.label
                                    ),
                                ]
                            )),
                        ]
                    )

                    : h(
                        'div',

                        {
                            class: 'uis-padding',
                        },

                        [
                            h(
                                'p',

                                {
                                    class: 'uis-text-lead uis-margin-remove',
                                },

                                'No Results 😥'
                            ),

                            h(
                                'p',

                                {
                                    class: 'uis-text-meta uis-margin-remove',
                                },

                                'Your search return no resuls'
                            ),
                        ]
                    ),
            ]
        );
    },
};
