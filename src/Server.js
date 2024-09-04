import axios from 'axios';

const UserApi = 'http://localhost:8080/users';
const CandidateApi = 'http://localhost:8080/candidates';
const ManagerApi = 'http://localhost:8080/managers';
const JobsApi = 'http://localhost:8080/jobs';

// Fetch all users
export const getUsers = (callback) => {
    axios.get(UserApi)
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
};

// Fetch all Candidates
export const getCandidates = (callback) => {
    axios.get(CandidateApi)
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
};

// Fetch all users
export const getManagers = (callback) => {
    axios.get(ManagerApi)
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
};

// Delete a user by ID
export const deleteUser = (id, callback) => {
    axios.delete(`${UserApi}/${id}`)
        .then(() => callback(null))
        .catch(error => callback(error));
};

// Update a user by ID
export const updateUser = (id, username, type, callback) => {
    axios.put(`${UserApi}/${id}`, { username, type })
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
};

// Create a new user
export const createUser = (username, type, callback) => {
    axios.post(UserApi, { username, type })
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
};

// Register a new user
export const registerUser = ({username, password, type, callback}) => {
    // axios.post(UserApi, { username, password, type })
    //     .then(response => callback(null, response.data))
    //     .catch(error => callback(error));
    fetch(UserApi, {method:"POST", body:JSON.stringify({username,password,type}), headers: {"Content-Type":"application/json"}}, )
    if (type === "Candidate"){
        fetch(CandidateApi, {method:"POST", body:JSON.stringify({username,password,type}), headers: {"Content-Type":"application/json"}}, )
    }
    else
    {
        fetch(ManagerApi, {method:"POST", body:JSON.stringify({username,password,type}), headers: {"Content-Type":"application/json"}}, )
    }
};
