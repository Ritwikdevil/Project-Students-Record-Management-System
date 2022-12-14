//===================== Import Packages =====================//
const mongoose = require("mongoose")



//===================== Teacher's Schema =====================//
const teacherSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }

}, { timestamps: true })



//===================== Module Export =====================//
module.exports = mongoose.model("Teacher", teacherSchema)