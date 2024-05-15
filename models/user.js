const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 30 },
  password: { type: String, required: true, maxLength: 30 },
});

UserSchema.virtual("full_name").get(function () {
  const fullName = `${this.first_name} ${this.last_name}`;
  return fullName;
});

module.exports = mongoose.model("User", UserSchema);
