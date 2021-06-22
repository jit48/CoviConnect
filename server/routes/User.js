import express from "express";
import { userUpvotes } from "../controllers/User.js";

const router = express.Router();

router.post("/user/upVotedPosts", userUpvotes);


export default router;