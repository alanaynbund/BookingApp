import express from "express"
import User from "../models/User.js"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("logged in user")
// })

// router.get("/checkuser/:id", verifyUser , (req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkadmin/:id", verifyAdmin , (req,res,next)=>{
//     res.send("hello admin you are logged in")
// })

router.put("/:id", verifyUser, updateUser)

router.delete("/:id", verifyUser, deleteUser)

router.get("/:id", verifyUser, getUser)

router.get("/", verifyAdmin, getAllUsers)

export default router