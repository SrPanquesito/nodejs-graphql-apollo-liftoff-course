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
    Mutation: {
        // increments a track numberOfViews property
        incrementTrackViews: async (parent, args, context, info) => {
            try {
                const track = await context.dataSources.trackAPI.incrementTrackViews(args.id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${args.id}`,
                    track
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
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