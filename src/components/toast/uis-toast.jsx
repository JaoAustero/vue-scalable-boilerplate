import { joinClass } from '@/utils/class';

/**
 * Pop-up notification to alert users
 * @displayName Toast
 */
export default {
    name: 'UisToast',

    functional: false,

    inheritAttrs: false,

    props:
    {
        /**
         * Duration of each toast
         */
        duration:
        {
            type: Number,
            default: 3000,
        },

        /**
         * Message of the toast in Array format
         * @values {color: 'primary', icon: 'edit', message: 'hello world'}
         */
        messages:
        {
            type: Array,
        },

        /**
         * Position of the toast
         *
         * @values 'top-left', 'top-center', 'top-right', 'bottom-left',
         * 'bottom-center', 'bottom-right'
         */
        position:
        {
            type: String,
            default: 'top-center',
        },

        /**
         * Callback when the toast is closed
         */
        onClose:
        {
            type: Function,
        },
    },

    data()
    {
        return {
            isActive: false,
            toastContainer: null,
        };
    },

    methods:
    {
        closeItem: function (msg)
        {
            const index = this.messages.indexOf(this.messages.filter((m) => m === msg)[0]);
            this.messages.splice(index, 1);
        },

        deleteToast: function ()
        {
            this.messages.splice(0, 1);
        },

        getMessageId()
        {
            return Math.random().toString(36).slice(4);
        },
    },

    render(h)
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-toast',
                    `uis-toast-${this.position}`
                ),
            },

            [
                this.messages.map((item, index) =>
                    h(
                        'uis-toast-item',

                        {
                            key: this.getMessageId(item),

                            props:
                            {
                                item: item,
                                index: index,
                            },

                            on:
                            {
                                close: (id) =>
                                {
                                    this.closeItem(id);
                                },

                                removeToast: () =>
                                {
                                    this.deleteToast();
                                },
                            },
                        }
                    )),
            ]
        );
    },
};
