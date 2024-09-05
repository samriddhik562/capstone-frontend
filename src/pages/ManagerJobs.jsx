import { JobList } from "../components/JobList"
import React, { useState, useEffect } from "react";
import * as API from '../Server.js'

export default function ManagerJobs() {
  const [jobs, setJobs] = useState([]);
  const jobClick = (job) => {
    setSelectedJob(job);
    console.log(jobs.id);
  };

  useEffect(() => {
    const pullJobs = () => {
        API.getJobsFiltered(2, (err, data) => {
          if (err) { 
            setError('Fetching error');
            console.error(err);
          } else {
            setJobs(data);
          }
        });
      };
    pullJobs();
    }, []);

    return (
      <div className="container">
        <div className="Main-Content">
         <div className="Job-List-Container">
          <ManagerJobList jobs={jobs} onJobClick={jobClick} />
         </div>
         <a href="http://localhost:5173/managejobs/new"><button>Add Job</button></a>
         </div>
        </div> 
    )
};