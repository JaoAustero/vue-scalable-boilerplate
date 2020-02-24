// Utils
import { joinClass } from '../../utils/class';
import MouseMixins from '../mixins/mouse';


/**
 * Classic button with different color, sizes and states
 * @displayName Nav Item
 */
export default {
    name: 'UisNavItem',

    mixins: [MouseMixins],

    props:
    {
        /**
         * Align item to be center in horizontal using flex class
         */
        alignMiddle:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Enable the active style of the list
         */
        isActive:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add divider on the list
         */
        isDivider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Set the current item to be Header and apply header style
         */
        isHeader:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Determine the current item that it has children list
         */
        isParent:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h)
    {
        return h(
            'li',

            {
                staticClass: this.staticClass,

                class: joinClass(
                    this.isDivider && !this.isHeader
                        ? 'uis-nav-divider'
                        : this.isHeader && !this.isDivider
                            ? 'uis-nav-header'
                            : this.isParent
                                ? 'uis-nav-parent'
                                : this.isActive && !this.isHeader && !this.isDivider
                                    ? 'uis-active'
                                    : ''
                ),
            },

            [
                this.isDivider
                    ? ''
                    : this.isHeader
                        ? this.$slots.default
                        : this.isParent
                            ? this.$slots.default
                            : h(
                                'a',

                                {
                                    on:
                                    {
                                        click: this.onClick,
                                    },

                                    class: joinClass(
                                        'uis-link',
                                        this.alignMiddle && 'uis-text-middle'
                                    ),
                                },

                                this.$slots.default
                            ),
            ]
        );
    },
};
