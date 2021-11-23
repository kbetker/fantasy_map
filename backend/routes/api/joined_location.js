const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Joined_Location } = require('../../db/models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();

router.post('/new', async (req, res) => {
    // const wat = await Spot.findAll()
    const  data = req.body;
    console.log("JOINED LOCATION!!!?!?!?!?!??!?", data)
    const newJoined = await Joined_Location.create({
        parent_location_id: data.parent_location,
        child_location_id: data.child_location
    })
    return res.json({
        newJoined,
    });
  });



  module.exports = router;
