import { Router } from 'express';

import auth from '../middleware/auth.js';
import { login, register, validate, posts ,allVolunteer, volunteerLeads} from '../controllers/Volunteer.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/posts', auth, posts);
router.get('/allVolunteer',allVolunteer);
router.get('/allVolunteer/:id',volunteerLeads);
export default router;
