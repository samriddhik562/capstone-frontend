/* eslint-disable no-unused-vars */
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserManagement from './pages/UserManagement';
import AdminPage from './pages/AdminPage';
import './App.css'
import CandidatePage from './pages/CandidatePage';
import ManagerPage from './pages/ManagerPage';
import HeaderComponent from './components/HeaderComponent';
import AboutUs from './pages/AboutUs';
import JobsListingPage from './pages/JobsListingPage'
import CandidateProfile from './pages/CandidateProfile';
import ManagerProfile from './pages/ManagerProfile';
import ManageJobs from './pages/ManageJobs';

const App = () => {
  return (
    <Router>
      <HeaderComponent position="static"/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/jobs" element={<JobsListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="/editcprofile" element={<CandidateProfile />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/editmprofile" element={<ManagerProfile />} />
        <Route path="/managejobs/new" element={<ManageJobs/>}/>
        <Route path="/managejobs/:id" element={<ManageJobs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
