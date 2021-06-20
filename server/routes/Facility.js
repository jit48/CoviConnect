import express from 'express';
import {
    postBed,
    postAmbulance,
    postBloodBank,
    postDiagnostic,
    postMeals,
    postOxygen,
    postPharmacy,
    getAllPosts,
    editPost,
    deletePost,
} from '../controllers/Facility.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// create posts
router.post('/bed', auth, postBed);
router.post('/ambulance', auth, postAmbulance);
router.post('/bloodbank', auth, postBloodBank);
router.post('/diagnosticcenter', auth, postDiagnostic);
router.post('/meals', auth, postMeals);
router.post('/oxygen', auth, postOxygen);
router.post('/pharmacies', auth, postPharmacy);

// get, edit, delete posts
router.get('/', getAllPosts);
router.put('/:postId', auth, editPost);
router.delete('/:postId', auth, deletePost);

export default router;
