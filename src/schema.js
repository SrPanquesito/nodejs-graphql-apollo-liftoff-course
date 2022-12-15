const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    "Get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
}


"A track is a group of modules to teach a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
}

"A module is a single unit of teaching. Multiple modules compose a Track"
type Module {
    id: ID!
    title: String!
    length: Int
}

"Author of a complete track"
type Author {
    id: ID!
    name: String!
    photo: String
}
`;

module.exports  = typeDefs;