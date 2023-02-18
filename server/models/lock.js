
import mongoose from "mongoose";
const lockSchema=new mongoose.Schema({
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
    is_Available:{
        type:Boolean,
        default:true,
    },
    time:{
        type:Number
    }
})
const locks=mongoose.model('lock',lockSchema);
export default locks;