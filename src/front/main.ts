import { ApolloClient, gql, NormalizedCacheObject, InMemoryCache } from "@apollo/client/core"
function ready() {
    console.log("hello world i am in a function");
    console.log("i am another test to see if something happened");


    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://localhost:3005/graphql'
    })


    client.query({
        query: gql`
        query getBooks {
            books {
                author
                title
            }
        }
        `
    }).then(result => console.log(result));
}

const root = document.querySelector("#root");
console.log(root);
ready();