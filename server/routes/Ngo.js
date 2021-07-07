<<<<<<< HEAD
import { Router } from 'express';
import { postFundRaise, fetchData } from "../controllers/FundRaise.js";
import auth from '../middleware/auth.js';
import { login, register, validate, adoptions } from '../controllers/Ngo.js';
=======
import { Router } from 'express'

import auth from '../middleware/auth.js'
import {
  login,
  register,
  validate,
  adoptions,
  adoptionFormRequest,
  getAllFunds,
  deleteFund,
  delAdoption,
} from '../controllers/Ngo.js'
import { postNgoRecruit } from '../controllers/NgoRecruit.js'
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c

const router = Router()

<<<<<<< HEAD
router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/adoptions', auth, adoptions);
router.post('/fundraise',auth, postFundRaise);
router.get('/getFundraise', fetchData);

export default router;
=======
router.post('/login', login)
router.post('/register', register)
router.get('/', auth, validate)
router.get('/adoptions', auth, adoptions)
router.post('/ngo/ngoRecruit', postNgoRecruit)
router.get('/adoptionFormRequest', auth, adoptionFormRequest)
router.get('/getAllFunds/:id', getAllFunds)
router.delete('/deleteFund/:id', deleteFund)
router.delete('/deleteAdoptionRequest/:id/:ngoId',delAdoption)
export default router
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c
