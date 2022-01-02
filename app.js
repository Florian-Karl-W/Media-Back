const express = require("express");
const app = express();
const port = 5000;
const db = require("./models");
const cors = require("cors");
const bodyParser = require("body-parser");

const MainCat = require("./Controllers/MainCategories");
const SubCat = require("./Controllers/SubCategories");

const run = async () => {};

// db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
// });

//  use express static folder
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./Route/MainCatRoute")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
