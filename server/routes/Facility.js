import express from 'express';
import { postBed } from '../controllers/Facility.js';
import { downVotes, getFacility, updateVotes} from '../controllers/GetAllFacilities.js';
import { userUpvotes } from "../controllers/User.js";


const router = express.Router();

router.get('/facility/:type',getFacility)
router.patch('/facility/updateVote/:id', updateVotes)
router.patch('/facility/downVote/:id', downVotes)
router.post('/facility/beds', postBed);
router.post("/user/upVotedPosts", userUpvotes);



export default router;