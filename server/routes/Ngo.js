import { Router } from 'express'

import auth from '../middleware/auth.js'
import {
  login,
  register,
  validate,
  adoptions,
  adoptionFormRequest,
} from '../controllers/Ngo.js'
import { postNgoRecruit } from '../controllers/NgoRecruit.js'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/', auth, validate)
router.get('/adoptions', auth, adoptions)
router.post('/ngo/ngoRecruit', postNgoRecruit)
router.get('/adoptionFormRequest', auth, adoptionFormRequest)

export default router
