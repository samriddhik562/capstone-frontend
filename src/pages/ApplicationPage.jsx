import React, { useState } from 'react';
import { createApplication } from '../Server.js'; 
import { useNavigate } from 'react-router-dom';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    jobId: '',
    coverLetter: '',
    customResume: '',
    applicationStatus: ''
  });
  const navigate = useNavigate()
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createApplication(formData, (err, response) => {
      if (err) {
        navigate('/candidate')
        console.error('Error submitting form:', err);
        setError('Failed to submit the form. Please try again.');
        setSuccess(false);
      } else {
        console.log('Form Data Submitted:', response);
        setSuccess(true);
        setError(null);
        navigate('/candidate')
      }
    });
  };

  return (
    <div>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="jobId">Job ID:</label>
          <input
            type="number"
            id="jobId"
            name="jobId"
            value={formData.jobId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="customResume">Custom Resume:</label>
          <textarea
            id="customResume"
            name="customResume"
            value={formData.customResume}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="applicationStatus">Application Status:</label>
          <input
            type="text"
            id="applicationStatus"
            name="applicationStatus"
            value={formData.applicationStatus}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit Application</button>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Application submitted successfully!</p>}
      </form>
    </div>
  );
};

export default JobApplicationForm;
