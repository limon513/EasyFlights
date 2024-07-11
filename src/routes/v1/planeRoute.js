const {planeController} = require('../../controllers');
const express = require('express');
const router = express.Router();

router.use('/',planeController);

module.exports = router;