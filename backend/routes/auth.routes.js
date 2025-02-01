import express from "express"
import { authenticateUser } from "../middleware/authenticateUserjs";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router=express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout",authenticateUser, logout)

export default router