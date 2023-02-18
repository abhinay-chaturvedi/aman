// import { json } from "body-parser";
import jwt from "jsonwebtoken";


 const verifyToken=async (req,res,next)=>{
    // console.log("verifytoken");
    try{
        const token=req.header('Authorization').split(' ')[1];
        // console.log(token);
        if(!token){
            return res.status(401).json({message:"Access Denied"});
        }
    const verified=jwt.verify(token,process.env.SECRET_KEY);
    req.user=verified;
    next();
    }catch(e){
        res.status(501).json(e);
    }
}
export default verifyToken;