const router = require("express").Router();

const Reservation = require("../model/reservation.model");
const Flights = require("../model/flight.model");

router.get("/", async (req, res) => {
  const where = req.query;
  Reservation.belongsTo(Flights, { foreignKey: "flight_id" });
  Flights.hasMany(Reservation, { foreignKey: "flight_id" });
  const reservations = await Reservation.findAll({ where, include: [Flights] });
  res.status(200).json({
    ok: true,
    status: 200,
    body: reservations,
  });
});

router.post("/", async (req, res) => {
  await Reservation.sync();
  await Reservation.create(req.body);
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Created User",
  });
});

module.exports = router;
