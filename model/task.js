const mongoose = require('mongoose')


const taskschema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true , 'you must put your name'],
        maxlength:[20 , 'character mmust not be more than 20 character']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('TASK' , taskschema)