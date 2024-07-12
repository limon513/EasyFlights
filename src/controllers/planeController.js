const {planeCrudService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {errorResponse,successResponse} = require('../utils/common')

const createPlane = async function controller(req,res){
    try {
        const plane = await planeCrudService.createPlane({
          planeName : req.body.planeName,
          capacity: req.body.capacity
        });
        successResponse.data = plane;
        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = createPlane;