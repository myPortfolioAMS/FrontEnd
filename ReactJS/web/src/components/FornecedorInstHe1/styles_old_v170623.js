import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 20%;
  //background: #999;

 // display: flex;
 align-items: center;
 justify-content: center;
  position: absolute;
  //margin-top: 0px;
//  margin-left: 0px;

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
  margin-top: -11vh;
  margin-left: 10vw;
`;


// INÍCIO CAIXA INSTALADOR DE GASES


export const CAIXA_INSTALACAO_GASES = styled.div`
  width: 45vw;
  height: 12.0vh;
    background-color: #60b9f7;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: -49vh;
  left: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const INSTALADOR_GASES = styled.div`

  width: 33vw;
  height: 8.5vh;

  border-radius: 15px;
  position: absolute;
  top: 2.5vh;
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

  export const INSTALADOR_SAVE_BUTTON = styled.div`
  

  Button {

    width: 8vw;
    height: 7.5vh;

    position: absolute;
    top:2.5vh;
    left: 36vw;


  }
`;

export const INSTALADOR_GASES_CHECK_BOX = styled.div`
    
        display: flex;
        position: absolute;
        top: 3.5vh;
        left: 15vw;


`;

export const INSTALADOR_EMAIL = styled.div`
  width: 16vw;
  height: 8vh;
  
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



export const LeftSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: absolute;
  margin-top: -3.7vh;
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
  margin-top: -34vh;
  margin-left: -11.75vw;

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
  margin-top: -34vh;
  margin-left: -11.75vw;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;
    font-style: italic;
    color: #ff0000; //#000; #f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 0%;
    margin-left: -.5%;
  }

  img {
    width: 2vw;
    height: 2vh;
    position: relative;
    margin-top: 0%;
    margin-left: -11.75%;
  }


`;



