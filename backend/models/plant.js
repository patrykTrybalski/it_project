const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: String,
    owner: String,
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = {
    Plant
};