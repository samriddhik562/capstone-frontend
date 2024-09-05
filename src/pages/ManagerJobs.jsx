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
        API.getJobsFiltered(52, (err, data) => {
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
          <JobList jobs={jobs} onJobClick={jobClick} />
         </div>
         </div>
        </div> 
    )
};