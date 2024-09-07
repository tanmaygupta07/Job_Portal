export default class JobModel {
    static db_id = 3;

    static jobs = [
        {
            id: 1,
            jobCategory: "Tech",
            jobDesignation: "SDE",
            jobLocation: 'Gurgaon HR IND Remote',
            companyName: 'Coding Ninjas',
            salary: '14-20LPA',
            applyBy: '30 Sep 2024',
            skillsRequired: [
                'REACT',
                'NodeJs',
                'JS',
                'SQL',
                'MongoDB',
                'Express',
                'AWS'
            ],
            numberOfOpening: 5,
            jobPosted: new Date().toLocaleString(),
            applicants: [
                {
                    applicantID: '1',
                    name: 'John Doe',
                    email: 'johndoe@gmail.com',
                    contact: 9876543210,
                    resumePath: 'resume.pdf'
                }
            ]
        },
        {
            id: 2,
            jobCategory: "Tech",
            jobDesignation: "Angular Developer",
            jobLocation: 'Pune IND On-Site',
            companyName: 'Go Digit',
            salary: '6-10LPA',
            applyBy: '30 Sep 2024',
            skillsRequired: [
                'Angular',
                'JS',
                'SQL',
                'MongoDB',
                'Express',
                'AWS'
            ],
            numberOfOpening: 7,
            jobPosted: new Date().toLocaleString(),
            applicants: []
        },
        {
            id: 3,
            jobCategory: "Tech",
            jobDesignation: "SDE",
            jobLocation: 'Bangalore IND',
            companyName: 'Juspay',
            salary: '20-26LPA',
            applyBy: '30 Sep 2024',
            skillsRequired: [
                'REACT',
                'NodeJs',
                'JS',
                'SQL',
                'MongoDB',
                'Express',
                'AWS'
            ],
            numberOfOpening: 3,
            jobPosted: new Date().toLocaleString(),
            applicants: []
        }
    ]

    contructor(
        jobCategory,
        jobDesignation,
        jobLocation,
        companyName,
        salary,
        applyBy,
        skillsRequired,
        numberOfOpening
    ) {
        this.id = ++db_id;
        this.jobCategory = jobCategory;
        this.jobDesignation = jobDesignation;
        this.jobLocation = jobLocation;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsRequired = skillsRequired;
        this.numberOfOpening = numberOfOpening;
        this.jobPosted = new Date().toLocaleString();
        this.applicants = [];
    }

    //function to create a new job
    static createNewJob = (jobDetails) => {
        const { jobCategory,
            jobDesignation,
            jobLocation,
            companyName,
            salary,
            applyBy,
            skillsRequired,
            numberOfOpening } = jobDetails;

        const newJob = {
            id: ++JobModel.db_id,
            jobCategory,
            jobDesignation,
            jobLocation,
            companyName,
            salary,
            applyBy,
            skillsRequired,
            numberOfOpening,
            jobPosted: new Date().toLocaleString(),
            applicants: []
        };

        JobModel.jobs.push(newJob);
    }


    //function to get all the jobs
    static getAllJobs = () => {
        return JobModel.jobs;
    }

    //function to find a job by its ID
    static findJobByID = (id) => {
        return JobModel.jobs.find((j) => j.id === id);
    }

    //function to update a job
    static updateJob = (id, data) => {
        const index = JobModel.jobs.findIndex((j) => j.id === id);
        if (index !== -1) {
            JobModel.jobs[index] = {
                ...JobModel.jobs[index],
                ...data
            };
        }
    }

    static deleteJob = (id) => {
        const index = JobModel.jobs.findIndex((j) => j.id === id);
        if (index !== -1) {
            JobModel.jobs.splice(index, 1);
        }
    }

    //function to add a new applicant for a job
    static addNewApplicant = (id, applicantData) => {
        const { name, email, contact, resumePath } = applicantData;
        const index = JobModel.jobs.findIndex((j) => j.id === id)

        if (index === -1) {
            return null;
        }

        const newApplicantID = JobModel.jobs[index].applicants.length + 1;

        JobModel.jobs[index].applicants.push({
            applicantID: newApplicantID,
            name,
            email,
            contact,
            resumePath
        });

        return JobModel.jobs[index].applicants;
    }

    //function to get all the applicants of a given job using its id
    static getAllApplicants = (id) => {
        const index = JobModel.jobs.findIndex((j) => j.id === id);
        return index !== -1 ? JobModel.jobs[index].applicants : null;
    };
}