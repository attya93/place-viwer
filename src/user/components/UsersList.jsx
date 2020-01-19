import React from 'react';

import Card from '../../shared/components/UIElement/Card'
import UserItem from './UserItem'
import './UserList.css'

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No User Are Found!!</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map((user) => {
                return <UserItem
                    key={user.id}
                    id={user.id}
                    img={user.img}
                    name={user.name}
                    placeCount={user.placeCount}
                    place={user.place}
                />
            })
            }
        </ul>
    )
}

export default UsersList;