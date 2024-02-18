import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styles';

const registerurl = "https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/register";


const RegisterC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if(username.trim() === '' || email.trim() === ''|| name.trim() === ''|| password.trim() === ''){
            setMessage('All fields are required');
            return;
        }
        setMessage(null);
        const requestConfig = {
    
            headers: {
                'x-api-key': 'sxqmhhONeJ88nV7OIQAnq8LhaCMVhBEX2hHgOwZ4'
                }
            }
        
        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password

        }

        axios.post(registerurl, requestBody, requestConfig).then((response) => {
            setMessage('User registered successfully');
        }).catch((error) => {
            if (error.response.status === 401) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
        });
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
               
                <h5>Register</h5>
               

                name : <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
                email : <input type="text" value={email} onChange={e => setEmail(e.target.value)} /><br />
                
              
                username : <input type="text" value={username} onChange={e => setUsername(e.target.value)} /><br />
                
                
                password : <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
             
            <input type="submit" value="Register" />
          
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}


export default RegisterC