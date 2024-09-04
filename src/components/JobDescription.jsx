import React, { useState, useEffect } from 'react';
//import './JobDescription.css';

export const JobDescription = ({ job, setJob }) => {
    const [selectedValue, setSelectedValue] = useState(job.type || '');
    
    const jobTitle = ;

    const applied = (application.job_id === application.user_id);
    const buttons = applied ? (
        <button onClick={(event) => { event.preventDefault(); onWithdrawClick(user); }}>Withdraw</button>
    ) : (
        <button onClick={(event) => { event.preventDefault(); onApplyClick(); }}>Apply</button>
    );  

    return (
        <div className="Job-Description-container">
            <h2>{jobTitle}</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        value={user.username || ''}
                    />
                </div>
                <div>
                    <label htmlFor="dropdown">Type:</label>
                    <select
                        id="dropdown"
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="Candidate">Candidate</option>
                        <option value="Hiring_Manager">Manager</option>
                        <option value="Administrator">Admin</option>
                    </select>
                </div>
                <div className="button-group">
                    {buttons}
                </div>
            </form>
        </div>
    );


};
