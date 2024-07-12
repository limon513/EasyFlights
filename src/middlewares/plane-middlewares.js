const {StatusCodes} = require('http-status-codes');
const {errorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.planeName){
        errorResponse.message = "Something Went wrong!";
        errorResponse.error = new AppError(['Plane name Can not be null'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest:validateCreateRequest,
}