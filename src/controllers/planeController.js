const {planeCrudService} = require('../services');
const statuscodes = require('http-status-codes');

const createPlane = async function controller(req,res){
    try {
        const plane = await planeCrudService.createPlane({
          planeName : req.body.planeName,
          capacity: req.body.capacity  
        });
        return res.status(statuscodes.CREATED).json({
            success:true,
            message:'new Plane Created',
            data:plane,
            error:{}
        });
    } catch (error) {
        res.status(statuscodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            error:{}
        })
    }
}

module.exports = createPlane;