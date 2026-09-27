require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const connectDB = require("./config/db");

const Contact = require("./models/Contact");
const Application = require("./models/Application");
const HealthCheckup = require("./models/HealthCheckup");
const LeadMagnet = require("./models/LeadMagnet");
const Consultation = require("./models/Consultation");
const Admin = require("./models/Admin");

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* Multer Configuration */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/* Test API */
app.get("/", (req, res) => {
  res.json({
    message: "Riyadvi backend server is running!",
  });
});

/* Contact API */
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      message,
    } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact enquiry saved successfully!",
      data: contact,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to save contact enquiry.",
    });
  }
});

/* Consultation API */
app.post("/api/consultation", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body;

    const consultation = await Consultation.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Consultation request submitted successfully!",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Consultation API error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to submit consultation request.",
    });
  }
});

/* Career Application API */
app.post(
  "/api/applications",
  upload.single("resume"),
  async (req, res) => {
    try {
      const {
        jobTitle,
        fullName,
        email,
        phone,
        coverLetter,
      } = req.body;

      const resume = req.file
        ? req.file.filename
        : "";

      const application = await Application.create({
        jobTitle,
        fullName,
        email,
        phone,
        resume,
        coverLetter,
      });

      res.status(201).json({
        success: true,
        message: "Job application submitted successfully!",
        data: application,
      });
    } catch (error) {
      console.error(
        "Application API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "Failed to submit job application.",
      });
    }
  }
);

/* Business Health Checkup API */
app.post("/api/health-checkup", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      website,
      industry,
      challenge,
    } = req.body;

    const healthCheckup = await HealthCheckup.create({
      name,
      email,
      company,
      website,
      industry,
      challenge,
    });

    res.status(201).json({
      success: true,
      message:
        "Business health checkup submitted successfully!",
      data: healthCheckup,
    });
  } catch (error) {
    console.error(
      "Health Checkup API error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to submit business health checkup.",
    });
  }
});

/* Lead Magnet API */
app.post("/api/lead-magnet", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
    } = req.body;

    const leadMagnet = await LeadMagnet.create({
      name,
      email,
      company,
    });

    res.status(201).json({
      success: true,
      message:
        "Lead magnet request submitted successfully!",
      data: leadMagnet,
    });
  } catch (error) {
    console.error(
      "Lead Magnet API error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to submit lead magnet request.",
    });
  }
});

/* Admin Login API */
app.post("/api/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      success: true,
      message: "Admin login successful!",
      token,
    });
  } catch (error) {
    console.error(
      "Admin Login API error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to login.",
    });
  }
});

/* Admin APIs */

/* Get Contact Enquiries */
app.get(
  "/api/admin/contacts",
  authMiddleware,
  async (req, res) => {
    try {
      const contacts = await Contact.find()
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      console.error(
        "Admin Contacts API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch contact enquiries.",
      });
    }
  }
);

/* Get Consultation Requests */
app.get(
  "/api/admin/consultations",
  authMiddleware,
  async (req, res) => {
    try {
      const consultations = await Consultation.find()
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        data: consultations,
      });
    } catch (error) {
      console.error(
        "Admin Consultations API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch consultation requests.",
      });
    }
  }
);

/* Get Career Applications */
app.get(
  "/api/admin/applications",
  authMiddleware,
  async (req, res) => {
    try {
      const applications = await Application.find()
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        data: applications,
      });
    } catch (error) {
      console.error(
        "Admin Applications API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch applications.",
      });
    }
  }
);

/* Get Business Health Checkups */
app.get(
  "/api/admin/health-checkups",
  authMiddleware,
  async (req, res) => {
    try {
      const healthCheckups = await HealthCheckup.find()
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        data: healthCheckups,
      });
    } catch (error) {
      console.error(
        "Admin Health Checkups API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch health checkups.",
      });
    }
  }
);

/* Get Lead Magnet Requests */
app.get(
  "/api/admin/lead-magnets",
  authMiddleware,
  async (req, res) => {
    try {
      const leadMagnets = await LeadMagnet.find()
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        data: leadMagnets,
      });
    } catch (error) {
      console.error(
        "Admin Lead Magnets API error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch lead magnet requests.",
      });
    }
  }
);

/* Connect MongoDB */
connectDB();

/* Start Server */
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});