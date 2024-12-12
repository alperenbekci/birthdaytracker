const Birthday = require("../models/birthdayModel");
const mongoose = require("mongoose");

// get all birthdays
const getBirthdays = async (req, res) => {
  const user_id = req.user._id;

  const birthdays = await Birthday.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(birthdays);
};

// get a single birthday
const getBirthday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such birthday" });
  }

  const birthday = await Birthday.findById(id);

  if (!birthday) {
    return res.status(404).json({ error: "No such birthday" });
  }

  res.status(200).json(birthday);
};

// create new birthday
const createBirthday = async (req, res) => {
  const { name, type, dates } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!type) {
    emptyFields.push("type");
  }
  if (!dates) {
    emptyFields.push("dates");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const user_id = req.user._id;
    const birthday = await Birthday.create({ name, type, dates, user_id });
    res.status(200).json(birthday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a birthday
const deleteBirthday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such birthday" });
  }

  const birthday = await Birthday.findOneAndDelete({ _id: id });

  if (!birthday) {
    return res.status(400).json({ error: "No such birthday" });
  }

  res.status(200).json(birthday);
};

// update a birthday
const updateBirthday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such birthday" });
  }

  const birthday = await Birthday.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!birthday) {
    return res.status(400).json({ error: "No such birthday" });
  }

  res.status(200).json(birthday);
};

module.exports = {
  getBirthdays,
  getBirthday,
  createBirthday,
  deleteBirthday,
  updateBirthday,
};
