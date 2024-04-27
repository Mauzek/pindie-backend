const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require('./routers/users');
const gamesRouter = require('./routers/games');
const categoriesRouter = require('./routers/categories');
const cors = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  usersRouter,
  gamesRouter,
  categoriesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
