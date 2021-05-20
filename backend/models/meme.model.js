const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memeSchema = new Schema(
  {
    author: { type: String, required: true },
    memeImage: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;
