const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const app = express();

const schema = new GraphQLSchema({ 
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello World...........'
            },
            person: { 
                type: GraphQLString,
                resolve: () => 'Lohitha Siripurapu'
            }

        })
    })
});

// function expressGraphQLMiddleware(options) {
//     return graphqlHTTP(options);
// }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const port = 5000;
app.listen(port, () => console.log('listening on port ' + port));
