import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h3>Everything  about this person here:{friend.length}</h3>
            <h2>name:{friend.name}</h2>
            <p>address: {friend.address.city}</p>
        </div>
    );
};

export default FriendDetails;