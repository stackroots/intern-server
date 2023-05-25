const router = require("express").Router();
const { studentController } = require("../controllers/index");
const { verifyAdmin: { verify } } = require("../middlewares")


router.post("/register", verify, studentController.registerUser);

router.get("/all", studentController.getAllUsers);

router.get("/", studentController.getUser);


router.delete("/", studentController.deleteUser);







module.exports = router;