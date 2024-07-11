const {planeCurdRepo} = require('../repositories');

const planeCurdRepoObj = new planeCurdRepo();

async function createPlane(data){
    try {
        return await planeCurdRepoObj.Create(data);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createPlane
}