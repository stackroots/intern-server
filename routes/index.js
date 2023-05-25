module.exports = (app) => {
  app.use("/student", require("./studentRouter"));
  app.use("/admin", require("./adminRouter"));



}

