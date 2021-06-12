import express from 'express';
import { postBed } from '../controllers/Facility.js';

const router = express.Router();

router.post('/facility/beds', postBed);


export default router;