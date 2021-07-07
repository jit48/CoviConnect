import { Router } from 'express';
import { postFundRaise, fetchData } from '../controllers/FundRaise.js';
import auth from '../middleware/auth.js';
import { login, register, validate, adoptions, getRecruitments, postApplication, getApplication } from '../controllers/Ngo.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/adoptions', auth, adoptions);

router.get('/recruitments', auth, getRecruitments);
router.post('/application', auth, postApplication);
router.get('/application', auth, getApplication);

router.post('/fundraise', auth, postFundRaise);
router.get('/getFundraise', fetchData);

export default router;
