import express from "express";
import path from "path";
import { send } from "process";


// Create Express server
const app = express();
// Express configuration
// app.set("port", process.env.PORT || 3005);


app.use(
    express.static(path.join(__dirname, "../dist"), { maxAge: 31557600000 })
);

app.get('/', (req, res) => {
    // res.sendFile('./dist/index.html')
  })

export { app };