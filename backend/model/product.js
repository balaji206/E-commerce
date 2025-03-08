const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    tags:{type:[string],default:[]},
    price:{type:String,required:true},
    stock:{type:String,required:true},
    email:{type:String,required:true, match:[/.+@.+\..+/]},
    images:{type:[String],required:[true]},
    createdAt:{
        type:Date,
        default:Date.now(),
    },cart:[
        {
            productid:{
                type:string,
                required:true,
                unique:true,
            },
            quantity:{
                type:Number,
                required:true,
                min:0,
            },
        },
    ],
},
{
    timestamps:true,
}
)
module.exports = mongoose.model("Product",productSchema);
