const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  body: { type: String, required: true, minLenght: 3, maxLength: 200 },
});

modeule.exports = mongoose.model("Post", PostSchema);
