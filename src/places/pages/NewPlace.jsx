import React from 'react';


import Input from '../../shared/components/FormElementd/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Button from '../../shared/components/FormElementd/Button';
import { useForm } from '../../shared/hooks/form-hook'
import './NewPlace.css';



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false);


    const placeDubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this tp backend
    }

    return (
        <form className="place-form" onSubmit={placeDubmitHandler}>
            <Input
                id="title"
                element='input'
                type='text'
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Pleace Enter a Valid title'
                onInput={inputHandler} />
            <Input
                id="description"
                element='textarea'
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Pleace Enter a Valid description (at least 5 characters)'
                onInput={inputHandler} />
            <Input
                id="adress"
                element='input'
                type='text'
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Pleace Enter a Valid address'
                onInput={inputHandler} />
            <Button type='submit' disabled={!formState.isValid}>Add Places</Button>
        </form>
    );
}

export default NewPlace;