import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser } from './Server.js';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ManagerPage from './pages/ManagerPage';
import ManagerProfile from './pages/ManagerProfile';
import RegisterPage from './pages/RegisterPage';
import CandidatePage from './pages/CandidatePage';
import AboutUs from './pages/AboutUs'
import HeaderComponent from './components/HeaderComponent';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const savedUser = JSON.parse(localStorage.getItem('user'));
            console.log('Saved User:', savedUser); // Debugging
            if (savedUser) {
                setUser(savedUser);
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const handleLogin = (username, password, callback) => {
        loginUser(username, password, (error, user) => {
            console.log('Login Response:', user); // Debugging
            if (error) {
                callback(error,null);
            } else {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                callback(null,user); // No error
            }
        });
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <HeaderComponent position="static" onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Navigate to={'/home'} />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/admin" element={user?.type === 'Administrator' ? <AdminPage /> : <Navigate to="/login" />} />
                <Route path="/manager" element={user?.type === 'Hiring_Manager' ? <ManagerPage /> : <Navigate to="/login" />} />
                <Route path="/editmprofile" element={user?.type === 'Hiring_Manager' ? <ManagerProfile /> : <Navigate to="/login" />} />
                <Route path="/candidate" element={user?.type === 'Candidate' ? <CandidatePage /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    );
};

export default App;
