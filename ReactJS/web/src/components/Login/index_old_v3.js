import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import { setUserSession } from '../service/AuthService';
import { setUserSession } from '../../service/AuthService';
import axios from 'axios';
import * as S from './styles';

import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

const loginAPIUrl = " https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/login"

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if(username.trim() === '' || password.trim() === ''){
                setErrorMessage('Both username and password are required');
                return;
    }
    setErrorMessage(null);
    const requestConfig = {
    
        headers: {
            'x-api-key': 'sxqmhhONeJ88nV7OIQAnq8LhaCMVhBEX2hHgOwZ4'
            }
        }
    const requestBody = {
        username: username,
        password: password

    }
  

    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
        setUserSession(response.data.user, response.data.token);
        console.log(response.data.user); console.log(response.data.token);
        //console.log("so far so good");
        //props.history.push('/premium-content');
        navigate('/Devices', props);
        //navigate('/Manometers', props);
        console.log("Login successful");
        alert("Login successful");

    }).catch((error) => {
        if (error.response.status === 401 || error.response.status === 403 || error.response.status === 400) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage('Something went wrong. Please try again later.');
        }
    })
    
    }

    return (
       
        <Authenticator>
        {({ signOut }) => (
           <div>

           <h1>Hello, welcome to my page</h1>
           <h3>You are authenticated !!! This is the premium content page</h3>

          
           <button onClick={signOut}>Sign out</button>
           </div>
        )}

        </Authenticator>
    );
}


export default Login;