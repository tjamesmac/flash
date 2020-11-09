import { ApolloClient, gql, NormalizedCacheObject, InMemoryCache } from "@apollo/client"

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3005/graphql'
})


client.query({
    query: gql`
    query GetBooks {
        books {
            author
            title
        }
    }
    `
}).then(result => console.log(result));