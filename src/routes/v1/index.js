const express = require('express');
const router = express.Router();
const planeRouter = require('./planeRoute');

router.use('/createPlane',planeRouter);

module.exports = router;