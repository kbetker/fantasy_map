// backend/routes/api/index.js
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campaignsRouter = require('./campaigns.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/campaigns', campaignsRouter);


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });






module.exports = router;
