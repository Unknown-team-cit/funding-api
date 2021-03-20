const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true
    },
    NameofCeo: {
      type: String,
      required: true
    },
    FeildOfWork: {
      type: String,
      required: true
    },
    CompanyWebsite: {
      type: String,
    },
    Linkedin: {
      type: String,
      required: true
    },
    Contact: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true
    },
    SlideLink: {
      type: String,
    },
    Country: {
      type: String,
      required: true
    },
    State: {
      type: String,
      required: true
    },
    City: {
      type: String,
      required: true
    },
    Domain: {
      type: String,
      required: true
    },
    InvestorContent: {
      type: String,
      required: true
    },
    messages: [
      {
        
        InvestorName: String,
        InvestorContact: String,
        Message: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Startup = mongoose.model("startup", StartupSchema, "startup");
module.exports = Startup;
