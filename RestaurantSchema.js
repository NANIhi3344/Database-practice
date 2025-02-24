const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    itemsArr: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item' 
    }]
});

const Item = mongoose.model('Item', itemSchema);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Item, Restaurant };


