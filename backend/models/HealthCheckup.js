const mongoose = require("mongoose");

const healthCheckupSchema = new mongoose.Schema(
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

    website: {
      type: String,
      default: "",
      trim: true,
    },

    industry: {
      type: String,
      required: true,
      trim: true,
    },

    challenge: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const HealthCheckup = mongoose.model(
  "HealthCheckup",
  healthCheckupSchema
);

module.exports = HealthCheckup;