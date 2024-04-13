import { createSchema, createYoga } from 'graphql-yoga'
import resolvers from '../../../../graphql/resolver';

const { handleRequest } = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
            type Query {
                greetings: String
                pokemon(name: String!): Pokemon
                allPokemon: [Pokemon]
            }

            type Location {
                location: String
                appearancePercentage: String
            }

            type Pokemon {
                name: String
                sprite: String
                types: [String]
                abilities: Abilities
                stats: Stats
                locations: [Location]
            }
            type Abilities {
                primary: String
            }

            type Stats {
                HP: Int
                Atk: Int
                Def: Int
                SpA: Int
                SpD: Int
                Spe: Int
                BST: Int
            }
        `,
        resolvers: resolvers
    }),
    // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
    graphqlEndpoint: '/api/graphql',

    // Yoga needs to know how to create a valid Next response
    fetchAPI: { Response }
})
export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }