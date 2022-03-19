import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    // data laod  specific id

    useEffect(() => {
        fetch(`https://node-mongo-120.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    // handle name change
    const handleNameChange = (e) => {
        const UpdateName = e.target.value;
        const newUser = { name: UpdateName, email: user.name }
        setUser(newUser)

    }
    const handleEmailChange = (e) => {
        const UpdateEmail = e.target.value;
        // const UpdatedUser = { ...user }
        // UpdatedUser.email = UpdateEmail
        const newUser = { name: user.name, email: UpdateEmail }
        setUser(newUser)

    }

    // On submit data
    const handleUpdateUser = (e) => {
        fetch(`https://node-mongo-120.herokuapp.com/users/${id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("successfully updated")
                    setUser({})
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>This is update user {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} value={user.email || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;