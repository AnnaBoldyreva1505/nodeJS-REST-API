const { Schema, model } = require("mongoose");
// const mongoosePaginate = require('mongoose-paginate-v2');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Contact name"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);
// contactSchema.plugin(mongoosePaginate);

module.exports = Contact;









// const fs = require("fs/promises");
// const path = require("path");
// const crypto = require("crypto");

// const contactsPath = path.join(__dirname, "contacts.json");

// const listContacts = async () => {
//   try {
//     const contacts = await fs.readFile(contactsPath);
//     return JSON.parse(contacts);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getContactById = async (contactId) => {
//   try {
//     const contacts = JSON.parse(await fs.readFile(contactsPath));
//     const findContactById = contacts.filter(
//       (contact) => String(contact.id) === contactId
//     );

//     if (!findContactById) {
//       return null;
//     }
//     return findContactById;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const addContact = async (body) => {
//   try {
//     const { name, email, phone } = body;
//     const contacts = JSON.parse(await fs.readFile(contactsPath));

//     const newContact = {
//       id: crypto.randomUUID(),
//       name,
//       email,
//       phone,
//     };
//     contacts.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));
//     return newContact;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const removeContact = async (contactId) => {
//   try {
//     const contacts = JSON.parse(await fs.readFile(contactsPath));
//     const contactIndex = contacts.findIndex(
//       (contact) => contact.id === contactId
//     );
//     if (contactIndex === -1) {
//       return null;
//     }
//     const removedContact = contacts.splice(contactIndex, 1)[0];
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));
//     return removedContact;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateContact = async (contactId, body) => {
//   try {
//     const contacts = JSON.parse(await fs.readFile(contactsPath));

//     const findContact = contacts.find(contact => contact.id === contactId);
//     if (!findContact) {
//       return null;
//     }
//     const updatedContact = {
//       ...findContact,
//       ...body,
//     };
    
//     const rest = contacts.filter((contact) => contact.id !== contactId);
//     const updatedContacts = [...rest, updatedContact];
//     await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
//     return updatedContact;
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
