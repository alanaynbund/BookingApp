import express from "express"
import Hotel from "../models/Hotel.js"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel)

router.delete("/:id", verifyAdmin, deleteHotel)

router.get("/find/:id", getHotel)

router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router