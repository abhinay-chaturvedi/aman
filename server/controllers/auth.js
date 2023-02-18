import users from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await users.findOne({email:email});
        if(!user){
            res.status(401).json({message:"User Does Not Exist"});
        }else{
            const comp=await bcrypt.compare(password,user.password);
            if(!comp){
                res.status(401).json({message:"invalid credentials"});
            }else{
                const token=jwt.sign({id:user._id},process.env.SECRET_KEY);
                // const newuser=user;
                delete user.password;
                res.status(200).json({token,user});

            }
        }
    }catch(e){
        res.status(501).json({message:e.message});
    }

}
export const register=async (req,res)=>{
    try{
        const {firstName,
            lastName,
            email,
            password,
       }=req.body;
    //    console.log(req.body);
       const salt=await bcrypt.genSalt();
       const hashedPassword=await bcrypt.hash(password,salt);
       const user= new users({
        firstName,
        lastName,
        email,
        password:hashedPassword
       });
       const result=await user.save();
       res.json(result);
    }catch(e){
        res.json(e);
    }

}
