const contacts = require("../models/contacts")


const updateById = async(req, res)=> {
    const {contactId} = req.params;
    const updatedContact = await contacts.updateContact(contactId, req.body);

    updatedContact ?  res.status(201).json(updatedContact) : res.status(404).json({ message: "Contact not found" });  

}

module.exports = updateById;
