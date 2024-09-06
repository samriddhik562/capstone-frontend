import React, { useState, useEffect } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

const ManagerPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        // Simulate fetching from localStorage and validating user
        const fetchUser = () => {
            const storedUserString = localStorage.getItem('user');
            console.log('Stored user string:', storedUserString); // Check the raw string

            if (storedUserString) {
                try {
                    const parsedUser = JSON.parse(storedUserString);
                    console.log('Retrieved user:', parsedUser); // Check the parsed user object
                    if (parsedUser.type === 'Hiring_Manager') {
                        setUser(parsedUser);
                    } else {
                        // Redirect if user type is not Hiring Manager
                        setUser(null);
                    }
                } catch (e) {
                    console.error('Error parsing user data:', e);
                    setUser(null);
                }
            } else {
                setUser(null);
            }
            setLoading(false); // Set loading to false once done
        };

        fetchUser();
    }, []); // Empty dependency array to run only once on mount

    if (loading) {
        return <div>Loading...</div>; // Show a loading message or spinner
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Manager Dashboard</h1>
            <div className="flex-box">
                <div className="container">
                    <p>Welcome to Manager Dashboard!</p>
                    <p>Please click on the links below to perform the task you want:</p>
                    <br />
                    <ul>
                        <li><Link to={'/editmprofile'}>Edit Profile</Link><br /></li>
                        <li><Link to={'/manager/jobs'}>Manage Job Openings</Link><br /></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default ManagerPage;
