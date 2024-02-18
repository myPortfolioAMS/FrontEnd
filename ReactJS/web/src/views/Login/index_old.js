import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";

import PreFooter from "../../components/PreFooter";

function Login() {
  return (
    <S.Container>
      <S.Login>
        <h3> Bem vindo ao portal da Tarix - GasesData</h3>
        <p>
          <a href="https://tarix.auth.sa-east-1.amazoncognito.com/login?client_id=6mbb4i5i2g4of0viqd9as52g74&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/home">
            Register or Login
          </a>
        </p>
      </S.Login>

      <PreFooter />
    </S.Container>
  );
}

export default Login;
