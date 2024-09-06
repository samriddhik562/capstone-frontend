import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobDescription.css';

export const JobDescription = ({ job, onWithdrawClick, application, user }) => {
    const navigate = useNavigate();

    if (!job || !job.id) {
        return <div>Select a job to see the details</div>;
    }

    const isApplied = application?.job_id === job.id && application?.user_id === user?.id;

    const handleApplyClick = () => {
        navigate(`/apply-job/${job.id}`); 
    };

    return (
        <div className="Job-Description-container">
            <h2>{job.listingTitle}</h2>
            <div>
                <label>Job Title:</label>
                <p>{job.title}</p>
            </div>
            <div>
                <label>Job Description:</label>
                <p>{job.description}</p>
            </div>
            <div>
                <label>Manager:</label>
                <p>{job.manager?.name || 'N/A'}</p>
            </div>
            <div>
                <label>Department:</label>
                <p>{job.department || 'N/A'}</p>
            </div>
            <div>
                <label>Date Listed:</label>
                <p>{job.dateListed ? new Date(job.dateListed).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div>
                <label>Status:</label>
                <p>{job.listingStatus || 'N/A'}</p>
            </div>
            <div className="button-group">
                {isApplied ? (
                    <button onClick={() => onWithdrawClick(job)}>Withdraw</button>
                ) : (
                    <button onClick={handleApplyClick}>Apply</button>
                )}
            </div>
        </div>
    );
};
