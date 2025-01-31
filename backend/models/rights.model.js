import mongoose from "mongoose";

const RightSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Right = mongoose.model("Right", RightSchema);
export default Right;