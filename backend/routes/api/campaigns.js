const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Campaign } = require('../../db/models');
const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();


router.get('/', async(req, res) => {
    // const tag = req.params.tag
    const campaigns = await Campaign.findAll()
    res.json({campaigns})
  });



module.exports = router;
