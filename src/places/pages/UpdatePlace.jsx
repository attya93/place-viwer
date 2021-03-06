import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import Input from '../../shared/components/FormElementd/Input';
import Button from '../../shared/components/FormElementd/Button';
import Card from '../../shared/components/UIElement/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

import { useForm } from '../../shared/hooks/form-hook';
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

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: "",
            isValid: false
        }
    }, false);

    const identifiliedPlce = DUMMY_PLACE.find(place => place.id === +placeId);
    useEffect(() => {
        if (identifiliedPlce) {
            setFormData(
                {
                    title: {
                        value: identifiliedPlce.title,
                        isValid: true
                    },
                    description: {
                        value: identifiliedPlce.desc,
                        isValid: true
                    }
                }, true);
        }
        setIsLoading(false);
    }, [setFormData, identifiliedPlce])

    const placeUpdateSubmtHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiliedPlce) {
        return <div className="center">
            <Card>
                <h2>Could not find place</h2>
            </Card>
        </div>
    }
    if (isLoading) {
        return <div className="center"><h2>Loadin....</h2> </div>
    }
    return (
        <form className="place-form" onSubmit={placeUpdateSubmtHandler}>
            <Input
                id="title"
                element="input"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Pleace Enter a Valid title'
                onInput={inputHandler}
                initalValue={formState.inputs.title.value}
                initalValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Pleace Enter a Valid description(at least 5 characters)'
                onInput={inputHandler}
                initalValue={formState.inputs.description.value}
                initalValid={formState.inputs.description.isValid}
            />

            <Button type='submit' disabled={!formState.isValid}>Update Place</Button>
        </form>
    );
}

export default UpdatePlace;