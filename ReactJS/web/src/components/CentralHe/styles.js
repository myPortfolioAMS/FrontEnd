import styled from "styled-components";

export const ContainerHe = styled.div`
  width: 20vw;
  height: 39vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 77%; //80.2%;
  margin-top: 5.5%; //5.5%;

  @media screen and (max-width: 1823px) {
    left: 76.5%;
  }

  @media screen and (max-width: 1840px) {
    margin-left: -3vw;
  }

  @media screen and (max-width: 1912px) {
    left: 80.25%;
  }

  @media screen and (max-width: 1920px) {
    left: 80.65%;
  }

  @media screen and (max-width: 1853px) {
    left: 80.2%;
  }
`;
// CENTRAL HÉLIO

// texto HÉLIO
export const CENTRALHE = styled.div`
  width: 83%; //33vh;
  height: 72%; //14.5vw;

  position: absolute;
  margin-top: 3vh; //3-35%
  margin-left: -2vw; // -2vw
  text-decoration: none;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: -32.75vh;
    margin-left: 6.5vw;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MANOMETER = styled.div`
  position: absolute;
  margin-top: 40%;
  margin-left: -20%;

  .featuredManometer {
    width: 2vw;
    height: 2vw;

    h2 {
      font-family: "Robot", sans-serif;
      font-size: 10px;
      font-weight: bold;
      position: relative;
      top: -3vh;
      left: 2.5vw;
      //color: #005A9C;
      color: red;
    }
  }

  .featuredIconLogo {
    width: 2vw;
    height: 2vw;
    color: #005a9c;
    position: relative;
    top: -6vh;
    //color: red
  }

  .featuredManometer1 {
    width: 2vw;
    height: 2vw;

    h2 {
      font-family: "Robot", sans-serif;
      font-size: 10px;
      font-weight: bold;
      position: relative;
      top: -5vh;
      left: 2.5vw;
      //color: #005A9C;
      color: red;
    }
  }

  .featuredIconLogo1 {
    width: 2vw;
    height: 2vw;
    color: #005a9c;
    position: relative;
    top: -8vh;
    //color: red
  }
`;

// TEXTO "EM USO" CILINDRO 1 - CENTRAL HÉLIO

export const PressaoAtualHelioCilindro1 = styled.div`
  width: 27%;
  height: 30%;
  //background: yellowgreen;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 31vh;
  left: 0vw;
  display: flex;
  justify-content: center;
  text-decoration: none;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 3.5vh;
    margin-left: 0vw;
    text-decoration: none;
  }

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;
// VALOR DA PRESSÃO CILINDRO 1 DE HÉLIO

export const VALOR_PressaoAtual_Helio_Cilindro_1 = styled.div`
  width: 27%;
  height: 10%;
  // background-color: #fff;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //border-radius: 15px;
  position: relative;
  top: 23vh;
  left: 0vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0%;
    margin-left: -40%;
  }
`;

// TEXTO "bar" CENTRAL DE HÉLIO CILINDRO 1
export const UNIDADE_PressaoAtual_Helio_Cilindro_1 = styled.div`
  width: 12%;
  height: 8%;
  position: relative;
  top: 20.5vh;
  left: 0vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0vh;
    margin-left: 4vw;
  }
`;

// SINO DA CENTRAL DE HÉLIO CILINDRO 1

export const bellHe1 = styled.div`
  img {
    position: absolute;
    top: 123%;
    left: 19%;
    width: 6%;
    height: 9%;
  }

  h2 {
    position: absolute;
    top: 12%;
    left: -10%;
    font-family: "Roboto", sans-serif;
    font-size: 8px;
    color: #f8612d;
    text-decoration: none;
  }
`;
export const bellHe1_text = styled.div`
  h2 {
    position: relative;
    top: 23vh;
    left: 0.75vw;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #f8612d;
    text-decoration: none;
  }
`;

// FIXAS LARANJAS DA CENTRAL HÉLIO - CILINDRO 1

export const HE1001 = styled.div`
  width: 23.5%;
  height: 66%;

  display: flex;
  position: absolute;
  left: 1.2%;
  top: 32%;

  img {
    width: 100%;
    height: 100%;
  }
`;

// TEXTO "EM USO" ou "RESERVA" CILINDRO 2 - CENTRAL HÉLIO

export const PressaoAtualHelioCilindro2 = styled.div`
  width: 27%;
  height: 30%;
  //background-color: #fff;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  position: relative;
  top: 15.5vh;
  left: 74%;
  display: flex;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 40%;
    margin-left: 0%;
  }

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;
// VALOR DA PRESSÃO CILINDRO 2 DE HÉLIO

export const VALOR_PressaoAtual_Helio_Cilindro_2 = styled.div`
  width: 27%;
  height: 10%;
  position: relative;
  top: 7.5vh;
  left: 74%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0%;
    margin-left: -40%;
  }
`;

// TEXTO "bar" CENTRAL DE HÉLIO CILINDRO 2
export const UNIDADE_PressaoAtual_Helio_Cilindro_2 = styled.div`
  width: 12%;
  height: 8%;
  position: relative;
  top: 5vh;
  left: 88%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    color: #f8612d;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0%;
    margin-left: 0%;
  }
`;

// SINO DA CENTRAL DE HÉLIO CILINDRO 2

export const bellHe2 = styled.div`
  img {
    position: absolute;
    top: 123%;
    left: 92%;
    width: 6%;
    height: 9%;
  }
`;
export const bellHe2_text = styled.div`
  h2 {
    position: absolute;

    top: 124%;
    left: 78%;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #f8612d;
  }
`;
// FIXAS LARANJAS DA CENTRAL HÉLIO - CILINDRO 2

export const HE1002 = styled.div`
  width: 23.5%;
  height: 66%;

  display: flex;
  position: absolute;
  left: 75%;
  top: 32%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ScreenSize_1 = styled.div`
  width: 37vw; //40vw
  height: 20vh; //84vh
  display: flex;

  position: absolute;
  margin-top: 16vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #f0f8ff; //#ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -25%; // -135%;
    margin-left: 0%; // -15%;
  }

  @media screen and (max-width: 1296px) {
    h2 {
      margin-top: -115%;
      margin-left: -0%;
    }
  }
`;

export const ScreenSize_2 = styled.div`
  width: 37vw; //40vw
  height: 20vh; //84vh
  display: flex;

  position: absolute;
  margin-top: 10vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: bold;

    color: #f0f8ff; //#ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -20%;
    margin-left: 0%;
  }

  @media screen and (max-width: 1296px) {
    h2 {
      margin-top: -125%;
      margin-left: -15%;
    }
  }
`;

export const LeftSide = styled.div`
  width: 5vw; //40vw
  height: 5vh; //84vh
  position: absolute;
  margin-top: -10vh;
  margin-left: -30vw;
`;
