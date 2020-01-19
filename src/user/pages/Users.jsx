import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USER = [
        {
            id: 1,
            name: "Mostafa",
            place: 2,
            placeCount: 2,
            img: "https://picsum.photos/seed/picsum/200/300"
        },
        {
            id: 2,
            name: "Mohammed",
            place: 1,
            placeCount: 1,
            img: "https://picsum.photos/seed/picsum/200/300"
        }]
    return <UsersList items={USER} />
}

export default Users;