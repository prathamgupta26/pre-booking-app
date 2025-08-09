const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/a-young-girl-with-long-hair-wearing-a-white-t-shirt-HaNi1rsZ6Nc",
            set: (v) =>
                v === ""
                    ? "https://unsplash.com/photos/a-young-girl-with-long-hair-wearing-a-white-t-shirt-HaNi1rsZ6Nc"
                    : v,
        },
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
