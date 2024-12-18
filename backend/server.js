require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const birthdayRoutes = require("./routes/birthdays");
const userRoutes = require("./routes/user");

const cors = require("cors");

// Middleware
app.use(cors());
// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/birthdays", birthdayRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      // console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    // console.log(error);
  });
