require("dotenv").config();

const mongoose = require("mongoose");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne({
      username: process.env.ADMIN_USERNAME,
    });

    if (existingAdmin) {
      console.log("Admin account already exists.");
      process.exit(0);
    }

    await Admin.create({
      username: process.env.ADMIN_USERNAME,
      passwordHash: process.env.ADMIN_PASSWORD_HASH,
    });

    console.log("Admin account created successfully!");

    process.exit(0);
  } catch (error) {
    console.error(
      "Failed to create admin:",
      error.message
    );

    process.exit(1);
  }
};

createAdmin();