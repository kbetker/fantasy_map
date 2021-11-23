const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Location } = require('../../db/models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();

router.post('/new', async (req, res) => {
    // const wat = await Spot.findAll()
    console.log("Location!?!?!?!?!?!?!!??!?!??")
    const data = req.body;
    const newLoc = await Location.create({
        name: data.name,
        location_description: data.location_description,
        coord_x: data.coord_x,
        coord_y: data.coord_y,
        vertex_id: data.vertex_id,
        show_on_map: true,
        discovered: true,
        image_url: null,
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: 0,
        name_offset_y: 0,
        name_font_size_min: 30,
        name_font_size_max: 30,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "black",
        location_stroke_color: "white",
        campaign_id: 1,

    })
    return res.json({
        newLoc,
    });
});



router.get('/', async (req, res) => {
    const spotById = await Vertex.findAll()
    res.json(spotById)
});

module.exports = router;
