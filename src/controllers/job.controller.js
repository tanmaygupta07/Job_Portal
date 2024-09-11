import { sendConfirmationMail } from "../middlewares/sendMail.js";
import JobModel from "../models/job.model.js";

export default class JobController {
    //render the new job form
    renderJobForm = (req, res) => {
        res.render("new-job");
    }

    // add new job
    newJob = (req, res) => {
        JobModel.createNewJob(req.body);
        // res.status(200).json({ msg: "Job Added Succesfully" })
        res.redirect('/jobs');
    };

    //render all the jobs
    getJobs = (req, res) => {
        const jobs = JobModel.getAllJobs();
        // res.status(200).send(jobs);
        res.render('list-all-jobs', { jobs, user: req.session.user });
    }

    //find the job by its id and render it
    findJobByID = (req, res) => {
        const id = req.params.id;
        const jobData = JobModel.findJobByID(id);
        if (!jobData) {
            // If jobData is not found, return a 404 error or render a "job not found" page
            return res.status(404).render("404", { message: "Job not found", user: req.session.user });
        }
        // res.status(200).send(jobData);
        res.render("job-details", { data: jobData, user: req.session.user });
    }

    //render the update job form
    renderUpdateForm = (req, res) => {
        const id = req.params.id;
        const jobData = JobModel.findJobByID(id);
        // res.status(200).send(jobData);
        res.render("update-job", { job: jobData });
    }

    //update the job
    updateJob = (req, res) => {
        const id = req.params.id;
        JobModel.updateJob(id, req.body);
        const updatedJob = JobModel.findJobByID(id)
        // res.status(200).send(updatedJob);
        res.redirect(`/jobs/${id}`);
    }

    // delete a job
    deleteJob = (req, res) => {
        const id = req.params.id;
        JobModel.deleteJob(id);
        // res.status(200).send({ msg: "Job deleted successfully" })
        res.redirect('/jobs');
    }

    // add new applicant
    newApplicant = async (req, res) => {
        const id = req.params.id;
        const { name, email, contact } = req.body;
        const resumePath = req.file.filename;
        JobModel.addNewApplicant(id, { name, email, contact, resumePath });
        await sendConfirmationMail(email);
        const addedApplicant = JobModel.addNewApplicant(id, { name, email, contact });
        // res.status(200).send(addedApplicant);
        res.redirect('/jobs');
    }

    //get all the applicants
    allApplicant = (req, res) => {
        const id = req.params.id;
        const resp = JobModel.getAllApplicants(id);
        // res.status(200).send(resp);
        res.render('all-applicants', {
            allApplicant: resp,
            user: req.session.user
        });
    }
}