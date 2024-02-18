import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40%;
  //background: #F0F8FF;

  //display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  //padding-left: 150px;

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


export const CAIXA_INSTALACAO_GASES = styled.div`
  width: 90vw; //25vw
  height: 20vh;
  background-color: #f2f9fe; //green;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: -14vh; //-80
  left: -15vw; // -15vw
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

  }
`;


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
    left: 7.5vw;
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
  top: 4vh;
  left: 14vw; 
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

export const ALARME_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 5vh;

    position: absolute;
    top: 2.5vh;
    left: 36vw; // 18vw
  }

  @media screen and (max-width: 1296px) {

    Button {
    width: 8vw;
    height: 6vh;

    position: absolute;
    top: 2.5vh;
    left: 36vw; // 18vw
  }
  }

`;


// COMEÇO FORNECEDOR GASES

// COMEÇO CAIXA FORNECEDOR

export const CAIXA_FORNECEDOR_GASES = styled.div`
  width: 90vw;
  height: 20vh;
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

export const INSTALADOR_GASES_CHECK_BOX = styled.div`
  display: flex;
  position: absolute;
  top: 2.5vh;
  left: -0.5vw;

  
`;


export const ID_FORNECEDOR_GASES = styled.div`
  width: 5vw;
  height: 8.5vh;

  border-radius: 15px;
  position: relative;
  top: -4vh;
  left: -38.0vw;
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
    top: -5vh;
    left: -37vw;

    .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label-ID-fornecedor-gases-inst {
      font-size: 14px;
    }


  }
`;

export const INSTALADOR_GASES = styled.div`
  width: 33vw;
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 1.8vh;
  left: 0vw;
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
  width: 37vw;
  height: 7vh;
  top: 1.5vh;
  left: -0.5vw;

  .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label-instalador-gases{
      font-size: 14px;
    }

  
  }
`;




export const VALOR_CONTATO_FORNECEDOR = styled.div`
  width: 32vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 1.6vh;
  left: 19vw;
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
    width: 18vw;
    height: 7vh;
    position: absolute;
    top: 2.5vh;
    left: 28.0vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-nome-contato-fornecedor-inst {
    font-size: 14px;
  }


  }
`;


export const VALOR_CELULAR = styled.div`
  width: 16vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 1.6vh;
  left: 45vw;
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
    top: 2.5vh;
    left: 47.5vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-celular-inst {
    font-size: 14px;
  }


  }
`;

export const INSTALADOR_EMAIL = styled.div`
  width: 30vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 1.6vh;
  left: 56vw;
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
    top: 2.5vh;
    left: 65vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-email-inst {
    font-size: 14px;
  }


  }
`;


export const NUMERO_RUA = styled.div`
  width: 5vw;
  height: 8.5vh;

  border-radius: 15px;
  position: relative;
  top: 5.7vh;
  left: -24.7vw;
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
  top: 4.75vh;
  left: -23.0vw;

  .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label-numero-rua-inst {
      font-size: 14px;
    }

  
  }
`;

export const LOGRADOURO = styled.div`
  width: 33vw;
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 11.5vh;
  left: -5.75vw;
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
  width: 35vw;
  top: 12vh;
  left: -5.5vw;

  .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label-logradouro-inst {
      font-size: 14px;
    }

  
  }
`;



export const BAIRRO = styled.div`
  width: 8vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 11.3vh;
  left: 26vw;
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
    width: 8.5vw ;
    height: 7vh;
    position: absolute;
    top: 13vh;
    left: 28vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-bairro-inst {
    font-size: 14px;
  }


  }
`;

export const CIDADE = styled.div`
  width: 9.5vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 11.3vh;
  left: 34.75vw;
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
    width: 8vw;
    height: 7vh;
    position: absolute;
    top: 13vh;
    left: 37vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-cidade-inst {
    font-size: 14px;
  }


  }
`;



export const CEP = styled.div`
  width: 10vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 11.25vh;
  left: 51vw;
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
    width: 9vw;
    height: 7vh;
    top: 13vh;
    left: 51vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-cep-inst {
    font-size: 14px;
  }


  }
`;

export const UF = styled.div`
  width: 5vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 11.3vh;
  left: 45vw;
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
    width: 5vw;
    height: 7vh;
    position: absolute;
    top: 13vh;
    left: 45.5vw;

  .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

  #label-uf-inst {
    font-size: 14px;
  }


  }
`;


export const VALOR_DATA = styled.div`
  width: 8vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 11.00vh;
  left: 81vw;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    font-size: 16px;
    border-radius: 15px;
    width: 16.5vw; //225px
    height: 4vh; //30px
    position: relative;
    top: 0px;
    left: 0vw;
  }
  img  {
    width: 1.5vw;
    height: 2.5vh;
    position: absolute;
    top: 2.5vh;
    left: 14.5vw;
  }


  @media screen and (max-width: 1296px) {
  width: 11.0vw;
  top: 12.5vh;
  left:78.5vw;
  //left:26.5vw;

.MuiInputLabel-root {
  font-size: 16px;
  font-weight: normal;
  //color: #000000;
  font-family: "Roboto", sans-serif;
}

#label-data-inst{
  font-size: 14px;
}


}
`;


export const INSTALADOR_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 6vh;
  //background-color: #191970;

    position: absolute;
    top: 2.0vh;
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
    left: 81vw;
  }
}
  
`;



// FINAL CAIXA FORNECEDOR



