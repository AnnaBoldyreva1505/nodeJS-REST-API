const contacts = require("../models/contacts")


const removeById = async (req, res) => {
    const { contactId } = req.params;
    const updateContacts = await contacts.removeContact(contactId);

    updateContacts ? res.status(200).json({ message: "Contact deleted" }) : res.status(404).json({ message: "Contact not found" });
    
  };

  module.exports = removeById;