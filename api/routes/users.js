const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;
const cors = require("cors");
const app = express();

app.use(cors());

//const UserController = require('../controllers/user-controller');

//router.get('/', UserController.getUser);
//router.post('/signup', UserController.createUser)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

router.post("/register", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.json({
      status: "error",
      error: "Email and password are required",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employeeDB = client.db("employee");
    const employeeColl = employeeDB.collection("registered-employees");

    const employeeData = {
      email: req.body.email,
      password: hashedPassword,
    };

    await employeeColl.insertOne(employeeData);
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.json({ status: "error", error: "Email already exists" });
    } else {
      res.json({ status: "error", error: "Failed to register user" });
    }
  }
});

router.post("/me", authenticateToken, async (req, res) => {
  try {
    // Fetch user data from the database based on the authenticated user
    const user = await User.findById(req.user.id);
    console.log(user.email);
    // Respond with user data, including isAdmin field
    res.json({
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.json({
      status: "error",
      error: "Email and password are required",
    });
  }
  try {
    const employeeDB = client.db("employee");
    const employeeColl = employeeDB.collection("registered-employees");

    const user = await employeeColl.findOne({ email: req.body.email });
    if (user) {
      // use bcrypt to compare provided password with password stored in db
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        // Generate a token
        const token = jwt.sign(
          {
            email: user.email,
          },
          SECRET_KEY,
          { expiresIn: "24h" } // Token expires in 24 hours
        );
        res.json({ status: "ok", message: "Login successful", token });
      } else {
        res.json({ status: "error", message: "Invalid email or password" });
      }
    } else {
      return res.json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "An error occurred during login" });
  }
});

module.exports = router;
