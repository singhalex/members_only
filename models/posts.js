const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 50 },
  message: { type: String, required: true, minLength: 3, maxLength: 400 },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  time: { type: Date, required: true },
});

PostSchema.virtual("time_date").get(function () {
  return DateTime.fromJSDate(this.time).toLocaleString(DateTime.DATETIME_FULL);
});

module.exports = mongoose.model("Posts", PostSchema);
