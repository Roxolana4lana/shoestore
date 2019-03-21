var mongoose = require('mongoose')
const Schema = mongoose.Schema;

//schema

var shoesSchema = new Schema({
 
    type:{
        type:String,
        required:true
    },
    color:{
        type: String,
        required: true
    },
    for:{
        type: String,
        required: true 
    },
    url:{
        type: String,
        required: true 
    },
    size:{
        type:Array,
        required:true
    },
    qty:{
        type: String,
        required: true
    }
})
const Shoe = mongoose.model('shoes',shoesSchema)

//get shoes
module.exports = Shoe