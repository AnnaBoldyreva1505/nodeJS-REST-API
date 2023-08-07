const contacts = require("../models/contacts");
// const paginate = require("mongoose-paginate");

// const getAll = async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const options = {
//         page,
//         limit,
//         sort: { name: 1 },
//     };

//     const result = await contacts.paginate({}, options);
//     res.json(result);
// }

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contacts
    .find({ owner }, "-createdAt -updatedAt")
    .populate("owner", "name email");
  // const result = await contacts.find({}, "name email");
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const contact = await contacts.findById({ _id: contactId, owner });

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  res.status(200).json(contact);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contacts.create({
    ...req.body,
    owner,
  });
  res.status(201).json(result);
};

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const updateContacts = await contacts.findByIdAndRemove({
    _id: contactId,
    owner,
  });

  if (!updateContacts) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "Contact deleted" });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const updatedContact = await contacts.findByIdAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );

  if (!updatedContact) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(updatedContact);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const updatedContact = await contacts.findByIdAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );

  if (!updatedContact) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(updatedContact);
};

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateStatusContact,
};
