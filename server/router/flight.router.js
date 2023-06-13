const router = require("express").Router();

const Flights = require("../model/flight.model");

router.get("/", async (req, res) => {
  //query
  const where = {};
  const array = Object.keys(req.query);
  for (let index = 0; index < array.length; index++) {
    where[array[index]] = req.query[array[index]];
  }
  const flights = await Flights.findAll({ where });
  res.status(200).json({
    ok: true,
    status: 200,
    body: flights,
  });
});

router.post("/", async (req, res) => {
  const { origen, destino, fecha, salida, llegada, precio } = req.body;
  await Flights.sync();
  const createFlight = await Flights.create({
    origen,
    destino,
    fecha,
    salida,
    llegada,
    precio,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Created Flight",
  });
});

module.exports = router;
