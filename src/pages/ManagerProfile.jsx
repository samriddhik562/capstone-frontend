import React, { useState, useEffect } from 'react';
import * as API from '../Server.js';
import {useNavigate} from 'react-router-dom';

const ManagerProfile = () =>{

const [manager, setManager] = useState({});
const navigate = useNavigate();

useEffect(() => {
    const pullManager = () => {
        API.getManager(2, (err, data) => {
        if (err) {
        console.error('Failed to fetch manager:', err);
        } else {
        setManager(data);
        }});};

    pullManager();
    }, []); // Empty dependency array to run only once on mount

const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevManager) => ({
    ...prevManager,[name]: value}));};

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    API.updateManager(2, manager, (err) => {
    if (err) {
    console.error('Failed to update manager:', err);
    } else {
    console.log('Manager updated successfully');
    navigate('/manager')
    }});};

return (
    <>
    <h1>Manager Profile</h1>
    <div className='container'>
    <form onSubmit={handleSubmit}><div className="row"><div className="group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" value={manager.fullName || ''} onChange={handleChange}/>
    <br /></div><div className="group">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={manager.email || ''} onChange={handleChange}/>
    <br /></div></div>
        <label htmlFor="department">Department:</label>
        <input type="text" name="department" value={manager.department || ''} onChange={handleChange}/>
    <br />
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" value={manager.phone || ''} onChange={handleChange}/>
    <br />
        <button className="button" type="submit">Submit Changes</button>
        </form>
    </div></>
    );
};

export default ManagerProfile;