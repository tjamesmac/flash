import { gql } from 'apollo-server-express';


const types = gql`
    type Book {
        title: String
        author: String
    }
`;

export { types };