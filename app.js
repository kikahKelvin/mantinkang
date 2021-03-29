const path = require("path");
var express = require("express");
const hbs = require("hbs");
const port=process.env.PORT || 3000;
var app = express();
const path1 = path.join(__dirname, "./templates/views");
const path2 = path.join(__dirname, "./templates/partial");

app.set("view engine", "hbs");
app.set("views", path1);

hbs.registerPartials(path2);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cancel", (req, res) => {
    res.render("cancel.hbs",{
        amount1: "20000",
        amount2: "40000",
        amount3: "500000",
        amount4: "80000",
        amount5: "100000",
        day1: "Monday",
        day2: "Tuesday",
        day3: "Wednesday",
        day4: "Thursday",
        day5: "Friday",
        name1: "kikah",
        name2: "kelvin",
        name3: "mantinkang",
        name4: "roy chief",
        name5: "francis",
       
    });
  });

  app.get("/comfirm", (req, res) => {
    res.render("comfirm.hbs",{
        amount1: "200",
        amount2: "40000",
        amount3: "500000",
        amount4: "80000",
        amount5: "1000",
        day1: "Monday",
        day2: "Tuesday",
        day3: "Wednesday",
        day4: "Thursday",
        day5: "Friday",
        name1: "kikah",
        name2: "erica",
        name3: "riki",
        name4: "roy chief",
        name5: "amand",
       
    });
  });

  app.get("/initiate", (req, res) => {
    res.render("initiate.hbs",{
        amount1: "200",
        amount2: "40000",
        amount3: "500000",
        amount4: "80000",
        amount5: "1000",
        day1: "Monday",
        day2: "Tuesday",
        day3: "Wednesday",
        day4: "Thursday",
        day5: "Friday",
        name1: "kikah",
        name2: "erica",
        name3: "mheh",
        name4: "roy chief",
        name5: "roland",
       
    });
  });

  app.get("/update", (req, res) => {
    res.render("update.hbs",{
        amount1: "200",
        amount2: "40000",
        amount3: "500000",
        amount4: "80000",
        amount5: "1000",
        day1: "Monday",
        day2: "Tuesday",
        day3: "Wednesday",
        day4: "Thursday",
        day5: "Friday",
        name1: "kikah",
        name2: "erica",
        name3: "christa",
        name4: "roy chief",
        name5: "paul",
       
    });
  });

app.listen(port, () =>
{
  console.log(`sever is up on port ${port}`);
});
