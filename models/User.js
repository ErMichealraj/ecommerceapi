const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  idProofType: {
    type: String,
    required: true,  // Make it required or optional as per your requirement
  },
  idProofNo: {
    type: String,
    required: true,  // Make it required or optional as per your requirement
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
