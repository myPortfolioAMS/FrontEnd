import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40%;
  //background: #999;


 
  align-items: center;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 1296px) {
  
    width: 50%;
    margin-left: -22.5vw;
  }
`;

export const RightSide = styled.div`
  width: 75vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: relative;
  margin-top: -5vh;
  margin-left: 10vw;

  @media screen and (max-width: 1296px) {
    margin-top: -8vh;
    margin-left: -2vw;
  }
`;

// COMEÇO CONECTADO

export const CAIXA_CONECTADO = styled.div`
  width: 90vw; //25vw
  height: 10.5vh;
  background-color: #f2f9fe; //green;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 7vh; //-80
  left: -6vw; // 23vw
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

  @media screen and (max-width: 1296px) {

  
    height: 10.5vh;
   
  }
`;

export const Titulo = styled.div`

h1 {



  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: -10vh;
  left: 2vw;
  color:#191970
}

@media screen and (max-width: 1296px) {

  h1 {

    top: -20vh;


  }
}

`;

export const GAS_SENDO_UTILIZADO = styled.div`
  width: 26vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 1.5vh;
  left: 2vw;
  display: flex;

  justify-content: center;
  align-items: center;



  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #191970;
    font-family: "Roboto", sans-serif;
    position: absolute;
    top: 2vh;
    left: 2vw;

  }

  .MuiInputLabel-root {
    font-size: 18px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

@media screen and (max-width: 1296px) {





.MuiInputLabel-root {
font-size: 16px;
font-weight: normal;
//color: #000000;
font-family: "Roboto", sans-serif;
}

#consumo{

  font-size : 14px;
}
}
`;
export const INICIO = styled.div`

`;


// COMEÇO NOVO VALOR ALARME - Outlined

export const O_NOVO_Pressao_Alarme_Atual = styled.div`
  width: 16vw;
  height: 8vh;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 1.75vh;
  left: 64vw; 
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiInputLabel-root {


font-size: 18px;
font-weight: normal;
//color: #000000;
font-family: "Roboto", sans-serif;}

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
    left: 27.5vw;
  }

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 1296px) {
    width: 14vw;
  height: 4vh;
  // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 15px;
  position: absolute;
  top: 3.75vh;
  left: 64vw; 
  display: flex;
  align-items: center;
  justify-content: center;



    .MuiInputLabel-root {


      font-size: 16px;
font-weight: normal;
//color: #000000;
font-family: "Roboto", sans-serif;}

  ::placeholder {
    font-weight: bold;
    color: blue;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }

#label-alarme {

font-size: 14px;
}


  }

`;






// FINAL DO CONSUMO MEDIO



export const ALARME_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 6vh;

    position: absolute;
    top: 2.5vh;
    left: 36vw; // 18vw
    left: 81vw;
    cursor: pointer;
    transition: 0.3s ea;
  }
  &:hover {
   background-color: #F0F8FF;

  opacity: 0.5;
  }

  @media screen and (max-width: 1296px) {

    Button {
    width: 8vw;
    height: 5vh;

    position: absolute;
    top: 3.5vh;
    left: 81vw; // 18vw
  }
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


@media screen and (max-width: 1296px) {

top: 11.2vh;

.MuiInputLabel-root {
font-size: 16px;
font-weight: normal;
//color: #000000;
font-family: "Roboto", sans-serif;
}

#estanqueidade{

  font-size : 14px;
}
}
`;

export const ScreenSize_1 = styled.div`
  width: 37vw; //40vw
  height: 2vh; //84vh

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 9vh;
  margin-left: -42vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -135%;
    margin-left: -15%;
  }

  @media screen and (max-width: 1296px) {

    h2 {
    margin-top: -115%;
    margin-left: -15%;
    }
  }
`;

export const ScreenSize_2 = styled.div`
  width: 37vw; //40vw
  height: 2vh; //84vh

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 9vh;
  margin-left: -42vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -145%;
    margin-left: -15%;
  }

  @media screen and (max-width: 1296px) {

h2 {
margin-top: -125%;
margin-left: -15%;
}
}
`;
