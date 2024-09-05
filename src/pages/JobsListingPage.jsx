import React, { useState, useEffect } from 'react';
import { JobList } from '../components/JobList';
import { JobDescription } from '../components/JobDescription';
import './JobsListingPage.css'; 
import * as jobCrud from '../Server.js'; // Import all CRUD functions

const emptyJob = {
  id: -1,
  listingTitle: "",
  description: "",
  additionalInformation: "",
  department: "",
  title: "",
  dateListed: "",
  dateClosed: "",
  listingStatus: "",
};

const JobsListingPage = () => {
  const [selectedJob, setSelectedJob] = useState(emptyJob);
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

  const pullAllJobs = () => {
    setLoading(true);
    jobCrud.getJobs((err, fetchedJobs) => {
      setLoading(false);
      if (err) {
        setError('Database Error');
        console.error(err);
      } else {
        setJobs(fetchedJobs);
      }
    });
  };

  const filterJobs = () => {
    const query = searchQuery.toLowerCase();
    const filtered = jobs.filter(job =>
      (job.listingTitle || "").toLowerCase().includes(query) ||
      (job.department || "").toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="jobs-listing-container">
      <div className="jobs-listing-header">
        <h1>Job Listings</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-bar">
        <input
         type="text"
         placeholder="Search Jobs..."
         value={searchQuery}
         onChange={handleSearchChange}
         />
      </div>
      {loading && <p className="loading">Loading...</p>}
      <div className="main-content">
        <div className="job-description-container">
          <JobDescription 
            job={selectedJob}
          />
        </div>
        <div className="job-list-container">
          <JobList jobs={filteredJobs} onJobClick={jobClick} />
        </div>
      </div>
    </div>
  );
};

export default JobsListingPage;
