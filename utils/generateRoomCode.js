import { customAlphabet } from "nanoid";

const generateRoomCode = () => {
  const alphabet = "0123456789";
  const nanoid = customAlphabet(alphabet, 6);
  return nanoid();
};

export default generateRoomCode;
