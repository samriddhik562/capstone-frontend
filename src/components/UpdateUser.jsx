import React, { useState, useEffect } from 'react';
import './UpdateUser.css';

export const UpdateUser = ({ user, onSaveClick, onDeleteClick, onClearClick, onAddClick, setUser }) => {
    const [selectedValue, setSelectedValue] = useState(user.type || '');

    const addMode = (user.id === -1);
    const title = addMode ? "Create" : "Update";

    const buttons = addMode ? (
        <>
            <button onClick={(event) => { event.preventDefault(); onAddClick(user); }}>Create</button>
            <button onClick={(event) => { event.preventDefault(); onClearClick(); }}>Clear</button>
        </>
    ) : (
        <>
            <button onClick={(event) => { event.preventDefault(); onDeleteClick(); }}>Delete</button>
            <button onClick={(event) => { event.preventDefault(); onSaveClick(user); }}>Save</button>
            <button onClick={(event) => { event.preventDefault(); onClearClick(); }}>Clear</button>
        </>
    );

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setUser({ ...user, type: value });
    };

    return (
        <div className="update-user-container">
            <h2>{title}</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        value={user.username || ''}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={user.password || ''}
                    />
                </div>
                <div>
                    <label htmlFor="dropdown">Type:</label>
                    <select
                        id="dropdown"
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="Candidate">Candidate</option>
                        <option value="Hiring_Manager">Manager</option>
                        <option value="Administrator">Admin</option>
                    </select>
                </div>
                <div className="button-group">
                    {buttons}
                </div>
            </form>
        </div>
    );
};
