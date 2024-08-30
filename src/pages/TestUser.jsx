import { useEffect, useState } from 'react';

const TestUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',  // Ensure CORS mode is enabled
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>User Management</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.username} - {user.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestUser;
