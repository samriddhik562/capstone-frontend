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

// Fetch Candidate data
export const getCandidate = (id, callback) => {
    axios.get(`${CandidateApi}/${id}`)
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
export const registerUser = async ({id, username, password, type, callback}) => {
    // axios.post(UserApi, { username, password, type })
    //     .then(response => callback(null, response.data))
    //     .catch(error => callback(error));
    const newUser = await fetch(UserApi, {method:"POST", mode: "cors", body:JSON.stringify({username,password,type}), headers: {"Content-Type":"application/json"}}, ).then((res) => res.json())
    console.log({newUser})
    if (newUser.type === "Candidate"){
        fetch(CandidateApi, {method:"POST", mode: "cors", body:JSON.stringify({userId: newUser.id}), headers: {"Content-Type":"application/json"}}, )
        console.log("successful candidate")
    }
    else
    {
        fetch(ManagerApi, {method:"POST", mode: "cors", body:JSON.stringify({userId: newUser.id}), headers: {"Content-Type":"application/json"}}, )
        console.log("successful manager")
    }
};
