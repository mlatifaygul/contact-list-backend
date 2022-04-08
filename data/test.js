const mongoose = require("mongoose");
const Post = require("./models/Person");

mongoose.connect(
  "mongodb+srv://arin:toor@nodedemo.b8xph.mongodb.net/contact-list?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("db connected")
);

Post.create(
  {
    name: "Mehmet",
    address: "address, Erzurum",
    phone: "05555550",
    mobile_phone: "021222222",
    e_mail: "mehmet@mail.com",
  },

  (error, post) => {
    console.log(error, post);
  }
);
