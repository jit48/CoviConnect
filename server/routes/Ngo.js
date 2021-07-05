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
} from '../controllers/Ngo.js'
import { postNgoRecruit } from '../controllers/NgoRecruit.js'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/', auth, validate)
router.get('/adoptions', auth, adoptions)
router.post('/ngo/ngoRecruit', postNgoRecruit)
router.get('/adoptionFormRequest', auth, adoptionFormRequest)
router.get('/getAllFunds/:id', getAllFunds)
router.delete('/deleteFund/:id', deleteFund)
export default router
