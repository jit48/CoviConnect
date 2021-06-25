import { Router } from 'express';

import auth from '../middleware/auth.js';
import { login, register, validate, adoptions } from '../controllers/Ngo.js';
import {postNgoRecruit} from '../controllers/NgoRecruit.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/adoptions', auth, adoptions);
router.post('/ngo/ngoRecruit',postNgoRecruit);

export default router;
