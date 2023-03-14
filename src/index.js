const express = require("express");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup

app.engine(
  "hbs",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: ".hbs",
    defaultLayout: "index",
  })
);
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// middleware

app.use(express.static("public"));
app.use(express.json());
app.use("/api", require("./routes/routes"));

// routes

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});

// connect to MongoDB

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
