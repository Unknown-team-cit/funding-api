const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    name_of_company: {
      type: String,
    },
    name_of_owner: {
      type: String,
    },
    work_field: {
      type: String,
    },
    website_link: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    ph_number: {
      type: String,
    },
    email_id: {
      type: String,
    },
    password: {
      type: String,
    },
    ppt_link: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    domain: {
      type: String,
    },
    post_content: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const Startup = mongoose.model("startup", StartupSchema);
module.exports = Startup;
