import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 40%;
  //background: #999;

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

export const VALOR_PressaoAtual = styled.div`
  width: 20vw; // 200px
  height: 50vh; // 50 px

  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: relative;
  top: 30px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
    position: relative;
  }
`;

export const UNIDADE_PressaoAtual = styled.div`
  width: 100px;
  height: 50px;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 30px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
// COMEÇO NOVO VALOR ALARME

export const NOVO_Pressao_Alarme_Atual = styled.div`
  width: 300px;
  height: 80px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 90px;
  left: 0px;
  display: flex;
  align-items: center;
  h3 {
    font-size: 24px;
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
`;

export const NOVO_VALOR__Alarme_Pressao_Atual = styled.div`
  width: 200px;
  height: 45px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 125px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 30px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
    position: relative;
  }
`;

export const NOVO_UNIDADE_Alarme_Atual = styled.div`
  width: 100px;
  height: 50px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 120px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
// FINAL DO NOVO PAINEL ALARME

// COMEÇO TROCA PREVISTA

export const TROCAPREVISTA = styled.div`
  width: 12.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 0.75vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DA TROCA PREVISTA

// COMEÇO CONSUMO MÉDIO

export const CONSUMOMEDIO = styled.div`
  width: 10.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 13.75vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DO CONSUMO MEDIO

// COMEÇO CUSTO MÉDIO

export const CUSTOMEDIO = styled.div`
  width: 9.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 24.75vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL DO CUSTO MEDIO

// COMEÇO FORNECEDOR GASES

// COMEÇO CAIXA FORNECEDOR

export const CAIXA_FORNECEDOR_GASES = styled.div`
  width: 25vw;
  height: 37vh;
  background-color: #c1e4fc;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: -80vh;
  left: 50vw;
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

export const FORNECEDOR_GASES = styled.div`

  width: 33vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 3vh;
  left: -7vw;
  display: flex;
  justify-content: center;

  `;

  export const FORNECEDOR_GASES_SAVE_BUTTON = styled.div`
  

  Button {

    width: 4vw;
    height: 6vh;

    position: absolute;
    top:3vh;
    left: 19vw;


  }
`;

export const FORNECEDOR_GASES_CHECK_BOX = styled.div`
    
        display: flex;
        position: absolute;
        top: 3.5vh;
        left: 15vw;


`;

export const VALOR_EMAIL = styled.div`
  width: 12vw;
  height: 8vh;
  
  border-radius: 15px;
  position: absolute;
  top: 14vh;
  left: 0.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 225px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;


export const VALOR_CELULAR = styled.div`
  width: 10vw;
  height: 8vh;
 // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 14vh;
  left: 13.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 225px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const VALOR_CUSTO_CILINDRO = styled.div`
  width: 7vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 26vh;
  left: 0.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {

    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;


export const VALOR_VOLUME = styled.div`
  width: 7vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 26vh;
  left: 9vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {

font-size: 12px;
font-weight: normal;
color: #000000;
font-family: "Roboto", sans-serif;
}

`;


export const VALOR_LOTE1 = styled.div`
  width: 7vw;
  height: 8vh;
 
  border-radius: 15px;
  position: absolute;
  top: 26vh;
  left: 17vw;
  display: flex;
  align-items: center;
  justify-content: center;

 

`;



// FINAL CAIXA FORNECEDOR

// INÍCIO CAIXA INSTALADOR DE GASES


export const CAIXA_INSTALACAO_GASES = styled.div`
  width: 28vw;
  height: 20vh;
    background-color: #60b9f7;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: -35vh;
  left: 22vw;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const INSTALADOR_GASES = styled.div`

  width: 33vw;
  height: 8vh;

  border-radius: 15px;
  position: relative;
  top: -4vh;
  left: -1vw;
  display: flex;
  justify-content: center;

  `;

  export const INSTALADOR_SAVE_BUTTON = styled.div`
  

  Button {

    width: 6vw;
    height: 6vh;

    position: relative;
    top:-4vh;
    left: -1vw;


  }
`;

export const INSTALADOR_GASES_CHECK_BOX = styled.div`
    
        display: flex;
        position: absolute;
        top: 3.5vh;
        left: 15vw;


`;

export const INSTALADOR_EMAIL = styled.div`
  width: 12vw;
  height: 8vh;
  
  border-radius: 15px;
  position: absolute;
  top: 10vh;
  left: 0.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 225px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;


export const INSTALADOR_CELULAR = styled.div`
  width: 10vw;
  height: 8vh;
 // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 10vh;
  left: 13.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 225px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;



// FINAL CAIXA INSTALADOR DE GASES


export const UNIDADE_EMAIL = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 590px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const UNIDADE_CELULAR = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 630px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
///////////////////



export const UNIDADE_CUSTO_CILINDRO = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 590px;
  left: -200px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const UNIDADE_LOTE = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 630px;
  left: -200px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
/////////////////////////////

///////////////////

export const UNIDADE_VOLUME = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 590px;
  left: -400px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
//////////////////

export const VALOR_DATA_CONECTADO = styled.div`
  width: 115px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 630px;
  left: -322px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 115px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const UNIDADE_DATA_CONECTADO = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 630px;
  left: -400px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
/////////////////////////////

export const VALOR_HORA_CONECTADO = styled.div`
  width: 115px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 670px;
  left: -322px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 115px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const UNIDADE_HORA_CONECTADO = styled.div`
  width: 75px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 670px;
  left: -400px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
/////////////////////////////

export const FORNECEDOR_LOTE = styled.div`
  width: 300px;
  height: 35px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 750px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 15px;
    width: 300px;
    height: 30px;
    position: relative;
    top: 0px;
    left: 0px;
  }

  h3 {
    font-size: 20px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const SAVE_LOTE = styled.div`
  display: flex;
  position: relative;
  top: 732px;
  left: 235px;

  input {
    width: 50px;
    height: 35px;
    border-radius: 15px;
    background-color: #00bfa5;
  }
  cold {
    background-color: #00a8ff;
  }

  hot {
    background-color: #ff5200;
  }
`;

export const CHECKBOX_LOTE = styled.div`
  display: flex;
  position: relative;
  top: 558px;
  left: 200px;
`;

// FINAL LOTE

// COMEÇO CONECTADO

export const CAIXA_CONECTADO = styled.div`
  width: 45vw;//25vw
  height: 20.5vh;
  background-color:#f2f9fe;//green;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 0vh;//-80
  left:0vw; // 23vw
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
  width: 12.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 2vh;
  left: 0.75vw;
  display: flex;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// COMEÇO TESTE PARA O ALARME DE PRESSÃO

export const PressaoAlarmeTeste = styled.div`
  width: 12.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: relative;
  top: 0.5vh;
  left: -3.5vw;
  display: flex;

  justify-content: center;
  align-items: center;

  Button {
    width: 4vw;
    height: 3vh;

    position: relative;
    top: 3vh;
    left: 7vw;
  }
`;

// FINAL TESTE PARA O ALARME DE PRESSÃO

// COMEÇO NOVO VALOR ALARME - Outlined

export const O_NOVO_Pressao_Alarme_Atual = styled.div`
  width: 12.5vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 2vh;
  left: 14vw; // 9 vw
  display: flex;
  align-items: center;
  justify-content: center;

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
top:2.5vh;
left: 35.5vw; // 18vw


}

`

export const O_NOVO_VALOR__Alarme_Pressao_Atual = styled.div`
  width: 200px;
  height: 45px;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 125px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
  }

  .salvar {
    background: #035aa6;
  }

  .salvo {
    background: #ff5200;
  }
`;

export const O_NOVO_UNIDADE_Alarme_Atual = styled.div`
  width: 100px;
  height: 50px;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 120px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// FINAL DO NOVO PAINEL ALARME Outlined

export const CONECTADODATA = styled.div`
  width: 11.5vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 22vh;
  left: 0.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    font-family: "Roboto", sans-serif;
    position: relative;
    top: 0px;
    left: 10px;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const CONECTADOHORA = styled.div`
  width: 8vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 23vh;
  left: 7.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    font-family: "Roboto", sans-serif;
    position: relative;
    top: 0px;
    left: 10px;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const TEMPO_CONECTADO = styled.div`
  width: 7.5vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 22vh;
  left: 16.75vw;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 24px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

// FINAL CONECTADO

// INÍCIO ESTANQUEIDADE

export const RESULTADO_ESTANQUEIDADE = styled.div`
  width: 8.5vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 12.25vh;
  left: 35.0vw;
  display: flex;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const INICIO_ESTANQUEIDADE = styled.div`
  width: 7.5vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 32.0vh;
  left: 8.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;

export const DURACAO_ESTANQUEIDADE = styled.div`
  width: 7.5vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 32vh;
  left: 16.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
`;
// FINAL ESTANQUEIDADE

export const chart_container = styled.div`
  width: 800px;
  height: 200px;
`;

export const charts1 = styled.div`
  width: 600px;
  height: 180px;
  background: #012061;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 10px;
  left: 675px; //1050
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const charts2 = styled.div`
  width: 600px;
  height: 180px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 200px;
  left: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const charts3 = styled.div`
  width: 600px;
  height: 180px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 680px;
  left: 875px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;


export const LeftSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: relative;
  margin-top: 215vh;
  margin-left: -65vw;
  img {
    width: 700px;
    height: 640px;
  }
`;


export const Warning_1 = styled.div`

width: 37vw; //40vw
height: 4vh; //84vh
background-color: #60b9f7;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 0vh; // -30vh
  margin-left: 0vw; // -12vw


h1 {
font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: bold;
color: #f8612d;
align-items: left;
justify-content: center;
position: absolute;
margin-top: 0%;
margin-left: 0%;
}
`;


export const Warning_2 = styled.div`

width: 37vw; //40vw
height: 4vh; //84vh
background-color:#60b9f7;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: -30vh; // 40vh
  margin-left: -12vw; // -42vw


h1 {
font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: bold;
color: black;
align-items: left;
justify-content: center;
position: absolute;
margin-top: 0%;
margin-left: 0%;
}
`;


/*
export const LeftSide = styled.div`
  width: 20vw;
  height: 8vh;
  //background: yellowgreen;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.5vw;
  top: 7.5vh;

  img {
    width: 700px;
    height: 640px;
  }

  h1 {
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #f8612d;
align-items: center;
justify-content: center;
position: absolute;
margin-top: -20%;
margin-left: 15%;
}
`;
*/
// CILINDRO 1 HÉLIO
export const Cilindro_1_HE = styled.div`
  width: 20vw;
  height: 70vh;
 //background: #d6e2e2;

  position: absolute;
  top: 2.5vh; //12.5vh
  margin-left: 0.2vw;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -200px;
    margin-left: 125px;
  }

  img {
    width: 22vw;
    height: 80vh;//70
   // background: #a6e2e9;
    position: relative;
    top: 0vh;
    left: 0.5vw;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    color: #010101;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -35px;
    margin-left: 55px;
  }
`;

// FIXAS LARANJAS DA CENTRAL HÉLIO - CILINDRO 1

export const HE1001 = styled.div`
  display: flex;
  position: absolute;
  left: 1.55vw;
  top: 22vh;

  img {
    width: 14vw;
    height: 60vh;
  }
`;

// ÚLTIMA FAIXA LARANLA - PERTO VÁLVULA DO CILINDRO 1

export const HE1001L = styled.div`
  display: flex;
  position: absolute;
  left: 1.55vw;
  top: 12vh;

  img {
    width: 24vw;
    height: 70vh;
  }
`;

export const HE_ALARME5 = styled.div`
  
  
  display: flex;
  position: absolute;
  left: 15.5vw;
  top:80vh;

  img {
    width: 4vw;
    height: 4vh;
  }

 
`;


export const HE_ALARME10 = styled.div`
  
  
  display: flex;
  position: absolute;
  left: 15.5vw;
  top:60vh;

  img {
    width: 4vw;
    height: 4vh;
  }

 
`;

export const Config = styled.div`
  img {
    width: 80px;
    height: 80px;
    position: absolute;
    margin-left: 370px;
    margin-top: -350px;
  }

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;
