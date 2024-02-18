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
  margin-top: -5vh;
  margin-left: 10vw;
`;

// COMEÇO FORNECEDOR GASES

// COMEÇO CAIXA FORNECEDOR

export const CAIXA_FORNECEDOR_GASES = styled.div`
  width: 45vw;
  height: 20.5vh;
  background-color: #c1e4fc;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 0vh;
  left: 0vw;
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
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 2.7vh;
  left: -7vw;
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
    height: 7.5vh;

    position: absolute;
    top: 2.5vh;
    left: 36vw;
  }
`;

export const FORNECEDOR_GASES_CHECK_BOX = styled.div`
  display: flex;
  position: absolute;
  top: 3.5vh;
  left: 15vw;
`;

export const VALOR_CELULAR = styled.div`
  width: 16vw;
  height: 8vh;
  // box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
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
    width: 16vw;
    height: 4vh;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const VALOR_EMAIL = styled.div`
  width: 30vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: -5.5vw;
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
`;

export const VALOR_CUSTO_CILINDRO = styled.div`
  width: 9vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 19.25vw;
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
`;

export const VALOR_VOLUME = styled.div`
  width: 6vw;
  height: 8vh;
  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 29vw;
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
`;

export const VALOR_LOTE1 = styled.div`
  width: 8vw;
  height: 8vh;

  border-radius: 15px;
  position: absolute;
  top: 12vh;
  left: 35.75vw;
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


`;


