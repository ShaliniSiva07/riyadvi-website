const mongoose = require("mongoose");

const leadMagnetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const LeadMagnet = mongoose.model(
  "LeadMagnet",
  leadMagnetSchema
);

module.exports = LeadMagnet;