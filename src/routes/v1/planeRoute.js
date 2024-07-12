const {planeController} = require('../../controllers');
const {planeMiddlewares} = require('../../middlewares')
const express = require('express');
const router = express.Router();

router.use('/',planeMiddlewares.validateCreateRequest,planeController);

module.exports = router;