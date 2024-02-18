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

  @media screen and (max-width: 1296px) {
    width: 50%;
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

// COMEÇO FORNECEDOR GASES

// COMEÇO CAIXA FORNECEDOR

export const CAIXA_FORNECEDOR_GASES = styled.div`
  width: 93vw;
  height: 20.5vh;
  background-color: #c1e4fc;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 0vh;
  left: -6vw;
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

  
height: 21.5vh;
top: -1vh;
}
`;

export const FORNECEDOR_GASES = styled.div`
  width: 32vw;
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 2.7vh;
  left: 6vw;
  display: flex;
  justify-content: center;

  input {
    border-radius: 15px;
    width: 16vw;
    height: 4vh;
    position: relative;
    top: 0px;
    left: 0px;
  }

  @media screen and (max-width: 1296px) {
  height: 7vh;
  top: 1.5vh;

  .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label-fornecedor-gases {
      font-size: 14px;
    }

  
  }
`;

export const ID_FORNECEDOR_GASES = styled.div`
  width: 5vw;
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 2.7vh;
  left: 1vw;
  display: flex;
  justify-content: center;

  input {
    border-radius: 15px;
    width: 16vw;
    height: 4vh;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const FORNECEDOR_GASES_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 4vh;
    background-color: #191970;

    position: absolute;
    top: 2.5vh;
    left: 84vw;
  }

  &:hover {
    background-color: #F0F8FF;

  }
  @media screen and (max-width: 1296px) {

    Button {
    width: 8vw;
    height: 5vh;

    position: absolute;
    top: 3.5vh;
    left: 36vw;
  }
}
  
`;

export const FORNECEDOR_GASES_CHECK_BOX = styled.div`
  display: flex;
  position: absolute;
  top: 3.5vh;
  left: 24vw;

  
`;

export const VALOR_CONTATO_FORNECEDOR = styled.div`
  width: 32vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
  left: 29.5vw;
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
    width: 16.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }

  @media screen and (max-width: 1296px) {
    width: 15vw;
    height: 7vh;
    position: absolute;
    top: 13vh;
    left: 0.5vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-email {
    font-size: 14px;
  }


  }
`;


export const VALOR_CELULAR = styled.div`
  width: 20vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 11.5vh;
  left: -0.2vw;
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
    width: 16vw;
    height: 4vh;
    position: relative;
    top: 0px;
    left: 0px;
  }

  @media screen and (max-width: 1296px) {
    height: 7vh;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-celular {
    font-size: 14px;
  }


  }
`;

export const VALOR_EMAIL = styled.div`
  width: 40vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 11.5vh;
  left: 19.5vw;
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
    width: 16.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }

  @media screen and (max-width: 1296px) {
    width: 15vw;
    height: 7vh;
    position: absolute;
    top: 13vh;
    left: 0.5vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-email {
    font-size: 14px;
  }


  }
`;

export const VALOR_CUSTO_CILINDRO = styled.div`
  width: 9vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
  left: 54vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 16.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }

  @media screen and (max-width: 1296px) {
    width:10vw;
    top: 12.5vh;
    left:16vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-custo-cilindro {
    font-size: 14px;
  }


  }
`;



export const VALOR_VOLUME = styled.div`
  width: 6vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
  left: 63.5vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  input {
    border-radius: 15px;
    width: 18.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }


  @media screen and (max-width: 1296px) {
    width: 8.5vw;
    top: 12.5vh;
    left:26.5vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-volume {
    font-size: 14px;
  }


  }
`;

export const VALOR_DATA = styled.div`
  width: 8vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
  left: 75.75vw;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 15px;
    width: 16.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }


  @media screen and (max-width: 1296px) {
  width: 8.5vw;
  top: 12.5vh;
  //left:26.5vw;

.MuiInputLabel-root {
  font-size: 16px;
  font-weight: normal;
  //color: #000000;
  font-family: "Roboto", sans-serif;
}

#label-lote1{
  font-size: 14px;
}


}
`;

// FINAL CAIXA FORNECEDOR

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

export const LeftSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: absolute;
  margin-top: -8vh;
  margin-left: 10vw;

`;

export const Warning_1 = styled.div`
  width: 40vw; //40vw
  height: 2vh; //84vh
  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 40vh;
  margin-left: -41.75vw;

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
    margin-left: -11.75%;
  }

  @media screen and (max-width: 1296px) {
    margin-top: 41.5vh;
    margin-left: -41.75vw;
    h1 {
      font-size: 9px;
      margin-top: 0%;
      margin-left: -40%;

    }

    img {
    margin-top: 0%;
    margin-left: -45.75%;
    
    }
  }

   

`;



export const Warning_2 = styled.div`
  width: 40vw; //40vw
  height: 2vh; //84vh
  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 40vh;
  margin-left: -44vw;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;
    color: #f00;// #000; //#f8612d;
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
    margin-left: -6%;
  }

  @media screen and (max-width: 1296px) {
    margin-top: 41.5vh;
    margin-left: -41.75vw;
    
    h1 {
      font-size: 9px;
      margin-top: 0%;
      margin-left: -40%;

    }

    img {
    margin-top: 0%;
    margin-left: -45.75%;
    
    }
  }


`;


