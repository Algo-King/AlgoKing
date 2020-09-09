const express = require("express");
const path = require("path");
const PORT = 5000;
const connectDB = require("./config/db");

const app = express();

// Connect Database - in the config folder
connectDB();

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "client")));

app.get("/", (req, res) => res.send("API Running")); // test route

// ! Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Error Handlers
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app;
