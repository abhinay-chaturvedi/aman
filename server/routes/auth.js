
import express from "express";
const router=express.Router();
import isAdmin from "../middlewares/isAdmin.js";
import { login, register } from "../controllers/auth.js";
// Login Routes
router.post("/login",login);


// Register Routes for user
router.post("/register",register);
export default router;