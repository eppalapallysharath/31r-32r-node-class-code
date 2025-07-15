const express = require("express");
const app = express();
const weatherRoute = require("./routes/weatherRoute.js");
const { errorMiddleware } = require("./middlewares/errorMidddleware.js");
app.use("/api/v1.0/weather", weatherRoute);

// error handling middleware
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
