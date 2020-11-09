import express from "express";
import path from "path";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from "./schema/typeDefs";

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
    express.static(path.join(__dirname, "../../dist"), { maxAge: 31557600000 })
);

app.get('/', (req, res) => {
  console.log(path.join(__dirname, "../dist"))
    res.sendFile(path.join(__dirname, "../../dist/index.html"))
  })

export { app };