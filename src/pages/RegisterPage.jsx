import { useState } from 'react';
import * as userCrud from "../Server.js";
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        type: 'Candidate'
    });
    const navigate = useNavigate();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewUser(prevState => ({ ...prevState, [name]: value }));
    }

    function registerUser(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            console.log(newUser)
            userCrud.registerUser(newUser);
            navigate('/home')
            // Handle success (e.g., show a message or redirect)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error (e.g., show an error message)
        }
    }

    return (
        <div className='container'>
            <h1>Register Here</h1>
            <form onSubmit={registerUser}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="type">Account Type:</label><br/>
                <select
                    name="type"
                    value={newUser.type}
                    onChange={handleInputChange}
                >
                    <option value="Candidate">Candidate</option>
                    <option value="Hiring_Manager">Manager</option>
                </select><br/>
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
