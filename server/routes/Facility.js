import express from 'express';
import { postBed, postAmbulance, postBloodBank, postDiagnostic, postMeals, postOxygen, postPharmacy } from '../controllers/Facility.js';
import { postFundRaise, fetchData } from "../controllers/FundRaise.js";
const router = express.Router();

router.post('/facility/beds', postBed);
router.post('/facility/ambulance', postAmbulance);
router.post('/facility/bloodbank', postBloodBank);
router.post('/facility/diagnostic', postDiagnostic);
router.post('/facility/meals', postMeals);
router.post('/facility/oxygen', postOxygen);
router.post('/facility/pharmacy', postPharmacy);
router.post('/fundraise', postFundRaise);
router.get('/fundraise', fetchData)

export default router;