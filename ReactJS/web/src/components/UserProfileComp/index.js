import React, {useState, useEffect} from 'react';
import * as S from "./styles";

import { TextField } from "@mui/material";

import { getUser, getToken, setUserSession, removeUserSession } from "../../service/AuthService";
import api_login from '../../service/api';



function UserProfileComp (nome_bd, email_bd, password_bd, empresa_bd, cep_bd, celular_bd) {

    const [loginData, setLoginData] = useState([]);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [empresa, setEmpresa] = useState();
    const [cep, setCep] = useState();
    const [celular, setCelular] = useState();



    const requestConfig = {
        headers: {
          "x-api-key": "sxqmhhONeJ88nV7OIQAnq8LhaCMVhBEX2hHgOwZ4",
          //'Content-Type': 'application/json',
          //"Access-Control-Allow-Headers" : "Content-Type",
          //"Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      };
    

    const user_full = getUser();
    console.log("user_full: " + user_full);
    const username = user_full !== "undefined" &&  user_full ? user_full.username : "Usuário não encontrado";
    console.log("username: " + username);

    async function getLoginData(username) {
        await api_login
            .get(
                "https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/getdata?username="+username,
            )
            .then((response) => {
                setLoginData(response.data);
                console.log("response data XXX :",loginData);
            })
            .catch((error) => {
              console.log(error);
            });
    }

    useEffect(() => {
        getLoginData(username);
    }, [email_bd, nome_bd, password_bd, empresa_bd, cep_bd, celular_bd]);

    {
        loginData.map((t) => (email_bd = t.email));
        loginData.map((t) => (nome_bd = t.name));
        loginData.map((t) => (password_bd = t.password));
        loginData.map((t) => (empresa_bd = t.empresa));
        loginData.map((t) => (cep_bd = t.cep)); 
        loginData.map((t) => (celular_bd = t.celular));

        console.log("loginData: ", loginData);

        const NOME = nome_bd;

        console.log("NOME: ", NOME);

        console.log(email_bd)


    }


    return (

        <S.Container>

            <S.Content>

                <S.UserData>

                <h1>Perfil do Usuário</h1>

                <p>Usuário: <input type="text" defaultValue={username}  /></p>
                

                <p>Nome: <input type="text" defaultValue={nome_bd}/></p>
                

                <p>email: <input type="text" /></p>
                

                <p>senha: <input type="text" /></p>
                

                <p>celular: <input type="text" /></p>
                

                <p>empresa: <input type="text" /></p>
                

                <p>CEP: <input type="text" /></p>
                

                <button type="button">
                        Sincronizar

                </button>
                </S.UserData>

            </S.Content>
        </S.Container>
    )
}

export default UserProfileComp;