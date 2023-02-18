
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:10,
    },
    lastName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:10,
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    is_Admin:{
        type:Boolean,
        default:false,
    },
    coins:{
        type:Number,
        default:0
    }
    
})
const users=mongoose.model('user',userSchema);
export default users;