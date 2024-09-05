import React,{ useRef, useState } from 'react';
import './JobList.css';
import { useNavigate } from 'react-router-dom';

export const JobList = ({ jobs, onJobClick }) => {
    const jobRef = useRef(null);
    const navigate = useNavigate();
    const scrollToJob = () => {
        if (jobRef.current) {
            jobRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const [selectJob, setSelectedJob] = useState([]);
    
    function onJobClick(job){
        setSelectedJob(job);
        navigate(`/managejobs/${job.id}`)
    };

    return (
        <div className="jobDiv">
            <div className="table-container">
                <div className="table-header">
                    <table>
                        <thead>
                            <tr>
                                <th>Jobname</th>
                                <th>&nbsp;</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-body">
                    <table>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr
                                    key={job.id}
                                    onClick={() => onJobClick(job)}
                                    ref={index === 0 ? jobRef : null}
                                >
                                    <td>{job.title}</td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>{job.listingStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};