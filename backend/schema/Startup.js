const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    name_of_company: {
      type: String,
      required: true
    },
    name_of_owner: {
      type: String,
      required: true
    },
    work_field: {
      type: String,
      required: true
    },
    website_link: {
      type: String,
    },
    linkedin: {
      type: String,
      required: true
    },
    ph_number: {
      type: String,
      required: true
    },
    email_id: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    ppt_link: {
      type: String,
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    domain: {
      type: String,
      required: true
    },
    post_content: {
      type: String,
      required: true
    },
    messages: [
      {
        _id: false,
        name: String,
        contact: String,
        message: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Startup = mongoose.model("startup", StartupSchema, "startup");
module.exports = Startup;
