import express from 'express';
import { postBed, postAmbulance } from '../controllers/Facility.js';

const router = express.Router();

router.post('/facility/beds', postBed);
router.post('/facility/ambulance', postAmbulance);

export default router;