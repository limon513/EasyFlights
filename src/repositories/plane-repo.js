const CRUD = require('./crud-repo');
const {Planes} = require('../models');

class planeCrud extends CRUD{
    constructor(params) {
        super(Planes);
    }
}

module.exports = planeCrud;