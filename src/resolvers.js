const resolvers = {
    Query: {
        // returns an array of tracks
        tracksForHome: (parent, args, context, info) => {
            return context.dataSources.trackAPI.getTracksForHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrackById(id);
        }
    },
    Track: {
        author: ({ authorId }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getTrackModulesById(id);
        },
    }
}

module.exports = resolvers;