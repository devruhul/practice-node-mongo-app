import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://node-mongo-120.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // Delete user by id
    const handleDeleteUser = (id) => {
        const proceed = window.confirm("Do you want to delete?")
        if (proceed) {
            fetch(`https://node-mongo-120.herokuapp.com/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted succefully")
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers)
                    }
                })
        }
    }

    return (
        <div>
            <h2>This is users {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name}::
                        {user.email}
                        <Link to={`/users/update/${user._id}`}>
                            <button>Update</button></Link> ::
                        <button onClick={() => handleDeleteUser(user._id)}> Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;