import React, { useState, useContext } from 'react';


import Input from '../../shared/components/FormElementd/Input';
import Button from '../../shared/components/FormElementd/Button';
import Card from '../../shared/components/UIElement/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';


import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false)
    const loginHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs)
        auth.logIn();
    }

    const switchModeHandler = () => {
        if (!isLogin) {
            //log in mode
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            //sing in mode
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLogin(prevMode => !prevMode);
    }

    return <Card className='authentication'>
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={loginHandler}>
            {!isLogin && (
                <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please Enter your Name"
                    onInput={inputHandler}
                />
            )}
            <Input
                id="email"
                label="E-mail"
                type="email"
                element="input"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Pleace Enter Your Email"
                onInput={inputHandler}
            />
            <Input
                id="password"
                label="Password"
                element="input"
                type="password"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Pleace Enter At lest 6 charaters"
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>{isLogin ? "Login" : 'Sign in'}</Button>
        </form >
        <Button inverse onClick={switchModeHandler}>Switch to {isLogin ? "LOGIN" : "SIGNUP"}</Button>
    </Card>
};

export default Auth;