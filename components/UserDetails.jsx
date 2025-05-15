import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            <h1>UserDetails</h1>
        </div>
    );
};

export default UserDetails;