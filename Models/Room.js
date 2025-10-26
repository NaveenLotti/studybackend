import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  topics: { type: [String], required: true },
  maxUsers: { type: Number, required: true },
  isPrivate: { type: Boolean, default: false },
  roomCode: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);
export default Room;
