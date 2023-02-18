
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import dotenv from "dotenv"

// import locks from "./models/lock.js";
import lockRoute from "./routes/lock.js";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import cors from "cors";
const app=express();
dotenv.config();
// Setting up Middlewares
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("yes you have created server for aman project");
})

app.use("/api/lock",lockRoute);
app.use("/api/",authRoute);
app.use("/api/user",userRoute);


console.log(__dirname)
console.log(path.resolve(__dirname,'frontend','build',         
'index.html' ))


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT || 3001,()=>{
        console.log("server is running on port 3000");
    })
}).catch((e)=>{
    console.log(e);
})
