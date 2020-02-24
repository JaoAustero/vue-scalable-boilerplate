import { joinClass } from '../../utils/class';

/**
 * Enable and display the modal close
 * @displayName Modal Close
 */
export default {
    name: 'UisModalClose',

    functional: false,

    inheritAttrs: true,

    props:
    {
        click:
        {
            type: Function,
            default: null,
        },
    },

    render(h)
    {
        return h(
            'a',

            {
                class: joinClass(
                    'uis-close',
                    'uis-modal-close'
                ),

                on:
                {
                    click: (e) =>
                    {
                        this.$emit('click', e);
                    },
                },
            },

            [
                h(
                    'uis-icon',

                    {
                        props:
                        {
                            type: 'close',
                        },
                    }
                ),
            ]
        );
    },
};
