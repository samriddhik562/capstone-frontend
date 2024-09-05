import { JobList } from "../components/JobList"
import React, { useState, useEffect } from "react";
import * as API from '../Server.js'

export default function JobsListingPage() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    pullAllJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [searchQuery, jobs]);

  const jobClick = (job) => {
    setSelectedJob(job);
  };
    return (
      <div className="Job-Listing-Container">
        < div className="Jobs-Listing-Header" >
          <h1> Jobs </h1>
          <p> View and apply for jobs of your choice </p>
        </div>
        <div className="job-list-container">
          <JobList jobs={filteredJobs} onJobClick={jobClick} />
        </div>
      </div>
    </div>
  );
};

export default JobsListingPage;
