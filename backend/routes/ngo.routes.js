import express from "express";
import { ngoController } from "../controllers/ngo.controller.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/", authenticateUser, ngoController); // Fetch NGOs

export default router;
