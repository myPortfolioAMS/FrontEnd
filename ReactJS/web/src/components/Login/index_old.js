import React, {useEffect, useState} from 'react';
import * as S from './styles';
import axios from 'axios';
import { setUserSession } from '../../service/AuthService';







const loginAPIUrl = 'https://xxqsxfn3f0.execute-api.sa-east-1.amazonaws.com/prod/login'


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

   
   
   
    

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Please fill in all the fields');
            return;
        }
        setErrorMessage(null);

    const requestConfig = {
        headers: {
            'x-api-key': '7tuYoJe5DP8hvoLSiKpv84gqP5JyVQIG4zNoXfsd',
            }

    }

    const requestBody = {
        username: username,
        password: password
    }
    
    axios.post(loginAPIUrl, requestBody, requestConfig).then(response => {
        setUserSession(response.data.user, response.data.token);
        props.history.push({pathname:"/abrigodegases"});
       
        }).catch(error => { 
           if (error.response.status === 401 || error.response.status === 403) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("sorry.. login failed. The backend server is down! Please try again later");
            }
        }
    );

  

    }


    return (

    <div>
        
        <form onSubmit={submitHandler}>
            <S.Screen>
            <h5>Login</h5>
          
            username: <input type="text" value={username} onChange={event =>setUsername(event.target.value)} /> <br/>
            
            password: <input type="password" autoComplete="on" value={password} onChange={event =>setPassword(event.target.value)} /> <br/>
           
           
            <input type="submit" value="Login"/>
            
            </S.Screen>
         
        </form>
        
        {errorMessage && <p className='message'>{errorMessage}</p>}
    </div>

    )
}

export default Login;