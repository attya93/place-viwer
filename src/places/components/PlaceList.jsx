import React from 'react';

import Card from '../../shared/components/UIElement/Card';
import Button from '../../shared/components/FormElementd/Button'
import PlaceItem from './PlaceItem';
import './PlaceList.css';


const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places Found. Maybe Create One?</h2>
                    <Button to="/place/new" exact>Share Place</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem
                key={place.id}
                id={place.id}
                imgs={place.imgURL}
                title={place.title}
                description={place.desc}
                address={place.address}
                creatorId={place.creatorId}
                coordinates={place.location}
            />
            )}
        </ul>
    )
}

export default PlaceList;