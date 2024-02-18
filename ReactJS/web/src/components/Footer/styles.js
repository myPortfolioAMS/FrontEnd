import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #191970;
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 5px solid #b3cee5;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: 18px;
  }
`;

export const LeftSide = styled.div`
  width: 25%;
  height: 3vh;
  display: flex;
  //background-color:yellow;
  align-items: center;

  img {
    margin-top: 0vh;
    margin-left: -6vw;
    width: 87px;
    height: 30px;
  }

  h3 {
    position: absolute;
    margin-top: 0vh;
    margin-left: -18vw;
    align-self: center;
    justify-content: center;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 1296px) {
    img {
      width: 93px;
      height: 32px;
    }
  }
`;

export const FarLeftSide = styled.div`
  width: 25%;
  height: 3vh;
  display: flex;

  align-items: center;

  img {
    margin-top: 0vh;
    margin-left: -6vw;
    width: 87px;
    height: 30px;
  }

  h3 {
    position: absolute;
    margin-top: 0vh;
    margin-left: -49.5vw;
    align-self: center;
    justify-content: center;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 1296px) {
    img {
      width: 93px;
      height: 32px;
    }
  }
`;

export const CenterSide = styled.div`
  h3 {
    position: absolute;
    margin-top: -0.8vh;
    margin-left: -28.5vw;
    align-self: center;
    justify-content: center;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }
`;

export const Privacidade = styled.div`
  h3 {
    position: absolute;
    margin-top: -0.8vh;
    margin-left: 2vw;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }
`;

export const Termos = styled.div`
  h3 {
    position: absolute;
    margin-top: -0.8vh;
    margin-left: 10vw;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }
`;

export const PreferenciaDeCookies = styled.div`
  h3 {
    position: absolute;
    margin-top: -0.85vh;
    margin-left: 16vw;

    color: #f0f8ff; //#fff;

    font-size: 10px;

    font-family: "Roboto", sans-serif;
  }
`;

export const ConfigGear = styled.div`
  width: 10%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    position: relative;
    top: 0vh;
    right: 1vw;
    &:hover {
      color: #ee6b26;
    }
  }

  #notification {
    img {
      width: 35px;
      height: 40px;

      position: relative;
      top: -0.5vh;
      left: 10vw;
    }
    span {
      color: #ee6b26;
      padding: 7px 7px;
      border-radius: 50%;
      font-size: 20px;
      background-color: #fff;
      position: relative;
      top: -0.5vh;
      left: 7vw;
    }

    &:hover {
      opacity: 0.5;
    }
  }
  .featuredIcons {
  }
  .featuredIconConfig {
    color: #fff;
  }
`;

export const BottomScreen = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh

  position: absolute;
  margin-top: 0vh;
  margin-left: -10vw;
`;

export const ScreenSize_1 = styled.div`
  width: 15vw; //40vw
  height: 3vh; //84vh
  //background-color: yellow;

  display: flex;

  position: absolute;
  margin-top: 0vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff; //#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 40%; // -135%;
    margin-left: -20%; // -15%;
  }

  @media screen and (max-width: 1920px) {
    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      font-weight: regular;

      color: #ffffff; //#000; //#f8612d;
      align-items: left;
      justify-content: center;
      position: absolute;
      margin-top: 40%; // -135%;
      margin-left: -20%; // -15%;
    }
  }

  @media screen and (max-width: 1296px) {
    h2 {
      margin-top: -115%;
      margin-left: -15%;
    }
  }
`;

export const ScreenSize_2 = styled.div`
  width: 15vw; //40vw
  height: 3vh; //84vh

  display: flex;

  position: absolute;
  margin-top: -10vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff; //#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -20%;
    margin-left: -90%;
  }

  @media screen and (max-width: 1920px) {
    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      font-weight: regular;

      color: #ffffff; //#000; //#f8612d;
      align-items: left;
      justify-content: center;
      position: absolute;
      margin-top: 74.5%; // -135%;
      margin-left: 10%; // -15%;
    }
  }

  @media screen and (max-width: 1296px) {
    h2 {
      margin-top: -125%;
      margin-left: -15%;
    }
  }
`;
