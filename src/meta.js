/**
 * @file A base configuration for meta tags using vue-meta
 */

export const meta = {
    metaInfo: function ()
    {
        return {
            title: 'Vue Scalable Boilerplate',
            titleTemplate: `${this.meta.title} - %s`,
            meta: [
                {
                    name: 'description',
                    content: 'A opinionated frontend scalable file architecture as boilerplate using Vue SPA, and Vue CLI. ',
                },
            ],
        };
    },
};
