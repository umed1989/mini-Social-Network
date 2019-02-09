const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const bodyParser = require("body-parser");

const app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is Connected!!!"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const PORT = 3000;

app.listen(PORT, () => console.log(`Your app is running on port: ${PORT}`));
