import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40%;
  //background: #999;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 15vw;

  //padding-left: 150px;

  @media screen and (max-width: 1296px) {
    width: 50%;
  }
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

  @media screen and (max-width: 1296px) {
    margin-top: -8vh;
    margin-left: -2vw;
  }
`;


export const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    //background-color: #000000;
    margin-top: 11vh;

    
    @media screen and (max-width: 1838px) {
      margin-top: 13vh;

    }
`;


export const FeaturedContainer2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 11vh;
    justify-content: space-between;

    @media screen and (max-width: 1838px) {
      margin-top: 13vh;

    }
`;

export const FeaturedItem1 = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -10vh;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    //background-color: yellow;

    @media screen and (max-width: 1824px) {

    margin-top: -11vh;
    }
`;

export const FeaturedItem2 = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -10vh;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    //background-color: yellow;

    @media screen and (max-width: 1824px) {

      margin-top: -11vh;
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
        margin-left: 7px;
        color: green;
        @media screen and (max-width: 1920px) {
          margin-top: -5.5vh;
          margin-left: 4vw;
        }
    }.featuredIconNegative{
        color: red;
        margin-left: 7px;
        @media screen and (max-width: 1920px) {
          margin-top: -5.5vh;
          margin-left: 4vw;
        }
    }

    @media screen and (max-width: 1841px) {
    height: 3vh;
    margin: 10px 0px;

    h1{

      font-size: 1.75vw;
      position: relative;
      margin-left: 0.5vw;
      margin-top: 0.5vh;

      //margin-left: 9vw;
    }
    //

  
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
       // margin-left: 9px;
        color: green;
        position: absolute;
        margin-left: 5vw;
        margin-top: -5.5vh;
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

@media screen and (max-width: 1296px) {

  
height: 21.5vh;
top: -1vh;
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

export const FORNECEDOR_GASES_SAVE_BUTTON = styled.div`
  Button {
    width: 8vw;
    height: 7ovh;

    position: absolute;
    top: 2.5vh;
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


