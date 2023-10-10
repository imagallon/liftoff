const gql = require("graphql-tag");

const typeDefs = gql`
"A Track is a group of Modules that the teaches about a specific topic"
type Track {
  
  id: ID!
  "the track's title"
  title: String!
  "the track's main author"
  author: Author!
  "the tracks main illustration to display in track card or track page detail"
  thumbnail: String
  "the track's approximate length to complete, in minutes"
  length: Int
  "the number of modules this track contains"
  modulesCount: Int

}






`;

module.exports = typeDefs;