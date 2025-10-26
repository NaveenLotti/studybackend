import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./DataBase.js";
import authRoutes from "./Routes/authRoutes.js";
import roomRoutes from "./Routes/roomRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "https://studyroom-chi.vercel.app/" }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
