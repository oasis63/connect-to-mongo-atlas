const mongoose = require('mongoose')

const userModalSchema = new mongoose.Schema({
    id:{
        type:String,
        required: false,
        trim:true
    },
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    phone:{
        type:String,
        required: false,
        trim:true
    },
    address:{
        type:Object,
        required: false,
        trim:true
    }
});

const userModal = mongoose.model('User', userModalSchema);   // User  ==> Users table in  the db   
module.exports = userModal
