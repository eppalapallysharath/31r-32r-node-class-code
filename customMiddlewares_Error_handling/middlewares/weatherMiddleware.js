const checkAPI_Key = (req, res, next) => {
  const { api_key } = req.query;
  if (api_key === "4567qwe45") {
    next();
  } else {
    res.status(401).json({
      message: "invalid api_key",
    });
  }
};
module.exports = { checkAPI_Key };
