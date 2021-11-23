const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Vertex } = require('../../db/models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();

router.post('/new', async (req, res) => {
    const { coord_x, coord_y } = req.body;
    const newVertex = await Vertex.create({ coord_x, coord_y })
    return res.json({
        newVertex,
    });
  });



  router.get('/', async (req, res) => {
  const spotById = await Vertex.findAll()
  res.json(spotById)
});

  module.exports = router;
