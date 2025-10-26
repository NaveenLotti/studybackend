import Room from "../models/Room.js";
import generateRoomCode from "../utils/generateRoomCode.js";

export const createRoom = async (req, res) => {
  const { roomName, topics, maxUsers, isPrivate } = req.body;

  try {
    const roomData = {
      roomName,
      topics,
      maxUsers,
      isPrivate,
      createdBy: req.user._id, 
    };

    if (isPrivate) {
      roomData.roomCode = generateRoomCode();
    }

    const room = await Room.create(roomData);
    res.status(201).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while creating room" });
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching rooms" });
  }
};


export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching room" });
  }
}


// DELETE Room
export const deleteRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while deleting room" });
  }
};


export const searchRooms = async (req, res) => {
  const { topic } = req.query;

  try {
    const rooms = await Room.find({
      topics: { $regex: topic, $options: "i" },
      isPrivate: false,
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Server error while searching rooms" });
  }
};
