import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // background: #999;

  //display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  //padding-left: 150px;
`;

export const RightSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: relative;
  margin-top: -2vh;
  margin-left: 10vw;
`;

// COMEÇO NOVO VALOR ALARME

export const NOVO_Pressao_Alarme_Atual = styled.div`
  width: 52.5vw;
  height: 8vh;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 89px;
  left: 0px;
  display: flex;
  align-items: center;
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: -19px;
    left: 60px;
  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DO NOVO PAINEL ALARME

// COMEÇO TROCA PREVISTA

export const TROCAPREVISTA = styled.div`
  width: 12vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 11.6vh;
  left: 1vw;
  //display: flex;

  //justify-content: center;
  // align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DA TROCA PREVISTA

// COMEÇO CONSUMO MÉDIO

export const CONSUMOMEDIO = styled.div`
  width: 10vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 11.2vh;
  left: 14vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DO CONSUMO MEDIO

// COMEÇO CUSTO MÉDIO

export const CUSTOMEDIO = styled.div`
  width: 10vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 11.2vh;
  left: 25vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DO CUSTO MEDIO

// COMEÇO CONECTADO

export const CAIXA_CONECTADO = styled.div`
  width: 45vw; //25vw
  height: 20.5vh;
  background-color: #f2f9fe; //green;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 0vh; //-80
  left: 0vw; // 23vw
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 40px;
    font-weight: normal;
    color: red;
    font-family: "Roboto", sans-serif;
    position: relative;
    top: 0px;
    left: -120px;
  }
`;

export const PressaoAtual = styled.div`
  width: 12vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 2vh;
  left: 1vw;
  display: flex;

  justify-content: center;
  align-items: center;

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// COMEÇO NOVO VALOR ALARME - Outlined

export const O_NOVO_Pressao_Alarme_Atual = styled.div`
  width: 12vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 2vh;
  left: 14vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  ::placeholder {
    font-weight: bold;
    color: blue;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }

  Button {
    width: 1.5vw;
    height: 3vh;
    position: absolute;
    top: 3vh;
    left: 7.5vw;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const ALARME_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 7vh;

    position: absolute;
    top: 2.5vh;
    left: 36vw; // 18vw
  }
`;

// INÍCIO ESTANQUEIDADE

export const RESULTADO_ESTANQUEIDADE = styled.div`
  width: 8vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 11.5vh;
  left: 36vw;
  display: flex;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  ::placeholder {
    font-weight: bold;
    color: blue;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
`;

export const LeftSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: absolute;
  margin-top: 80vh;
  margin-left: -5vw;
`;

export const Warning_1 = styled.div`
  width: 37vw; //40vw
  height: 2vh; //84vh
  background-color: #c1e4fc;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  box-shadow: rgba(0, 0, 0, 0.75);
  display: flex;

  position: relative;
  margin-top: 40vh;
  margin-left: -42vw;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;
    font-style: italic;
    color: #f00; // #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 0%;
    margin-left: 0%;
  }

  img {
    width: 2vw;
    height: 2vh;
    position: relative;
    margin-top: 0%;
    margin-left: -12%;
  }
`;

export const Warning_2 = styled.div`
  width: 37vw; //40vw
  height: 2vh; //84vh
  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 40vh;
  margin-left: -42vw;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 0%;
    margin-left: 0%;
  }

  img {
    width: 2vw;
    height: 2vh;
    position: relative;
    margin-top: 0%;
    margin-left: -12%;
  }
`;
