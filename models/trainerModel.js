const mongoose = require('mongoose')

const trainerSchema = mongoose.Schema(
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
        Specialization:{
            type: String,
            required: true,
        }

    },
    { timestamps:true}
   
)

const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = Trainer;