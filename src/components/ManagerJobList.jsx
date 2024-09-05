import React,{ useRef, useState } from 'react';
import './JobList.css';

export const ManagerJobList = ({ jobs, onJobClick }) => {
    const jobRef = useRef(null);
    const scrollToJob = () => {
        if (jobRef.current) {
            jobRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const [selectJob, setSelectedJob] = useState([]);
    const onJobClick = (job) => {
        setSelectedJob(job);
        href=`http://localhost:5173/managejobs/${job.id}`
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