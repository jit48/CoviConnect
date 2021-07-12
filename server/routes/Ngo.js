import { Router } from 'express';
import { postFundRaise, fetchData } from "../controllers/FundRaise.js";
import auth from '../middleware/auth.js';
import {allNgo, login, register, validate, adoptions ,ngoProfile} from '../controllers/Ngo.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/adoptions', auth, adoptions);
router.post('/fundraise',auth, postFundRaise);
router.get('/getFundraise', fetchData);
router.get('/ngoProfile/:id',ngoProfile);
router.get('/allNgo',allNgo);

export default router;

