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
import { postFundRaise, fetchData } from "../controllers/FundRaise.js";
import { postNgoRecruit } from '../controllers/NgoRecruit.js'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/', auth, validate)
router.get('/adoptions', auth, adoptions)
router.get('/getFundraise', fetchData)
router.post('/fundraise',auth, postFundRaise);
router.post('/ngo/ngoRecruit', postNgoRecruit)
router.get('/adoptionFormRequest', auth, adoptionFormRequest)
router.get('/getAllFunds/:id', getAllFunds)
router.delete('/deleteFund/:id', deleteFund)
router.delete('/deleteAdoptionRequest/:id/:ngoId',delAdoption)
export default router
