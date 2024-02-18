import styled from "styled-components";





export const Container = styled.div`
  width: 100%;


  height: 40%;

  //background: #999;

  //display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 15vw;

  //padding-left: 150px;

  @media screen and (max-width: 1296px) {
    width: 50%;
  }
`;

export const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    //background: yellow;
`;


export const FeaturedContainer2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5vh;
    justify-content: space-between;
    //background: green;
`;

export const FeaturedItem = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -5vh;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;


export const FeaturedItemConsumo = styled.div`
    flex: 1;
    //margin: 0px 10px;
    margin-top: -5vh;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;


export const FeaturedTitle = styled.span`
    //font-family: 'Roboto', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
`;

export const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    color: #000000;

    img {

        width: 44px;
        height: 52px;
        position: relative;
        margin-top: 0vh;
        margin-left: 2vw;
    }
    .featuredMoney{
        font-size: 30px;
    
        font-weight: 600;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }.featuredIcon{
        font-size: 14px;
        margin-left: 5px;
        color: green;
    }.featuredIcon.negative{
        color: red;
        margin-left: 5px;
    }.featuredIconLogo{
      font-size: 44px;
      margin-left: 2vw;
      color: green;
    }.featuredIconLogoMan{
      font-size: 44px;
      margin-left: 1vw;
      color: green;

    }.featuredIconLogoNegative{
        color: red;
        font-size: 44px;
        margin-left: 2vw;
        @media screen and (max-width: 1920px) {
          position: absolute;
          margin-left: 11.5vw;
          margin-top: -5.5vh;
        }
        @media screen and (max-width: 1822px) {
          position: absolute;
          margin-left: 13.5vw;
          margin-top: -5.5vh;
        } 
        @media screen and (max-width: 1911px) {
          margin-left: 12.0vw;
        }
        @media screen and (max-width: 1837px) {
          margin-left: 9.5vw;
          margin-top: -7.0vh;
        }
        @media screen and (max-width: 1841px) {
          margin-left: 9.5vw;
          margin-top: -7.0vh;
        }
       
      }
      .featuredIconLogoPositive{
        color: green;
        font-size: 44px;
        margin-left: 2vw;
        @media screen and (max-width: 1920px) {
          position: absolute;
          margin-left:11.5vw;
          margin-top: -5.5vh;
        }
        @media screen and (max-width: 1911px) {
          margin-left: 12.0vw;
        }
        @media screen and (max-width: 1837px) {
          margin-left: 9.5vw;
          margin-top: -7.0vh;
        }
        @media screen and (max-width: 1822px) {
          position: absolute;
          margin-left: 13.5vw;
          margin-top: -5.5vh;
        }
      
      @media screen and (max-width: 1841px) {
          margin-left: 11.5vw;
          margin-top: -7.0vh;
        }
      }
      .featuredOkResults{

        @media screen and (max-width: 1911px) {
          color: #000000;
         
        }
      
     
      
    }.featuredIconLogoAlarme{
      font-size: 44px;
      margin-left: 7vw;
      color: green;
      @media screen and (max-width: 1920px) {
        margin-left: 8vw;

      }
      @media screen and (max-width: 1911px) {
        margin-left: 10vw;
      }
    }.featuredIconLogoTroca{
      font-size: 44px;
      position: absolute;
    
      margin-left: 4vw;
      color: green;
      @media screen and (max-width: 1911px) {
        margin-left: 5vw;
      }

      @media screen and (max-width: 1840px) {
        margin-left: 4vw;
      }

      @media screen and (max-width: 1841px) {
        margin-left: 2vw;
      }

    }

    .featuredResultEstanqueidade{
        font-size: 30px;
        color: #000000;
        font-weight: 600;
       // background-color: yellow;
        //width: 10vw;
    }

    .featuredIconManometer{

      @media screen and (max-width: 1920px) {
        margin-left: 0.5vw;

      }
    
    }

    .featuredIconConsumo{

      @media screen and (max-width: 1920px) {
       
    }
  }



`;
export const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`;

export const RightSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: relative;
  margin-top: -8vh;
  margin-left: 10vw;

  @media screen and (max-width: 1296px) {
    margin-top: -9vh;
    margin-left: -2vw;
  }
`;

// COMEÇO NOVO VALOR ALARME
{/*
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

  @media screen and (max-width: 1296px) {

    top: 12vh;

    .MuiInputLabel-root {
    font-size: 16px;
    font-weight: normal;
    //color: #000000;
    font-family: "Roboto", sans-serif;
  }

    #troca{

      font-size : 14px;
    }
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

@media screen and (max-width: 1296px) {

top: 12vh;

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


@media screen and (max-width: 1296px) {

top: 12vh;

.MuiInputLabel-root {
font-size: 16px;
font-weight: normal;
//color: #000000;
font-family: "Roboto", sans-serif;
}

#custo{

  font-size : 12px;
}
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

  @media screen and (max-width: 1296px) {

  
    height: 21.5vh;

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

  @media screen and (max-width: 1296px) {
    width: 12vw;
    height: 4vh;

    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: absolute;
    top: 4vh;
    left: 1vw;
    display: flex;

    justify-content: center;
    align-items: center;

    .MuiInputLabel-root {
      font-size: 16px;
      font-weight: normal;
      //color: #000000;
      font-family: "Roboto", sans-serif;
    }

    #label_pressao {
      font-size: 14px;
    }

    h2 {
      font-size: 12px;
      font-weight: normal;
      color: #000000;
      font-family: "Roboto", sans-serif;
    }
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
*/}
export const LeftSide = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: absolute;
  margin-top: 0vh;
  margin-left: -10vw;
`;

export const Warning_1 = styled.div`
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
  @media screen and (max-width: 1296px) {


  
h1 {
font-size: 9px;  
margin-top: -5vh;
margin-left: -3.75vw;

}
img{

  margin-left: -16%;
  margin-top: -7%;

}

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
  @media screen and (max-width: 1296px) {


  
    h1 {
    font-size: 9px;  
    margin-top: -5vh;
    margin-left: -3.75vw;

    }
    img{

      margin-left: -16%;
      margin-top: -7%;

    }


}
`;

export const Warning_3 = styled.div`
  width: 37vw; //40vw
  height: 2vh; //84vh
  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: relative;
  margin-top: 9vh;
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

  @media screen and (max-width: 1296px) {
    margin-top: -3vh;

    h1 {
    font-size: 9px;  
    margin-top: 0vh;
    margin-left: -3.75vw;

    }
    img{

      margin-left: -16%;
      margin-top: 0.25%;
    
    }


  }
`;

export const ScreenSize_1 = styled.div`
  width: 37vw; //40vw
  height: 20vh; //84vh

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: absolute;
  margin-top: -10vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -25%; // -135%;
    margin-left: -90%; // -15%;
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
  height: 20vh; //84vh

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: absolute;
  margin-top: -10vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -20%;
    margin-left: -90%;
  }

  @media screen and (max-width: 1296px) {

h2 {
margin-top: -125%;
margin-left: -15%;
}
}
`;
