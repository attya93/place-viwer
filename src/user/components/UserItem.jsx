import React from 'react';
import { Link } from 'react-router-dom'


import Card from '../../shared/components/UIElement/Card';
import Avater from '../../shared/components/UIElement/Avater';

import './UserItem.css'

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__imge">
                        <Avater className={props.name} imgs={props.img} alts={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.place} {props.placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default UserItem;