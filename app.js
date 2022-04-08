const app = require("express")();
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 4040;
require("./data/db-config");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const persons = require("./routers/persons");
app.use("/persons", persons);

app.listen(PORT, () => {
  console.log(
    "----- Connection Successful ! ----- \n" +
      "click to connect http://localhost:8080"
  );
});
