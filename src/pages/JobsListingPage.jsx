import { JobList } from "../components/JobList"
import React, { useState, useEffect } from "react";

export default function JobsListingPage() {
  const [jobs, setJobs] = useState([]);
  const jobClick = (job) => {
    setSelectedJob(job);
  };
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