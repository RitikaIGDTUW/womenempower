import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city:{type: String, required: true},
    images: [{ type: String }], // Array of image URLs
    link: { type: String, required: true }, // Link to the NGO page
  },
  { timestamps: true }
);

const NGO = mongoose.model("NGO", ngoSchema);
export default NGO;
