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
