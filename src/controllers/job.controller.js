import JobModel from "../models/job.model.js";

export default class JobController {
    //render the landing page
    renderLandingPage = (req, res) => {
        res.render("landing-page", { user: req.session.user });
    };

    //render the new job form
    renderJobForm = (req, res) => {
        res.render("new-job", { user: res.session.user });
    }

    // add new job
    newJob = (req, res) => {
        JobModel.createNewJob(req.body);
        res.redirect('/jobs');
    };

    //render all the jobs
    getJobs = (req, res) => {
        const jobs = JobModel.getAllJobs();
        res.render('list-all-jobs', { jobs, user: req.session.user });
    }

    //find the job by its id and render it
    findJobByID = (req, res) => {
        const id = req.params.id;
        const jobData = JobModel.findJobByID(id);
        res.render("job-details", { data: jobData, user: req.session.user });
    }

    //render the update job form
    renderUpdateForm = (req, res) => {
        const id = req.params.id;
        const jobData = JobModel.findJobByID(id);
        res.render("update-job", { job: jobData });
    }

    //update the job
    updateJob = (req, res) => {
        const id = req.params.id;
        JobModel.updateJob(id, req.body);
        res.redirect(`/jobs/${id}`);
    }

    // delete a job
    deleteJob = (req, res) => {
        const id = req.params.id;
        JobModel.deleteJob(id);
        res.redirect('/jobs');
    }

    // add new applicant
    newApplicant = (req, res) => {
        const id = req.params.id;
        const { name, email, contact } = req.body;
        const resumePath = req.file.filename;
        JobModel.addNewApplicant(id, name, email, contact, resumePath);
        res.redirect('/jobs');
    }

    //get all the applicants
    allApplicant = (req, res) => {
        const id = req.params.id;
        const resp = JobModel.getAllApplicants(id);
        res.render('all-applicants', {
            allApplicant: resp,
            user: req.session.user
        });
    }
}