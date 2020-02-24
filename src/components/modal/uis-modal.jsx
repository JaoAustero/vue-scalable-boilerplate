import { joinClass } from '../../utils/class';

/**
 * Pop-up dialogs, that overlay on the page
 * @displayName Modal
 */
export default {
    name: 'UisModal',

    functional: false,

    inheritAttrs: true,

    props:
    {
        /**
         * Enable the background event close when user clicks
         */
        backDropClose:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Enable and displayt the close button
         */
        closeButton:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Enable or disable the close event when the `esc` key pressed
         */
        escapeClose:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Toggles the modal
         */
        isOpen:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Vertical align the modal
         */
        isCenter:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify the size of the modal
         * @values container, full, small
         */
        size:
        {
            type: String,
            default: null,
        },
    },

    mounted()
    {
        if (this.isOpen)
        {
            if (this.escapeClose)
            {
                window.addEventListener('keyup', this.escapeEvent);
            }

            if (this.backDropClose)
            {
                this.$refs.modal.addEventListener('click', this.backDropEvent);
            }

            this.toggleScrollbar(true);
            this.toggleModal(true);
        }
    },

    data()
    {
        return {
            openClass: '',
            displayClass: '',
            positionClass: '',
        };
    },

    methods:
    {
        backDropEvent(event)
        {
            if (this.$refs.modal === event.target)
            {
                this.close();
            }
        },

        escapeEvent(event)
        {
            if (event.keyCode === 27)
            {
                this.close();
            }
        },

        close()
        {
            /**
             * This will modify the prop value when click outside to close the
             * modal
             */
            this.$emit('update:isOpen', false);
        },

        toggleScrollbar(bool)
        {
            const el = document.body;

            if (bool)
            {
                el.classList.add('uis-modal-page');
            }

            else
            {
                el.classList.remove('uis-modal-page');
            }
        },

        toggleModal(bool)
        {
            if (bool)
            {
                this.displayClass = this.isCenter ? 'uis-flex' : 'uis-display-block';
                this.positionClass = this.isCenter ? 'uis-flex-top' : '';

                setTimeout(() =>
                {
                    this.openClass = 'uis-open';
                }, 100);
            }

            else
            {
                this.openClass = '';

                setTimeout(() =>
                {
                    this.displayClass = '';
                }, 300);
            }
        },
    },

    watch:
    {
        isOpen()
        {
            if (this.isOpen)
            {
                if (this.escapeClose)
                {
                    window.addEventListener('keyup', this.escapeEvent);
                }

                if (this.backDropClose)
                {
                    this.$refs.modal.addEventListener('click', this.backDropEvent);
                }

                this.toggleScrollbar(true);
                this.toggleModal(true);
            }

            else
            {
                if (this.escapeClose)
                {
                    window.removeEventListener('keyup', this.escapeEvent);
                }

                if (this.backDropClose)
                {
                    this.$refs.modal.removeEventListener('click', this.backDropEvent);
                }

                this.toggleScrollbar(false);
                this.toggleModal(false);
            }
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-modal',
                    this.size && `uis-modal-${this.size}`,
                    this.positionClass,
                    this.openClass,
                    this.displayClass
                ),

                ref: 'modal',
            },

            [
                h(
                    'div',

                    {
                        class: joinClass(
                            'uis-modal-dialog',
                            this.isCenter && 'uis-margin-auto-vertical'
                        ),
                    },

                    [
                        /**
                         * @slot Pass the content here, it can be component
                         * or plain HTML tag
                         */
                        this.$slots.default,

                        this.closeButton && h(
                            'uis-modal-close',

                            {
                                on:
                                {
                                    click: () =>
                                    {
                                        this.close();
                                    },
                                },
                            }
                        ),
                    ]
                ),
            ]
        );
    },
};
