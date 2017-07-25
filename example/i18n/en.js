export const messages = {
    resources: {
        posts: {
            name: 'Post |||| Posts',
            fields: {
                allow_comments: 'Allo comments?',
                average_note: 'Average note',
                body: 'Body',
                comments: 'Comments',
                commentable: 'Commentable',
                commentable_short: 'Com.',
                created_at: 'Created at',
                notifications: 'Notifications recipients',
                nb_view: 'Nb views',
                password: 'Password (if protected post)',
                pictures: 'Related Pictures',
                published_at: 'Published at',
                teaser: 'Teaser',
                tags: 'Tags',
                title: 'Title',
                views: 'Views',
                links: {
                    name: 'Link List',
                    fields: {
                        tags: 'Tag List',
                        url: 'Reference',
                        context: 'What it is',
                        metadata: {
                            name: 'Metadata List',
                            fields: {
                                name: 'Metadata Name',
                                value: 'Metadata Value',
                            },
                        },
                    },
                },
            },
        },
        comments: {
            name: 'Comment |||| Comments',
            fields: {
                body: 'Body',
                created_at: 'Created at',
                post_id: 'Posts',
                author: {
                    name: 'Author',
                },
            },
        },
    },
    post: {
        list: {
            search: 'Search',
        },
        form: {
            summary: 'Summary',
            body: 'Body',
            miscellaneous: 'Miscellaneous',
            comments: 'Comments',
            links: 'Links',
        },
        edit: {
            title: 'Post "%{title}"',
        },
        action: {
            save_and_add: 'Save and Add',
            save_and_show: 'Save and Show',
        },
    },
    comment: {
        list: {
            about: 'About',
        },
    },
};

export default messages;
