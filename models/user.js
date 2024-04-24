const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 30 },
  last_name: { type: String, required: true, maxLength: 30 },
});

UserSchema.virtual("full_name").get(function () {
  const fullName = `${this.first_name} ${this.last_name}`;
  return fullName;
});

module.exports = mongoose.model("User", UserSchema);
