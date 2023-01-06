const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    resetpasswordToken: String,
    resetpasswordExpire: Date,
  },
  {versionKey:false},
  { timestamps: true },
);

const UserModel = mongoose.model("user", User);
module.exports = UserModel;
