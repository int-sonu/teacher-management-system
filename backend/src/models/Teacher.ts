import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  email: { type: String, unique: true },
});

export default mongoose.model("Teacher", teacherSchema);