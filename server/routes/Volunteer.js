import { Router } from 'express';

import auth from '../middleware/auth.js';
import { login, register, validate, posts } from '../controllers/Volunteer.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/posts', auth, posts);

export default router;
