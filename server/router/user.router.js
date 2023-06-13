const router = require("express").Router();

const Users = require("../model/user.model");

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: users,
  });
});

router.post("/", async (req, res) => {
  await Users.sync();
  await Users.create(req.body);
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Created User",
  });
});

module.exports = router;
