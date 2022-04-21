const Person = require("../data/models/Person");

const person_getList = (req, res) => {
  Person.find({})
    .sort({ name: 1 })
    .then((data) => {
      res.send(200, data);
    })
    .catch((err) => {
      res.status(404).send({
        message: ` Error ! (${err.message})`,
      });
    });
};
const person_getId = (req, res) => {
  Person.findById({ _id: req.params.id })
    .then((data) => {
      res.send(200, data);
    })
    .catch((err) => {
      res.status(404).send({
        message: ` Error ! (${err.message})`,
      });
    });
};

const person_postList = (req, res) => {
  const person = new Person({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    mobile_phone: req.body.mobile_phone,
    e_mail: req.body.e_mail,
  });
  person
    .save(person)
    .then((data) => {
      res.send(data);
      (err, person) => console.log(err, person);
    })
    .catch((err) => {
      res.status(500).send({
        message: ` Error ! (${err.message})`,
      });
    });
};
const person_patchList = (req, res) => {
  const id = req.params.id;
  Person.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch((err) => {
      res.status(404).send({
        message: ` Error ! (${err.message})`,
      });
    });
};
const person_deleteList = (req, res) => {
  Person.findByIdAndRemove({ _id: req.params.id })
    .then((data) => {
      res.send(200, data);
    })
    .catch((err) => {
      res.status(500).send({
        message: ` Error ! (${err.message})`,
      });
    });
};

module.exports = {
  person_getList,
  person_getId,
  person_postList,
  person_patchList,
  person_deleteList,
};
