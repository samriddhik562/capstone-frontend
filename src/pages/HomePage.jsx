/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    navigate('/login'); // Navigate to the About page
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the About page
  };
    return (
      <div>
        <h1>Home</h1>
          <button onClick={handleLogin}>Sign in</button> &nbsp;&nbsp;&nbsp;
          <button onClick={handleRegister}>Register</button>
          <p>Welcome to <strong>SRVTech</strong> - your solutions to getting hired from the best!</p>
      </div>
    );
  };
  
export default HomePage;