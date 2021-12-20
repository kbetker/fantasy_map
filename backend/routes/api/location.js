const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Location, Vertex, Joined_Location } = require('../../db/models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();

router.put(`/edit/:id`, async(req, res) => {

    const data = req.body;
    const id = req.params.id
    const location = await Location.findOne({
        where: {id: id},
    })


    let response = await location.update({
        name: data.name,
        location_description: data.location_description,
        coord_x: data.coord_x,
        coord_y: data.coord_y,
        vertex_id: data.vertex_id,
        show_on_map: data.show_on_map,
        discovered: data.discovered,
        image_url: data.image_url,
        thumbnail_url: data.thumbnail_url,
        min_visible_scale: data.min_visible_scale,
        max_visible_scale: data.max_visible_scale,
        name_offset_x: data.name_offset_x,
        name_offset_y: data.name_offset_y,
        name_font_size_min: data.name_font_size_min,
        name_font_size: data.name_font_size,
        name_font_size_max: data.name_font_size_max,
        name_font_family: data.name_font_family,
        loc_vertex_size_min: data.loc_vertex_size_min,
        loc_vertex_size: data.loc_vertex_size,
        loc_vertex_size_max: data.loc_vertex_size_max,
        loc_vertex_stroke: data.loc_vertex_stroke,
        location_color: data.location_color,
        location_stroke_color: data.location_stroke_color,
        loc_vertex_color: data.loc_vertex_color,
        loc_vertex_stroke_color: data.loc_vertex_stroke_color,
        campaign_id: data.campaign_id,
        interface_scale_min: data.interface_scale_min,
        interface_scale_max: data.interface_scale_max,
        map_scale_start_x: data.map_scale_start_x,
        map_scale_start_y: data.map_scale_start_y,
        map_scale_end_x: data.map_scale_end_x,
        map_scale_end_y: data.map_scale_end_y,
        map_scale_measurement: data.map_scale_measurement,
        map_scale_measurement_name: data.map_scale_measurement_name,
        map_scale_start_x: data.map_scale_start_x,
        map_scale_start_y: data.map_scale_start_y,
        map_scale_end_x: data.map_scale_end_x,
        map_scale_end_y: data.map_scale_end_y,
        map_scale_measurement: data.map_scale_measurement,
        map_scale_measurement_name: data.map_scale_measurement_name,
        interface_scale_min: Number(data.interface_scale_min),
        interface_scale_max: data.interface_scale_max,
    })

    let vertex = await Vertex.findOne({
        where: {id: response.vertex_id}
    })

    return res.json({ response, vertex })
})

router.post('/new', async (req, res) => {
    const data = req.body;
    let newVertex;

    if (data.vertex_id === null) {
        let createVertex = await Vertex.create({ coord_x: data.coord_x, coord_y: data.coord_y })
        newVertex = await createVertex
    } else {
        const getVertex = await Vertex.findOne({ where: { id: data.vertex_id } })
        newVertex = await getVertex
    }

    const newLoc = await Location.create({ name: data.name,
        location_description: data.location_description,
        coord_x: data.coord_x,
        coord_y: data.coord_y,
        vertex_id: newVertex.id,
        show_on_map: true,
        discovered: true,
        image_url: null,
        thumbnail_url: null,
        min_visible_scale: 25,
        max_visible_scale: 500,
        name_offset_x: 0,
        name_offset_y: 0,
        name_font_size_min: 1,
        name_font_size: 30,
        name_font_size_max: 500,
        name_font_family: "Verdana",
        loc_vertex_size_min: 8,
        loc_vertex_size_max: 30,
        loc_vertex_stroke: 4,
        location_color: "black",
        location_stroke_color: "white",
        loc_vertex_color: "black",
        loc_vertex_stroke_color: "white",
        campaign_id: 1, //todo - should be a variable
        interface_scale_min: 25,
        interface_scale_max: 100,
        map_scale_start_x: 0,
        map_scale_start_y: 0,
        map_scale_end_x: 0,
        map_scale_end_y: 0,
        map_scale_measurement: null,
        map_scale_measurement_name: "Miles",



    })

    await Joined_Location.create({
        parent_location_id: data.parent_location_id,
        child_location_id: newLoc.id
    })

    return res.json({ newLoc, newVertex })
});




module.exports = router;
