import { gql } from 'apollo-server-express';
import { query } from './query';
import { mutation } from './mutation';
import { types } from './types';


const typeDefs = gql`
    ${types}
    ${query}
    ${mutation}
`;

export { typeDefs };