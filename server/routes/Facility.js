import express from 'express';
import { postBed, postAmbulance, postBloodBank, postDiagnostic, postMeals, postOxygen, postPharmacy } from '../controllers/Facility.js';
import { downVotes, getFacility, updateVotes} from '../controllers/GetAllFacilities.js';
import { userUpvotes } from "../controllers/User.js";


const router = express.Router();

router.get('/facility/:type',getFacility)
router.patch('/facility/updateVote/:id', updateVotes)
router.patch('/facility/downVote/:id', downVotes)
router.post('/facility/beds', postBed);
router.post('/facility/ambulance', postAmbulance);
router.post('/facility/bloodbank', postBloodBank);
router.post('/facility/diagnostic', postDiagnostic);
router.post('/facility/meals', postMeals);
router.post('/facility/oxygen', postOxygen);
router.post('/facility/pharmacy', postPharmacy);
router.post("/user/upVotedPosts", userUpvotes);




export default router;