// server.js
const express = require("express");
const app = express();
app.use(express.json());

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter);

const errorHandler = require("./middleware/errorHandler.js");
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
