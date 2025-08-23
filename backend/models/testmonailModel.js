const mongoose = require('mongoose');

const testmonialSchema = new mongoose.Schema({
    type:{type:String,required:true},
    item:{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true},
    description:{type:String},
    location:{type:String},
    image:{type:String},
},{timestamps:true}
)

const Testmonial = mongoose.model('Testmonial', testmonialSchema);

module.exports = Testmonial;