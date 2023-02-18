
import express from "express";
import { addCoins, getAllHistory, getUserHistory, subCoinsAndDeactivaeLock, } from "../controllers/user.js";
import isAdmin from "../middlewares/isAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";
const router=express.Router();


// this route is for subtracting coins from the coins
router.put("/sell",verifyToken,subCoinsAndDeactivaeLock);

// this route is for adding coins in user account by admin
router.post('/add',isAdmin,addCoins)
// geting history of all transction
router.get("/getall",isAdmin,getAllHistory);
router.get('/history',verifyToken,getUserHistory)

export default router;