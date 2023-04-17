import express from "express"
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel)

router.delete("/:id", verifyAdmin, deleteHotel)

router.get("/:id", getHotel)

router.get("/", getAllHotels)

export default router