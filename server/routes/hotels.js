import express from "express"
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", createHotel);

router.put("/:id", updateHotel)

router.delete("/:id", deleteHotel)

router.get("/:id", getHotel)

router.get("/", getAllHotels)

export default router