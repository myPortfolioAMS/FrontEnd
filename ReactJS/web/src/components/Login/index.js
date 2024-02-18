import React, {useState, useRef} from 'react';
import * as S from "./styles";
import {useNavigate} from 'react-router-dom';
import { setUserSession } from '../../service/AuthService';
import axios from 'axios';

import manometro from "../../assets/manometro.webp";

import fundo_manometro from "../../assets/fundo_manometro.png";
import TarixLogoRoxo from '../../assets/TARIX_ROXO_LARGE.png';

import GasesData from '../../assets/logo_GasesData_G_AZUL_191970.png'

import fundo_manometro_2 from "../../assets/industrail_manometer_2x_flat.png"




const loginAPIUrl = " https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/login"

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

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
        //console.log(response.data.user); console.log(response.data.token);
        //console.log("so far so good");
        //props.history.push('/premium-content');
        navigate('/AbrigoDeGases', props);
        //console.log("Login successful");
        //alert("Bem vindo ao Tarix GasesData!");

    }).catch((error) => {
        if (error.response.status === 401 || error.response.status === 403 || error.response.status === 400) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage('Erro no processo de login. Por favor, tente novamente mais tarde.');
        }
    })
    
    }

    return (
        
        <div>
            <S.Container>

            {/*<img src = {fundo_manometro_2} alt="fundo_manometro_2" />*/}


            <S.Right>  


            
           
            <form onSubmit={submitHandler}>

             

               

                
                <S.styledEntryCard>  

                <S.Logo>

                    <img src={TarixLogoRoxo} alt="TarixLogo" />
                </S.Logo>
               
               <S.Xlogin>
                <h2>usuário:</h2><input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br />
                
                
                <h2>senha:</h2> <input type="password" value={password} onChange={event => setPassword(event.target.value)} /><br />
                
                </S.Xlogin>

                <S.styledButton> 
                
            <input type="submit" value="Login" />

                </S.styledButton> 

                
            </S.styledEntryCard>
           
            </form>

            <S.Message>
            {errorMessage && <p className="message">{errorMessage}</p>}
            </S.Message>

            <S.FlagEN>
            <img
                alt="United States"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>

            </S.FlagEN>

            <S.FlagES>
            <img
                alt="España"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"/>

            </S.FlagES>

            <S.FlagPT>
            <img
                alt="Brazil"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"/>

            </S.FlagPT>

            <S.FlagDE>
            <img
                alt="Alemanha"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"/>

            </S.FlagDE>

            <S.LogoGasesData> 

            <img src={GasesData} alt="GasesData" />

            </S.LogoGasesData>
            </S.Right>  

            <S.Footer>
            <h3>© 2023, TariX, Inc. ou suas afiliadas.</h3>
            <h2>Width: {windowSize.current[0]} x Height: {windowSize.current[1]} - r. 53_6</h2>

            </S.Footer>

            <S.BottomScreen >

            <S.ScreenSize_1>


                
            </S.ScreenSize_1>

            <S.ScreenSize_2>

              

            </S.ScreenSize_2>

            <S.Versao>

             
            </S.Versao>


            </S.BottomScreen >


            </S.Container>
        </div>
     
    );
}


export default Login;