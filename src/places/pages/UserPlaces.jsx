import React from 'react';
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'
import './UserPlaces.css';


const DUMMY_PLACE = [
    {
        id: 1,
        title: "Empire State Building",
        desc: "One of the most famous sky scrapers in the world!",
        imgURL: 'https://files.structurae.net/files/photos/5256/2019-09-08/dsc02157.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9834757
        },
        creatorId: 1
    },
    {
        id: 2,
        title: "Empire State Building2",
        desc: "One of the most famous sky scrapers in the world!",
        imgURL: 'https://files.structurae.net/files/photos/5256/2019-09-08/dsc02157.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9834757
        },
        creatorId: 2
    }
]
const UserPlaces = (props) => {
    const userId = +useParams().userId;
    const loadedPlace = DUMMY_PLACE.filter(place => {
        return place.creatorId === userId
    })
    return <PlaceList items={loadedPlace} />

}

export default UserPlaces;