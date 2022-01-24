const Model = require('./supplierModelTable');

module.exports = {
    list() {
        return Model.findAll();
    },
    insert(supplier) {
        return Model.create(supplier);
    }
}