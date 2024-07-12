const {planeCurdRepo} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

const planeCurdRepoObj = new planeCurdRepo();


async function createPlane(data){
    try {
        return await planeCurdRepoObj.Create(data);
    } catch (error) {
        if(error.name = 'SequelizeValidationError'){
            let explainatios = [];
            error.errors.forEach((err)=>{
                explainatios.push(err.message);
            });
            throw new AppError(explainatios,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Could not Create Object!",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createPlane
}