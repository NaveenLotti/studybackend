import express from "express";
import { createRoom, deleteRoomById, getAllRooms, getRoomById, searchRooms } from "../Controllers/RoomController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", getRoomById);
router.delete("/:id", deleteRoomById);
router.post("/create", authMiddleware, createRoom);
router.get("/", getAllRooms);
router.get("/search", searchRooms);



export default router;
