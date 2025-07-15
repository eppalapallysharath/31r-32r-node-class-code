const errorMiddleware = (err, req, res, next) => {
  console.log("error middleware:", err);
  // console.log("error middleware stack:", err.stack);
  res.status(err.status || 500).json({
    message: err.message || "something went wrong please try after sometime",
  });
};

module.exports = { errorMiddleware };
