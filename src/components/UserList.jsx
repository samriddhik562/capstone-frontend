import React, { useRef } from 'react';
import './UserList.css';

export const UserList = ({ users, onUserClick }) => {
    const userRef = useRef(null);

    const scrollToUser = () => {
        if (userRef.current) {
            userRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="userDiv">
            <div className="table-container">
                <div className="table-header">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>&nbsp;</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-body">
                    <table>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    onClick={() => onUserClick(user)}
                                    ref={index === 0 ? userRef : null}
                                >
                                    <td>{user.username}</td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>{user.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};