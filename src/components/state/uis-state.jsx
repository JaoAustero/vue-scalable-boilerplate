import { joinClass } from '@/utils/class';

/**
 * Display an illustration based on current state
 * @displayName State
 */
export default {
    name: 'UisState',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Describe the state
         */
        description:
        {
            type: String,
            default: null,
        },

        /**
         * Illustration will be based on type prop
         * @values empty, denied
         */
        type:
        {
            type: String,
            required: true,
        },

        /**
         * Title will be the main text or header text for this layout
         */
        title:
        {
            type: String,
            required: true,
        },
    },

    render(h, { props, data, children })
    {
        return h(
            'div',

            {
                class: joinClass(
                    'uis-state'
                ),

                staticClass: data.staticClass,
            },

            [
                h(
                    'div',

                    {
                        class: joinClass(
                            'uis-margin'
                        ),
                    },

                    [
                        h(
                            'img',

                            {
                                domProps:
                                {
                                    alt: `${props.type} state`,
                                    src: `/static/images/illustrations/${props.type}-state.svg`,
                                },
                            }
                        ),

                        h(
                            'h3',

                            {
                                class: joinClass(
                                    'uis-state-title'
                                ),
                            },

                            props.title
                        ),

                        Boolean(props.description) && h(
                            'p',

                            {
                                class: joinClass(
                                    'uis-state-description'
                                ),
                            },

                            props.description
                        ),
                    ]
                ),

                h(
                    'div',

                    {
                        class: joinClass(
                            'uis-margin'
                        ),
                    },

                    children
                ),
            ]
        );
    },
};
