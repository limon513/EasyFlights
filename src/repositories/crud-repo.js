const {Logger} = require('../config');

class CRUD{
    constructor(model) {
        this.model = model;
    }
    
    async Create(data){
        return await this.model.create(data);
    }

    async Read(){
        try {
            return await this.model.findall();
        } catch (error) {
            Logger.log({
                level:'error',
                message:'Error while reading.',
                errors:{
                 success: false,
                 error:error
                }
             });
             throw error;
        }
    }

    async Update(id,data){  //data is object that has to be updataed
        try {
            return await this.model.update(data,{
                where:{
                    id:id,
                }
            });
        } catch (error) {
            Logger.log({
                level:'error',
                message:'Error while updating.',
                errors:{
                 success: false,
                 error:error
                }
             });
             throw error;
        }
    }

    async Delete(id){
        try {
            return await this.model.destroy({
                where:{
                    id:id,
                }
            });
        } catch (error) {
            Logger.log({
                level:'error',
                message:'Error while deleting.',
                errors:{
                 success: false,
                 error:error
                }
             });
             throw error;
        }
    }
}

module.exports = CRUD;