const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,unique:true},
    mobile:{type:String},
    password:{type:String}
}, {timestamps: true , versionKey:false})

const UserModel = mongoose.model('users',DataSchema);
module.exports = UserModel;