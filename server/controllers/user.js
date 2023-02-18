import e from "express";
import History from "../models/history.js";
import locks from "../models/lock.js";
import users from "../models/user.js";


export const subCoinsAndDeactivaeLock=async (req,res)=>{
   
    try{
        // console.log(" insidse sell logic");
        // const id=req.body.id;
        const {user_id,lock_id}=req.body;
        
        const user=await users.findById(user_id);
        if(!user){
            return res.status(400).json({message:"user account doest not exist"});
        }
        const lock=await locks.findById(lock_id);
        if(!lock)return res.status(400).json({message:"lock does not exist"});
        if(user.coins<20)res.status(400).json({message:"Do not have enough coins to purchase"});
        if(lock.is_Available==false)res.status(400).json({message:"Lock not available"});
        user.coins-=20;
        lock.is_Available=false;
        lock.time=Date.now();
        const historyInstance=new History({
            email:user.email,
            id:user._id,
            lockId:lock.lockId,
            password:lock.password
        })
        const resultUser=await user.save();
        const history=await historyInstance.save();
        const resultLock=await lock.save();
        // console.log(result);
        res.status(200).json({user:resultUser,lock:resultLock});
        
    }catch(e){
        res.status(501).json({message:e.message});
    }
}
export const addCoins=async (req,res)=>{
    // console.log("inside the add coins");
    try{
        const {email,amount}=req.body;
        const newAmount=Number(amount);
        const user =await users.findOne({email});
        if(!user)res.status(401).json({message:"user does not exist"});
        user.coins+=newAmount;
        const result= await user.save();
        // console.log(result);
        res.status(200).json(result);

    }catch(e){
        res.status(501).json(e);
    }
}
export const getAllHistory=async (req,res)=>{
try{
const history =await History.find().sort({createdAt:-1});
res.status(200).json(history);
}catch(e){
    res.status(501).json(e);
}
}
export const getUserHistory=async (req,res)=>{
    try{
        const id=req.user.id;
        // console.log(req.user)
        const history=await History.find({id:id}).sort({createdAt:-1});
        // console.log(history);
        res.status(200).json(history);
    }catch(e){
        // console.log(e.message);
        res.status(501).json({message:e.message});

    }
}