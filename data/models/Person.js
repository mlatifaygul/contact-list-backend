const mongoose = require("mongoose");

const PersonsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  mobile_phone: { type: String },
  e_mail: { type: String, required: true},
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Persons", PersonsSchema);
