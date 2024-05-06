const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    id:{
        type:Number,
        required:[true,'El id del producto es necesario']
    },
    nombre:{
        type:String,
        required:[true,'El nombre del producto es necesario']
    },
    categoria:{
        type:String,
        required:true,
        default:'General'
    },
    precio:{
        type:Number,
        required:true,
        default:0
    },
    color:{
        type:String,
        required:[true,'El color del producto es necesario']
    },
    tallas:{
        type:Array,
        required:[true,'Las tallas del producto son necesarias']
    },
    descripcion:{
        type:String,
        required:[true,'La descripcion del producto es necesaria']
    },
    imagen:{
        type:String,
        required:false
    },
    disponible:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true});

const Product = mongoose.model('Product',ProductSchema)
module.exports = Product;