const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const userRouter = require("./router/user.router");
const cityRouter = require("./router/city.router");
const flightRouter = require("./router/flight.router");
const reservationRouter = require("./router/reservation.router");

const app = express();
//app.use(morgan("dev"));
app.use(cors());

app.use("/", express.static("client/dist", { index: false }));

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/cities", cityRouter);
app.use("/api/flights", flightRouter);
app.use("/api/reservations", reservationRouter);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname + "/../client/dist", "index.html"));
});

module.exports = app;
