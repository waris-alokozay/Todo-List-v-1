const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let items = ["Buy Eggss", "Buy Milk", "Buy Cacaw"];

app.get("/", (req, res) => {
  let today = new Date();
  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", option);
  res.render("index", { day: day, newItem: items });
});

app.post("/", (req, res) => {
  let addItem = req.body.addItem;
  items.push(addItem);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});
