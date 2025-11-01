import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user_model.js"; // adjust path as needed

const userlogin_Router = express.Router();

userlogin_Router.post("/api/userlogin", async (req, res) => {
  try {
    const { reg_no, password } = req.body;

    // 1️⃣ Check if user exists
    const user = await User.findOne({ reg_no });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2️⃣ Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 3️⃣ If password matches, send success response
    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        reg_no: user.reg_no,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default userlogin_Router;
