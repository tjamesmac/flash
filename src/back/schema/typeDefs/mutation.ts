import { gql } from 'apollo-server-express';

const mutation = gql`
    input addBookInput {
        title: String
        author: String
    }
    type Mutation {
        addBook(input: addBookInput): [Book]
    }
`;

export { mutation };

