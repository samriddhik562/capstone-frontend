import { JobList } from "../components/JobList"
import React, { useState, useEffect } from "react";
import * as API from '../Server.js'

export default function JobsListingPage() {
  const [jobs, setJobs] = useState([]);
  const jobClick = (job) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    const pullJobs = () => {
        API.getJobs((err, data) => {
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
      <div className="Job-Listing-Container">
        < div className="Jobs-Listing-Header" >
          <h1> Jobs </h1>
          <p> View and apply for jobs of your choice </p>
        </div>
        <div className="Search-bar">

        </div>
        <div className="Main-Content">
         <div className="Job-List-Container">
          <JobList jobs={jobs} onJobClick={jobClick} />
         </div>
         <div className="Job-Description-Container">

         </div>
        </div>
      </div>  
    )
};