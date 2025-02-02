import express from "express";
const app = express();

import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import geminiRoutes from "./routes/gemini.routes.js";
import rightsRoutes from "./routes/rights.routes.js"
import successStoryRoutes from "./routes/story.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/gemini", geminiRoutes);
app.use("/api/rights",rightsRoutes);
app.use("/api/success-stories", successStoryRoutes);


// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
// })



// Start the server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
