const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    resume: {
      type: String,
      default: "",
    },

    coverLetter: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model(
  "Application",
  applicationSchema
);

module.exports = Application;