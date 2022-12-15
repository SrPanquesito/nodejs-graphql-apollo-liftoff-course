const resolvers = {
    Query: {
        // returns an array of tracks
        tracksForHome: (parent, args, context, info) => {
            return context.dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({ authorId }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
}

module.exports = resolvers;