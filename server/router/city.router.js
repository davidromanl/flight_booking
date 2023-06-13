const router = require("express").Router();

const Cities = require("../model/city.model");

router.get("/", async (req, res) => {
  const cities = await Cities.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: cities,
  });
});

router.post("/", async (req, res) => {
  const dataUsers = req.body;
  await Cities.sync();
  await Cities.create({
    ciudad: dataUsers.ciudad,
    aeropuerto: dataUsers.aeropuerto,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Created City",
  });
});

module.exports = router;
