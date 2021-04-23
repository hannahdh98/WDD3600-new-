const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema ({//this will store the data in a new schema
//products
    products: [
        {
            product: { type: Object, required: true},
            quantity: {type: Number, required: true}
        }
    ],
    user: { 
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId, 
            required: true,
            ref: 'User' 
        }
    }
});
//this will export the order
module.exports = mongoose.model('Order', orderSchema);