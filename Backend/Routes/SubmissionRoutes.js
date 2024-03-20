import express from 'express'
import { getAllSubmissions, getSubmissionsById, uploadSubmission } from '../Controllers/SubmissionControllers.js';

const router = express.Router();

router.get('/' , getAllSubmissions);
router.post('/' , uploadSubmission);
router.get('/:id' , getSubmissionsById);

export default router