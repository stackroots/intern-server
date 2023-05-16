const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        age: {
            type: Number,
            required: true,
            min: 1
        },
        gender: {
            type: String,
            required: true,
            default: "male",
            enum: ["male", "female"]
        },
        rollNo: {
            type: Number,
            unique: true,
            min: 1
        }
    },
    {
        timestamps: true
    }
);


const studentModel = mongoose.model("students", studentSchema);


module.exports = {
    studentModel
}