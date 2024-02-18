import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 40%;
  //background: #999;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -43.5vh;
  margin-left: 75vw;

  //padding-left: 150px;

  @media screen and (max-width: 1296px) {
    width: 50%;
  }
`;
{/* 
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

  @media screen and (max-width: 1296px) {
    margin-top: -14vh;
    margin-left: -2vw;

  }
`;
*/}

export const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    //background-color: #000000;
    margin-top: 0vh;
    margin-left: 0vw;
    
`;


export const FeaturedContainer2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 0vh;
    justify-content: space-between;
    margin-left: 0vw;
    
`;

export const FeaturedItem = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -10vh;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    `;

export const FeaturedItem2 = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -10vh;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 1841px) {

      height: 10vh;
    //background-color: #60b9f7;

    }
`;


export const FeaturedTitle = styled.span`
    //font-family: 'Roboto', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    height: 2vh;
    h2{
    margin-top: 1vh;
    }
`;

export const FeaturedMoneyContainer = styled.div`
    height: 3vh;
    margin: 10px 0px;
    display: flex;
    align-items: center;


    .featuredMoney{
        font-size: 30px;
        font-weight: 600;
        margin-left: 9vw;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }.featuredIconPositive{
        font-size: 34px;
        margin-left: 5px;
        color: green;
        @media screen and (max-width: 1920px) {
          margin-top: -5.5vh;
          margin-left: 4vw;
        }
    }.featuredIconNegative{
        font-size: 34px;
        margin-left: 5px;
        color: red;
        @media screen and (max-width: 1920px) {
          margin-top: -5.5vh;
          margin-left: 4vw;
        }
    }

    @media screen and (max-width: 1841px) {
      height: 3vh;
      margin-top: 10vh;

      h1{

        font-size: 1.75vw;
        position: relative;
        margin-left: 0.5vw;
        margin-top: -12.0vh;


        }

  
    .featuredMoney{
        font-size: 30px;
        font-weight: 600;
        margin-left: 9vw;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }.featuredIconPositive{
        font-size: 34px;
        color: green;
        position: absolute;
        margin-left: 5vw;
        margin-top: -5.5vh;

        @media screen and (max-width: 1920px) {
          margin-top: -5.5vh;
          margin-left: 4vw;
        }
    }.featuredIconNegative{
        color: red;
        position: absolute;
        margin-left: 5vw;
        margin-top: -5.5vh;


    }
  }
`;
export const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
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

  @media screen and (max-width: 1296px) {

  
height: 12.0vh;
top: -54vh;

}

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

  @media screen and (max-width: 1296px) {
    width: 37vw;
    height: 7vh;
    top: 1.5vh;
    left: -9.0vw;

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

  export const INSTALADOR_SAVE_BUTTON = styled.div`
  

  Button {

    width: 8vw;
    height: 4.0vh;

    position: absolute;
    top:2.5vh;
    left: 36vw;


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

  @media screen and (max-width: 1296px) {
    width: 15vw;
    height: 7vh;
    position: absolute;
    left : 20vw;

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
    margin-top: -1.5%;
    margin-left: 0%;
  }

  img {
    width: 2vw;
    height: 2vh;
    position: relative;
    margin-top: -1.5%;
    margin-left: -11.75%;
  }

  @media screen and (max-width: 1296px) {

    width: 30vw; //40vw
    h1 {
      font-size: 9px;
      margin-top: 0%;
      margin-left: -53%;

    }

    img {
    margin-top: 0%;
    margin-left: -61%;
    
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

  @media screen and (max-width: 1296px) {

width: 30vw; //40vw
h1 {
  font-size: 9px;
  margin-top: 0%;
  margin-left: -53%;

}

img {
margin-top: 0%;
margin-left: -61%;

}
}




`;



