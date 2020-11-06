import { gql } from 'apollo-server-express';

const query = gql`
    type Query {
        books: [Book]
        book(title: String): Book
    }
`;

export { query };

