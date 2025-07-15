const getWeatherData = (req, res) => {
  const { city } = req.query;
  res.status(200).json({
    message: "weather data fetched",
    cityName: city,
    temperature: "32.0 celsius",
  });
};

const cites = (req, res, next) => {
  try {
    res.json(city_data);
  } catch (err) {
    const error = {
      message: err.message,
      status: 429,
    };
    next(error);
    // res.status(500).send("no cities present");
  }
};

const addCities = (req, res, next) => {
  try {
    res.send(city_data.push("hyderabad"));
  } catch (err) {
    next(err);
  }
};

module.exports = { getWeatherData, cites, addCities };
