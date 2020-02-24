import { joinClass } from '../../utils/class';

/**
 * Sidebar that slides in and out of the page
 * @displayName Offcanvas
 */
export default {
    props:
    {
        /**
         * Enable the click event on the background that will emit to close
         * event of the dropdown
         */
        backDropClose:
        {
            type: Boolean,
            default: true,
        },

        // determines if the close button on the top right
        // will show or not
        /**
         * Enable and display the close button icon on the top right corner
         */
        closeButton:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Enable the `esc` key event when press that will emit the close
         * event of dropdown
         */
        escapeClose:
        {
            type: Boolean,
            default: true,
        },

        /**
         * This will flip the position of the offcanvas from left to right side
         */
        isFlip:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Enable the full screen offcanvas
         */
        isFull:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Toggles the offcanvas
         */
        isOpen:
        {
            type: Boolean,
            default: false,
            required: true,
        },

        /**
         * Adds a dark background when offcanvas is open
         */
        isOverlay:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Customize the transition how the offcanvas will show
         * @values none, slide, push
         */
        transition:
        {
            type: String,
            default: 'slide',
        },
    },

    data()
    {
        return {
            openClass: '',
            displayClass: '',
        };
    },

    methods:
    {
        backDropEvent(event)
        {
            if (this.$refs.offcanvas === event.target)
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
             * This will modify the `isOpen.sync prop value to close the
             * offcanvas
             */
            this.$emit('update:isOpen', false);
        },

        toggleScrollbar(bool)
        {
            const el = document.body;

            if (bool)
            {
                el.classList.add('uis-offcanvas-page');
            }

            else
            {
                setTimeout(() =>
                {
                    el.classList.remove('uis-offcanvas-page');
                }, 300);
            }
        },

        toggleOffcanvas(bool)
        {
            if (bool)
            {
                this.displayClass = 'uis-display-block';

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

        handleContainer(bool)
        {
            const el = document.body;

            if (bool && this.transition === 'push')
            {
                if (this.isFlip)
                {
                    el.classList.add('uis-offcanvas-flip');
                }

                el.classList.add('uis-offcanvas-container');

                setTimeout(() =>
                {
                    el.classList.add('uis-offcanvas-container-animation');
                }, 100);
            }

            else if (!bool && this.transition === 'push')
            {
                el.classList.remove('uis-offcanvas-container-animation');

                setTimeout(() =>
                {
                    if (this.isFlip)
                    {
                        el.classList.remove('uis-offcanvas-flip');
                    }

                    el.classList.remove('uis-offcanvas-container');
                }, 300);
            }
        },
    },

    computed:
    {
        handleTransitionClass()
        {
            switch (this.transition)
            {
                case 'none':
                    return 'uis-offcanvas-none';

                case 'slide':
                    return 'uis-offcanvas-slide uis-offcanvas-bar-animation';

                case 'push':
                    return 'uis-offcanvas-push uis-offcanvas-bar-animation';

                default:
                    break;
            }

            return null;
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
                    this.$refs.offcanvas.addEventListener('click', this.backDropEvent);
                }

                this.toggleScrollbar(true);
                this.toggleOffcanvas(true);
                this.handleContainer(true);
            }

            else
            {
                if (this.escapeClose)
                {
                    window.removeEventListener('keyup', this.escapeEvent);
                }

                if (this.backDropClose)
                {
                    this.$refs.offcanvas.removeEventListener('click', this.backDropEvent);
                }

                this.toggleScrollbar(false);
                this.toggleOffcanvas(false);
                this.handleContainer(false);
            }
        },
    },

    render(h)
    {
        return h(
            'div',
            {
                class: joinClass(
                    'uis-offcanvas',
                    this.isOverlay && 'uis-offcanvas-overlay',
                    this.isFlip && 'uis-offcanvas-flip',
                    this.openClass,
                    this.displayClass
                ),

                ref: 'offcanvas',
            },
            [
                h(
                    'div',
                    {
                        class: joinClass(
                            'uis-offcanvas-bar',
                            this.handleTransitionClass,
                            this.isFull && 'uis-offcanvas-bar-full'
                        ),
                    },
                    [
                        /**
                         * @slot Content slot
                         */
                        this.$slots.default,

                        this.closeButton && h(
                            'button',
                            {
                                class: joinClass(
                                    'uis-offcanvas-close',
                                    'uis-close'
                                ),

                                on:
                                {
                                    click: () =>
                                    {
                                        this.close();
                                    },
                                },
                            },

                            [
                                h(
                                    'i',
                                    {
                                        class: 'li li-close li-lg',
                                    }
                                ),
                            ]
                        ),
                    ]
                ),
            ]
        );
    },
};
