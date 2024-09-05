import React, { useState, useEffect } from 'react';
import * as API from '../Server.js';
import {useNavigate} from 'react-router-dom';

const CandidateProfile = () => {
    const [candidate, setCandidate] = useState({});
    const navigate = useNavigate();

    // Fetch candidate data when the component mounts
    useEffect(() => {
        const pullCandidate = () => {
            API.getCandidate(1, (err, data) => {
                if (err) {
                    console.error('Failed to fetch candidate:', err);
                } else {
                    setCandidate(data);
                }
            });
        };

        pullCandidate();
    }, []); // Empty dependency array to run only once on mount

    // Update state if form inputs change (optional)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate((prevCandidate) => ({
            ...prevCandidate,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        API.updateCandidate(1, candidate, (err) => {
            if (err) {
                console.error('Failed to update candidate:', err);
            } else {
                console.log('Candidate updated successfully');
                navigate('/candidate')
            }
        });
    };

    return (
        <>
            <h1>Candidate Profile</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                <div className="row"><div className="group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={candidate.fullName || ''}
                        onChange={handleChange}
                    />
                    <br /></div><div className="group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={candidate.email || ''}
                        onChange={handleChange}
                    />
                    <br /></div></div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={candidate.address || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phoneNum">Phone:</label>
                    <input
                        type="text"
                        name="phoneNum"
                        value={candidate.phoneNum || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="resume">Resume:</label>
                    <input
                        type="text"
                        name="resume"
                        value={candidate.resume || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <button className="button" type="submit">Submit Changes</button>
                </form>
            </div>
        </>
    );
};

export default CandidateProfile;
