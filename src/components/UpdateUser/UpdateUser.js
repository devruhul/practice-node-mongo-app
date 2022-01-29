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

    return (
        <div>
            <h2>This is update user {user.name}</h2>
        </div>
    );
};

export default UpdateUser;