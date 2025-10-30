import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user_model.js";

const forgotpass_Router = express.Router();
forgotpass_Router.post("/api/forgot-password", async (req, res) => {
  try {
    const { reg_no } = req.body;
    const user = await User.findOne({ reg_no });

    if (!user) {
      return res.status(404).json({ message: `No user found with the registration number ${reg_no}` });
    }

    // ✅ Return only the security question (never the answer)
    res.status(200).json({
      message: "User found",
      securityQuestion: user.securityQuestion,
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


forgotpass_Router.post("/api/verify-security-answer", async (req, res) => {
  try {
    const { reg_no, answer } = req.body;

    const user = await User.findOne({ reg_no });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare answers (case-insensitive)
    if (user.securityAnswer.trim().toLowerCase() !== answer.trim().toLowerCase()) {
      return res.status(401).json({ message: "Incorrect security answer" });
    }

    // ✅ If correct, allow frontend to move to "new password" page
    res.status(200).json({ message: "Answer verified. Proceed to reset password." });
  } catch (error) {
    console.error("Security answer verification error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



// STEP 3: Reset new password
forgotpass_Router.post("/api/reset-password", async (req, res) => {
  try {
    const { reg_no, newPassword } = req.body;

    const user = await User.findOne({ reg_no });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successful. Please login again." });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


export default forgotpass_Router;
