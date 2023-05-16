const { studentService } = require("../services/index");



exports.registerUser = async (req, res, next) => {
    try {
        console.log(req.body);

        let reqBody = req.body;

        const student = await studentService.createUser(reqBody);

        console.log("hai " + student.fullname);
        res.setHeader("Content-Type", "application/json");
        res.status(201);
        res.json({ message: "student successfully registered", isError: false, data: { student: student } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}


exports.getAllUsers = async (req, res, next) => {
    try {
        let reqQuery = req.query;

        const students = await studentService.getAllStudents();


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "students successfully retrieved", isError: false, data: { students: students } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getUser = async (req, res, next) => {
    try {
        let reqQuery = req.query;

        const student = await studentService.getOneStudent(reqQuery.rollNo);


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "student successfully retrieved", isError: false, data: { student: student } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        let reqQuery = req.query;

        await studentService.deleteOneStudent(reqQuery.rollNo);


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "student successfully deleted", isError: false, data: {} });

    } catch (error) {
        console.log(error);
        next(error);
    }
}