import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import App from '../App'


const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username, password, (error, user) => {
            if (error) {
                setError('Invalid credentials');
                console.error('Login error:', error); // Log the error for debugging
            } else {
                console.log('Received user:', user); // Log the user object for debugging
    
                if (user && user.type) {
                    switch (user.type) {
                        case 'Administrator':
                            navigate('/admin');
                            break;
                        case 'Hiring_Manager':
                            navigate('/manager');
                            break;
                        case 'Candidate':
                            navigate('/candidate');
                            break;
                        default:
                            navigate('/home');
                            break;
                    }
                } else {
                    setError('Unexpected response from server');
                    console.error('Unexpected user object:', user); // Log the unexpected user object
                }
            }
        });
    };
    
    return (
        <div className="container">
            <h1>Sign In</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="usernameInput">Username:</label>
                <input
                    type="text"
                    id="usernameInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
