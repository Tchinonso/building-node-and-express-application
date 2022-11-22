const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ succes: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "provide value werey" });
  }
  res.status(201).send({ succes: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "provide value werey" });
  }
  res.status(201).send({ succes: true, data: [...people, name] });
};

const putPersonId = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ succes: true, data: newPeople });
};

const deletePersonId = (req, res) => {
  //const { id } = req.params;
  //const { name } = req.body;
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ succes: true, data: newPeople });
  //if (person.id !=== Number(req.params.id)) {
  //
  //     }
  //     return person;
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  putPersonId,
  deletePersonId,
};
