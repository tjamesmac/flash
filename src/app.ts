import express from "express";
import path from "path";
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from "./back/schema/typeDefs";

const books = [
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson"
  },
  {
    title: "Words Of Radiance",
    author: "Brandon Sanderson"
  }
]

const resolvers = {
  Query: {
    books: () => books,
    book: (parent: any, args: any) => books.find(book => book.title === args.title),
  },
  Mutation: {
    addBook: (_: any, {input}: any) => {
      const { title, author } = input;
      const book = { title, author };
      books.push(book)
      return books;
    }
  }
}

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.applyMiddleware({ app, path: "/graphql" })

app.use(
    express.static(path.join(__dirname, "../dist"), { maxAge: 31557600000 })
);

app.get('/', (req, res) => {
    // res.sendFile('./dist/index.html')
  })

export { app };