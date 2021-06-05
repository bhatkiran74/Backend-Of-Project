const mongoose = require('mongoose');
const { ObjectID } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "name is required",
        minlength: [2, "too short"],
        maxlength: [32, "too lomg"],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
}, { timestamps: true })
module.exports = mongoose.model("Category", categorySchema);