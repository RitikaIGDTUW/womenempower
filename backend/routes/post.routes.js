
import express from "express";
import { createPost, getPosts, addComment } from "../controllers/post.controller.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.post("/create", authenticateUser, createPost);
router.get("/", getPosts);
router.post("/comment", authenticateUser, addComment);

export default router;
