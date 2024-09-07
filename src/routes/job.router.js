import express from 'express';
import JobController from '../controllers/job.controller.js';

const jobController = new JobController();

const router = express.Router();

router.get('/new', jobController.renderJobForm);

router.post('/', jobController.newJob);

router.get('/', jobController.getJobs);

router.get('/:id', jobController.findJobByID);

router.get('/update/:id', jobController.renderUpdateForm);

router.post('/update/:id', jobController.updateJob);

router.delete('/delete/:id', jobController.deleteJob);

router.post('/apply/:id', jobController.newApplicant);

router.get('/applicants/:id', jobController.allApplicant);

export default router;