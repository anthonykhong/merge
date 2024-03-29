const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
      min: 1927,
    },
    mpaaRating: {
      type: String,
      enum: ["G", "PG", "PG-13", "R"],
    },
    cast: [String],
    nowShowing: { type: Boolean, default: true },
    // reviews is an ARRAY of review subdocuments
    // Telling mongoose that the object that we push into
    // this array must match the reviewSchema
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
module.exports = mongoose.model("Movie", movieSchema);
