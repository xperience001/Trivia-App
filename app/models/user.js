const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstname: {
        type:String,
        maxlength:30
    },
    lastname:{
        type:String,
        maxlength:30
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)