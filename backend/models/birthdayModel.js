const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birthdaySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dates: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ["friend", "family", "colleague"],
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Birthday", birthdaySchema);
