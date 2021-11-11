const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Campaign, Joined_Location, Joined_Vertex, Location, Neighbor, Road, Vertex } = require('../../db/models');
const sequelize = require('sequelize');
// const Op = sequelize.Op;

const router = express.Router();

const excludeTags = (key, value) => {
 if(key === "createdAt" || key === "updatedAt" || key === "Joined_Locations" || key === "Neighbors" || key === "Joined_Vertex"){
   return undefined
 } else {
   return value
 }
}


router.get('/', async (req, res) => {
  // const tag = req.params.tag

  const mapData = await Location.findAll({
    where: { id: 1 },
   include: [
          { model: Location, as: "child_locations" },
          {
            model: Road, include:
              { model: Vertex, as: "road_vertices", include: {model: Vertex, as: "neighbors"}}
          }
        ]
  })

  res.type('json').send(JSON.stringify(mapData, excludeTags, 3) + '\n' );


});



module.exports = router;



// router.get('/', async (req, res) => {
//   // const tag = req.params.tag

//   const mapData = await Campaign.findAll({
//     where: { id: 1 },
//     include: [
//       {
//         model: Location, include: [
//           { model: Location, as: "child_locations" },
//           {
//             model: Road, include:
//               { model: Vertex, as: "road_vertices", include: {model: Vertex, as: "next"}}
//           }
//         ]
//       }
//     ]
//   })

//   res.type('json').send(JSON.stringify(mapData, excludeTags, 3) + '\n' );


// });


// router.get('/', async (req, res) => {
//   // const tag = req.params.tag

//   const mapData = await Campaign.findAll({
//     where: { id: 1 },
//     include: [
//       {
//         model: Location, include: [
//           { model: Location, as: "child_locations" },
//           {
//             model: Road, include:
//               { model: Vertex, as: "road_vertices", include: {model: Vertex, as: "next"}}
//           }
//         ]
//       }
//     ]
//   })

//   res.type('json').send(JSON.stringify(mapData, excludeTags, 3) + '\n' );


// });
