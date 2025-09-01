const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "first name must be at least 3 character"],
    },
    lastname: {
      type: String,
      minlength: [3, "last name must be at least 3 character"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "invalid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketID: {},
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashedPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
