const {ApolloServer} = require('apollo-server-express')

const { ApolloServerPluginLandingPageLocalDefault  } = require('apollo-server-core')

// Definición de tipos de GraphQL
const typeDefs = `
    type Query {
        hello: String
    }
`;

// Función que resuelva lo que tengamos en hello
const resolvers = {
    Query: {
        hello: () => 'Hello world'
    }
};

// Se crea el servidor de Apollo y se le manda la aplicación anterior como argumento
// para hacer binding entre ambas
const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault
        ]
    });

    await server.start();
    server.applyMiddleware({app})
};

module.exports = useGraphql;

