import express from 'express'
import { uploadSubmission } from '../Controllers/SubmissionControllers.js';

const router = express.Router();

router.post('/' , uploadSubmission);

export default router