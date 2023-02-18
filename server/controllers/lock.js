import locks from "../models/lock.js";
export const addLock=async (req,res)=>{
    // console.log("insidse the addlock");
    try{
        const {lockId,password}=req.body;
        // console.log(req.body);
        const lock=new locks({
            lockId,
            password,
            time:Date.now()
        });
        // console.log(lock);
        const result=await lock.save();
        // console.log(result);
        res.status(200).json(result);
    }catch(e){
        // console.log(e.message);
        res.status(501).json(e);
    }
}
export const updateLock=async (req,res)=>{
    // console.log("inside the updateLock");
    try{
        
        const {id,newPassword}=req.body;
        const lock=await locks.findById(id);
        if(!lock){
            return res.status(400).json({message:"lock does not exist with this id"});
        }
        lock.password=newPassword;
        lock.is_Available=true;
        lock.time=Date.now();
        const result=await lock.save();
        res.status(200).json(result);
    }catch(e){
        res.status(500).json(e);
    }
}
// export const deactivateLock= async (req,res)=>{
  
//     try{
        
//         const {id}=req.body;
//         // console.log("deactivate");
//         // console.log(id)
//         // console.log("upadtenlock");
//         const lock=await locks.findById(id);
//         if(!lock)return res.status(400).json({message:"lock does not exist"});
       
//             lock.is_Available=false;
//             lock.time=Date.now()
//         const result=await lock.save();
//         res.json(result);
//     }catch(e){
//         res.status(500).json({message:e.message});
//     }
// }
export const getLock=async (req,res)=>{
    // console.log("clicked");
    try{
        const allLock=await locks.find();
        res.json(allLock);
    }catch(e){
        res.status(500).json(e);
    }
}