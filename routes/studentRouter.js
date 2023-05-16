const router = require("express").Router();
const { studentController } = require("../controllers/index");


router.post("/register", studentController.registerUser);

router.get("/all", studentController.getAllUsers);

router.get("/", studentController.getUser);


router.delete("/", studentController.deleteUser);







module.exports = router;