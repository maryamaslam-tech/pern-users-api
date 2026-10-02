// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.code === "23505") {
    return res.status(409).json({
      error: "Email already Exists.",
    });
  }
  res.status(500).json({
    error: err.message,
  });
};
module.exports = errorHandler;