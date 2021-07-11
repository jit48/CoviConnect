import express from "express";
import {experience, getExperience} from "../controllers/User.js"
const router = express.Router();

router.get("/experience" ,  getExperience)
router.post("/experience", experience);
export default router;