import React, { useState, useEffect } from 'react';
import * as API from '../Server.js';
import { useNavigate } from 'react-router-dom';

const ManagerProfile = () => {
    const [manager, setManager] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user || user.type !== 'Hiring_Manager') {
            navigate('/login');
            return;
        }

        // Retrieve manager data
        API.getManager(user.id, (err, data) => {
            if (err) {
                console.error('Failed to fetch manager:', err);
                setError('Failed to fetch manager');
            } else {
                setManager(data);
            }
        });
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManager((prevManager) => ({
            ...prevManager,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update manager data
        API.updateManager(manager.id, manager, (err) => {
            if (err) {
                console.error('Failed to update manager:', err);
                setError('Failed to update manager');
            } else {
                console.log('Manager updated successfully');
                navigate('/manager');
            }
        });
    };

    return (
        <div>
            <h1>Manager Profile</h1>
            <div className='container'>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="group">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={manager.fullName || ''}
                                onChange={handleChange}
                            />
                            <br />
                        </div>
                        <div className="group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={manager.email || ''}
                                onChange={handleChange}
                            />
                            <br />
                        </div>
                    </div>
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={manager.department || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={manager.phone || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <button className="button" type="submit">Submit Changes</button>
                </form>
            </div>
        </div>
    );
};

export default ManagerProfile;
