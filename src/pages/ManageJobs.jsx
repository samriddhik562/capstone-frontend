import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../Server.js';
import {useNavigate} from 'react-router-dom';

const ManageJobs = () => {
const { id } = useParams();
const navigate = useNavigate();
const [formData, setFormData] = useState({
    title: ' ',
    description: ' ',
    department: ' ',
    dateListed: ' ',
    dateClosed: ' ',
    additionalInfo: ' ',
    listingStatus: ' '
  });
const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
    const pullJob = () => {
        API.getJob(id, (err, data) => {
        if (err) {
        console.error('Failed to fetch manager:', err);
        } else {
        setFormData(data);
        }});};
        pullJob();
        
    } else {
      // If no ID, it's a new job
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update job
        API.updateJob(id, formData, (err) => {
            if (err) {
            console.error('Failed to update job:', err);
            } else {
            console.log('Job updated successfully');
            }});
      } else {
        // Create new job
        API.createJob(2, formData, (err) => {
            if(err){
                console.error('Failed to add job: ', err);
            }else{
                console.log('Job Added successfully');
            }
        });
      }
      navigate('/jobs'); // Redirect after submission
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
    <h1>{id ? 'Update Job' : 'Create Job'}</h1>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="row"><div className="group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
    </div><div className="group">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
    </div></div>
    <div className="row"><div className="group">
        <label htmlFor="department">Department</label>
        <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
    </div><div className="group">
        <label htmlFor="dateListed">Date Listed</label>
        <input type="text" id="dateListed" name="dateListed" value={formData.dateListed} onChange={handleChange} />
    </div></div>
    <div className="row"><div className="group">
        <label htmlFor="dateClosed">Date Closed</label>
        <input type="text" id="dateClosed" name="dateClosed" value={formData.dateClosed} onChange={handleChange} />
    </div><div className="group">
        <label htmlFor="additionalInfo">Additional Information</label>
        <input type="text" id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
    </div></div>
    <div className="row"><div className="group">
        <label htmlFor="listingStatus">Listing Status</label>
        <input type="text" id="listingStatus" name="listingStatus" value={formData.listingStatus} onChange={handleChange} />
    </div></div>
    <button className="button" type="submit">{id ? 'Update' : 'Create'} Job</button>
    </form>
    </div></>
  );
};

export default ManageJobs;