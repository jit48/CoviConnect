import express from 'express';
import { postBed, postAmbulance, postBloodBank, postDiagnostic, postMeals, postOxygen, postPharmacy, getDonateData, razorpay, adoptionForm} from '../controllers/Facility.js';
import { downVotes, getFacility, updateVotes} from '../controllers/GetAllFacilities.js';
import { userUpvotes } from "../controllers/User.js";
import auth from '../middleware/auth.js';
import { getAllPosts, editPost, deletePost } from '../controllers/Facility.js'

const router = express.Router()


router.get('/:type',getFacility)
router.patch('/updateVote/:id', updateVotes)
router.patch('/downVote/:id', downVotes)
router.post('/bed', auth, postBed);
router.post('/ambulance', auth, postAmbulance);
router.post('/bloodbank', auth, postBloodBank);
router.post('/diagnosticcenter', auth, postDiagnostic);
router.post('/meals', auth, postMeals);
router.post('/oxygen', auth, postOxygen);
router.post('/pharmacies', auth, postPharmacy);
router.post("/user/upVotedPosts", userUpvotes);
router.get("/fund/donate/:id", getDonateData);
router.post("/donation/razorpay/:id", razorpay);
router.post('/adoption', adoptionForm)


// get, edit, delete posts
router.get('/', getAllPosts)
router.put('/:postId', auth, editPost)
router.delete('/:postId', auth, deletePost)

export default router
