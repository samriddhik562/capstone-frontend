import React, { useState, useEffect } from "react";
import { UserList } from "../components/UserList";
import { UpdateUser } from "../components/UpdateUser";
import './UserManagement.css'; 
import * as userCrud from "../UserServer.js"; // Import all CRUD functions

const emptyUser = {
  id: -1,
  username: "",
  password: "",
  type: ""
};

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(emptyUser);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    pullAllUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchQuery, users]);

  const userClick = (user) => {
    setSelectedUser(user);
  };

  const clearClick = () => {
    setSelectedUser(emptyUser);
  };

  const destroyUser = () => {
    if (selectedUser.id !== -1) {
      userCrud.deleteUser(selectedUser.id, (err) => {
        if (err) {
          setError('Error deleting user.');
          console.error(err);
        } else {
          setSelectedUser(emptyUser);
          pullAllUsers(); 
        }
      });
    }
  };

  const saveUser = (user) => {
    userCrud.updateUser(user.id, user.username, user.type, (err, result) => {
      if (err) {
        setError('Error updating user.');
        console.error(err);
      } else {
        setSelectedUser(emptyUser);
        pullAllUsers(); 
      }
    });
  };

  const addUser = (user) => {
    userCrud.createUser(user.username, user.type, (err) => {
      if (err) {
        setError('Error creating user.');
        console.error(err);
      } else {
        setSelectedUser(emptyUser);
        pullAllUsers(); 
      }
    });
  };

  const pullAllUsers = () => {
    setLoading(true);
    userCrud.getUsers((err, fetchedUsers) => {
      setLoading(false);
      if (err) {
        setError('Database Error');
        console.error(err);
      } else {
        setUsers(fetchedUsers);
      }
    });
  };

  const filterUsers = () => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(user =>
      (user.username || "").toLowerCase().includes(query) ||
      (user.type || "").toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="user-management-container">
      <div className="user-management-header">
        <h1>User Management</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-bar">
        <input
         type="text"
         placeholder="Search Users..."
         value={searchQuery}
         onChange={handleSearchChange}
         />
      </div>
      {loading && <p className="loading">Loading...</p>}
      <div className="main-content">
        <div className="update-form-container">
          <UpdateUser 
            user={selectedUser} 
            onClearClick={clearClick}
            onDeleteClick={destroyUser}
            setUser={setSelectedUser}
            onAddClick={addUser}
            onSaveClick={saveUser}
          />
        </div>
        <div className="user-list-container">
          <UserList users={filteredUsers} onUserClick={userClick} />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
