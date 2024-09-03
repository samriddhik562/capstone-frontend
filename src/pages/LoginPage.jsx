import React, { useState } from 'react';
import '../components/UpdateUser'; // Import if needed
import * as userCrud from '../Server.js'; // Import all CRUD functions

const LoginPage = ({ onLoginClick }) => {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const onClearClick = () => {
        setUser({ username: '', password: '' });
    };

    return (
        <div className='container'>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="usernameInput">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    onChange={handleInputChange}
                    value={user.username}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleInputChange}
                    value={user.password}
                />
                <br />
                <div>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.preventDefault();
                            onLoginClick(user);
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.preventDefault();
                            onClearClick();
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
