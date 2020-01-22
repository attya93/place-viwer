import React from 'react'
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElementd/Input';
import Button from '../../shared/components/FormElementd/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'


import './UpdatePlace.css';


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

const UpdatePlace = (props) => {
    const placeId = useParams().placeId;
    const identifiliedPlce = DUMMY_PLACE.find(place => place.id === +placeId);
    if (!identifiliedPlce) {
        return <div className="center"><h2>Could not find place</h2> </div>
    }
    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Pleace Enter a Valid title'
                onInput={() => { }}
                value={identifiliedPlce.title}
                valid={true}
            />
            <Input
                id="discription"
                element="textarea"
                label="Discription"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Pleace Enter a Valid discription(at least 5 characters)'
                onInput={() => { }}
                value={identifiliedPlce.desc}
                valid={true}
            />

            <Button type='submit' disabled={true}>Update Place</Button>
        </form>
    );
}

export default UpdatePlace;