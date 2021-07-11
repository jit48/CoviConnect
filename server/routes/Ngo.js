import { Router } from 'express';
import { postFundRaise, fetchData } from '../controllers/FundRaise.js';
import auth from '../middleware/auth.js';
import {
    login,
    register,
    validate,
    adoptions,
    postRecruitments,
    getRecruitments,
    postApplication,
    getApplication,
    adoptionFormRequest,
    getAllFunds,
    deleteFund,
    delAdoption,
    getAllRecruitments,
    recruitHire,
    recruitDelete,
    deleteRecruitDrive,
    getAllMembers

} from '../controllers/Ngo.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', auth, validate);
router.get('/adoptions', auth, adoptions);

router.post('/recruitments', auth, postRecruitments);
router.get('/recruitments', auth, getRecruitments);
router.post('/application', auth, postApplication);
router.get('/application', auth, getApplication);

router.post('/fundraise', auth, postFundRaise);
router.get('/getFundraise', fetchData);

router.get('/adoptionFormRequest', auth, adoptionFormRequest);
router.get('/getAllFunds/:id', getAllFunds);
router.delete('/deleteFund/:id', deleteFund);
router.delete('/deleteAdoptionRequest/:id/:ngoId', delAdoption);
router.get('/getAllRecruitments/:id',getAllRecruitments);
router.post('/recruit/hire/:id/:recruitId', recruitHire);
router.post('/recruit/delete/:id/:recruitId', recruitDelete);
router.post('/delete/recruit/:id', deleteRecruitDrive);
router.get('/getAllMembers/:id', getAllMembers);

export default router;
