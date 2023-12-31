//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: [true,"Please enter a name"]
        },
        lastname:{
            type: String,
            required: [true,"Please enter a name"]
        },
        age:{
            type: Number,
            required: true,
        },
        picture:{
            type: String,
            required: false,
        },
        weight:{
            type: Number,
            required: true,
        },
        trainerIds:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trainer'
        }]        

    },
    { timestamps:true}
   
)

const User = mongoose.model('User', userSchema);
module.exports = User;