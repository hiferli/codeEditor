import express from 'express'
import { deleteProblemById, getAllProblems, getProblemById, uploadProblem } from '../Controllers/ProblemControllers.js';

const router = express.Router();

router.get('/' , getAllProblems);
router.post('/' , uploadProblem);
router.get('/:id', getProblemById)
router.delete('/:id', deleteProblemById);

export default router