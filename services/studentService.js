const { studentModel } = require("../models/index");

exports.createUser = async (reqBody) => {
    let student = new studentModel(reqBody);
    return await student.save();
}

exports.getAllStudents = async () => {
    return await studentModel.find({}, "", {});
}

exports.getOneStudent = async (rollNo) => {
    return await studentModel.findOne({ rollNo: rollNo }, "", {});
}

exports.deleteOneStudent = async (rollNo) => {
    return await studentModel.findOneAndDelete({ rollNo: rollNo });
}
