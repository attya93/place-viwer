import React, { useCallback, useReducer } from 'react';


import Input from '../../shared/components/FormElementd/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Button from '../../shared/components/FormElementd/Button';
import './NewPlace.css';


const fromReduser = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.id) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
}

const NewPlace = () => {
    const [formState, dispatch] = useReducer(fromReduser, {
        inputs: {
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
        },
        isValid: false
    });
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id })
    }, [dispatch]);

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