import React, { useCallback } from 'react';


import Input from '../../shared/components/FormElementd/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import './NewPlace.css';


const NewPlace = () => {

    const titleInputHandler = useCallback((id, value, isValid) => { }, []);
    const descriptionleInputHandler = useCallback((id, value, isValid) => { }, []);
    return (
        <form className="place-form">
            <Input
                id="title"
                element='input'
                type='text'
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Pleace Enter a Valid title'
                onInput={titleInputHandler} />
            <Input
                id="description"
                element='textarea'
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Pleace Enter a Valid description (at least 5 characters)'
                onInput={descriptionleInputHandler} />
        </form>
    );
}

export default NewPlace;