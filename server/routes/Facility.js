import express from 'express';
import { postBed, postAmbulance, postBloodBank, postDiagnostic, postMeals, postOxygen, postPharmacy } from '../controllers/Facility.js';

const router = express.Router();

router.post('/facility/beds', postBed);
router.post('/facility/ambulance', postAmbulance);
router.post('/facility/bloodbank', postBloodBank);
router.post('/facility/diagnostic', postDiagnostic);
router.post('/facility/meals', postMeals);
router.post('/facility/oxygen', postOxygen);
router.post('/facility/pharmacy', postPharmacy);

export default router;