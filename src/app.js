require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const constants = require("./utils/constants");
const routers = require("./routes/router");

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/auth", routers.authRouter);
app.use("/api/v1/news", routers.newsRouter);
app.use("/api/v1/user", routers.userRouter);

const PORT = constants.PORT;
app.listen(PORT, () => {
  console.log(
    `server started listening on port ${PORT}\nhttp://localhost:${PORT}`
  );
});
