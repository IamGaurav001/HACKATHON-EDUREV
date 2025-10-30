import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user_model.js"; 

const userregister_Router = express.Router();

userregister_Router.post("/api/userregister", async (req, res) => {
  try {
    const { name, password, reg_no,secQuestion,secAnswer } = req.body;

    // 1️⃣ Check if user already exists (by reg_no)
    const existingUser = await User.findOne({ reg_no });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists Please Login" });
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 3️⃣ Create new user
    const newUser = new User({
      name,
      password: hashedPassword,
      reg_no,
      secQuestion,
      secAnswer
    });

    // 4️⃣ Save user
    await newUser.save();

    // 5️⃣ Send success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default userregister_Router;
