import mongoose from "mongoose";

const AdvocateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    region_of_practice: { type: String, required: true },
    court_type: { type: String, required: true },
    contact: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    experience: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Advocate ||
  mongoose.model("Advocate", AdvocateSchema);
