const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { initializeDatabase } = require("./config/database");
const { auth } = require("./middlewares/authMiddleware");
const defaultTitle = require("./middlewares/defaultTitle");

const app = express();

require("./config/handlebars")(app);

app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//TO CHECK -> title. Also in controllers...
app.use(defaultTitle("Real Estate"));

app.use(auth);
app.use(routes);

initializeDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Server is listening on port 3000"));
  })
  .catch((err) => {
    console.log("Cannot connect to DB", err);
    process.exit(1);
  });
