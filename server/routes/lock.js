import express from "express";
import {addLock, getLock, updateLock } from "../controllers/lock.js";
import isAdmin from "../middlewares/isAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

const router=express.Router();


// adding new lock cracker detail
router.post('/add',isAdmin,addLock)
// updating the password of lock cracker
router.put('/update',isAdmin,updateLock)
// activating the lock  cracking id after sometime of use
// router.put('/deactivate',verifyToken,deactivateLock)

// getting all lock that are available in the database
router.get("/",verifyToken,getLock);
export default router;