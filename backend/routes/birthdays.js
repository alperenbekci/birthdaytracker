const express = require("express");
const {
  createBirthday,
  getBirthdays,
  getBirthday,
  deleteBirthday,
  updateBirthday,
} = require("../controllers/birthdayController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all birthday routes
router.use(requireAuth);

// GET all birthdays
router.get("/", getBirthdays);

//GET a single birthday
router.get("/:id", getBirthday);

// POST a new birthday
router.post("/", createBirthday);

// DELETE a birthday
router.delete("/:id", deleteBirthday);

// UPDATE a birthday
router.patch("/:id", updateBirthday);

module.exports = router;
