import mongoose from "mongoose";

const historSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    id:{
        type:String,
        required:true,
    },
    lockId:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20,

    },
    password:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20,
    },

},
{
    timestamps:true
})

const History=mongoose.model('history',historSchema);
export default History;