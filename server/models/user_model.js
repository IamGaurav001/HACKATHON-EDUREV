import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password:    { type: String, default: "" }, 
  reg_no: { type: String, required: true, unique: true },
  secQuestion: { type: String, required: true },
  secAnswer: { type: String, required: true },
});

export const User = mongoose.model("User", UserSchema);