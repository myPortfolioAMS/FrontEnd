import React, { useRef } from "react";
import * as S from "./styles";

import { removeUserSession } from "../../service/AuthService";

import { useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const logoutHandler = () => {
    removeUserSession();

    navigate("/login", props);
    alert("Log out successful");
  };

  return (
    <S.Container>
      <S.LeftSide>
        <h3>© 2023, TariX, Inc. ou suas afiliadas.</h3>
      </S.LeftSide>

      <S.FarLeftSide>
        <h3>r:53_7</h3>
      </S.FarLeftSide>

      <S.BottomScreen>
        <S.ScreenSize_1>
          <h2>Width: {windowSize.current[0]}</h2>
        </S.ScreenSize_1>

        <S.ScreenSize_2>
          <h2>Height: {windowSize.current[1]}</h2>
        </S.ScreenSize_2>
      </S.BottomScreen>

      <S.CenterSide>
        <a href="www.tarix.com.br">
          <h3>www.tarix.com.br</h3>
        </a>
      </S.CenterSide>

      <S.Privacidade>
        <h3>Privacidade</h3>
      </S.Privacidade>

      <S.Termos>
        <h3>Termos</h3>
      </S.Termos>

      <S.PreferenciaDeCookies>
        <h3>Preferência de Cookies</h3>
      </S.PreferenciaDeCookies>
    </S.Container>
  );
}

export default Footer;
