import express from "express";
const app = express();

import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import geminiRoutes from "./routes/gemini.routes.js";
import rightsRoutes from "./routes/rights.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/gemini", geminiRoutes);
app.use("/api/rights",rightsRoutes);




// Start the server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
