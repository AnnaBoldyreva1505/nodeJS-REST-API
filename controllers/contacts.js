const contacts = require("../models/contacts");

const getAll = async (req, res) => {
  const result = await contacts.find({});
  // const result = await contacts.find({}, "name email");
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.findById(contactId);

  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
};

const add = async (req, res) => {
  const result = await contacts.create(req.body)
  res.status(201).json(result);
};

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const updateContacts = await contacts.findByIdAndRemove(contactId);

  if (updateContacts) {
    res.status(200).json({ message: "Contact deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contacts.findByIdAndUpdate(contactId, req.body, {new: true});

  if (updatedContact) {
    res.status(200).json(updatedContact);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contacts.findByIdAndUpdate(contactId, req.body, {new: true});

  if (updatedContact) {
    res.status(200).json(updatedContact);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateStatusContact,
};
