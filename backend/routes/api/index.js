// backend/routes/api/index.js
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const map_dataRouter = require('./map_data.js');
const vertexRouter = require('./vertex.js');
const locationRouter = require('./location.js');
const joinedLocationRouter = require('./joined_location.js');





router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/map_data', map_dataRouter);
router.use('/vertex', vertexRouter);
router.use('/location', locationRouter);
router.use('/joined_location', joinedLocationRouter);





router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });






module.exports = router;
