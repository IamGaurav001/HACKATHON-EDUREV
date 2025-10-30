import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dbConnection.js"
import cookieParser from "cookie-parser";
import userregister_Router from "./routers/userregister_route..js";
import userlogin_Router from "./routers/userlogin_route.js";
import forgotpassword_Router from "./routers/forgotpass_route.js";

dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();


app.use(cors({
    origin: /http:\/\/localhost(:\d+)?/,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use( userregister_Router);
app.use( userlogin_Router);
app.use( forgotpassword_Router);

app.get("/", async (req, res) => {
  try {
    res.json({ message: "API is running..." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));