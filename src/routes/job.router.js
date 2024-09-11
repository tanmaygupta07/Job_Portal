import express from 'express';
import JobController from '../controllers/job.controller.js';
import { auth } from '../middlewares/authMiddleware.js';
import uploadFile from '../middlewares/fileUploadMiddleware.js';

const jobController = new JobController();

const router = express.Router();

router.get('/newJob', auth, jobController.renderJobForm);

router.post('/', jobController.newJob);

router.get('/', jobController.getJobs);

router.get('/:id', jobController.findJobByID);

router.get('/update/:id', auth, jobController.renderUpdateForm);

router.post('/update/:id', auth, jobController.updateJob);

router.delete('/delete/:id', auth, jobController.deleteJob);

router.post('/apply/:id', uploadFile.single("resume"), jobController.newApplicant);

router.get('/applicants/:id', auth, jobController.allApplicant);

export default router;