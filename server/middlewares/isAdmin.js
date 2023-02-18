
import users from "../models/user.js"
import jwt from "jsonwebtoken";
const isAdmin=async (req,res,next)=>{
    // console.log("inside the isAdmin");
    try{
        // console.log("run");
        const token=req.header("Authorization").split(' ')[1];
        
        if(!token){
            return res.json({message:"Access Denied"});
        }
        // console.log(process.env.SECRET_KEY);
    const verified=jwt.verify(token,process.env.SECRET_KEY);
    // req.user=verified;
    // console.log(token);
    // console.log(verified);
    const user=await users.findById(verified.id);
    if(!user){
        return res.json({message:"invalid token user"});
    }else{
        if(!user.is_Admin){
            return res.json({message:"Access Denied"});
        }else{
           
            req.user=verified
            // console.log(req.user);
            next();
        }
    }
    
    }catch(e){
        res.json({message:"some thing wrong happen while checking user is admin"});
    }
}
export default isAdmin;