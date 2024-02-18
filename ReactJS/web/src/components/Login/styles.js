import styled from "styled-components";
import fundo_manometro_3 from "../../assets/industrail_manometer_flat_v3.png";

export const Container = styled.div`
  display: flex;
  width: 1852px;
  height: 978px;

  background-image: url(${fundo_manometro_3});
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    object-fit: 100%;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 0vw;
  margin-top: 0vh;

  img {
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    box-shadow: 0 0 0 2px rgba(169, 172, 255, 0.5);
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 60vw;
  margin-top: 0vh;
`;

export const Logo = styled.div`
  width: 25vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: -2vw;

  img {
    width: 80%;
    justify-self: center;
    align-self: center;
    margin-left: 0vw;
    margin-top: 2vh;
  }
`;

export const LogoGasesData = styled.div`
  img {
    width: 30%;
    justify-self: center;
    align-self: center;
    margin-left: 18vw;
    margin-top: 10vh;
  }
`;

export const Footer = styled.div`
  width: 50%;
  height: 10vh;
  position: absolute;

  bottom: -7vh;

  h3 {
    position: absolute;
    margin-bottom: 1.5vh;
    margin-left: 0.5vw;
    color: #191920; //#fff;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    position: absolute;
    margin-bottom: -10vh;
    margin-left: 15.5vw;
    color: #191920; //#fff;
    font-size: 8px;
    font-family: "Roboto", sans-serif;
  }
`;

export const styledEntryCard = styled.div`
  width: 100%;
  height: 70%;
  max-width: 500px;
  position: absolute;
  margin-top: 5vh;
  margin-left: 10vw;
  border-radius: 5px;
  padding: 50px;
  margin-bottom: 40px;
  outline-color: #2f8bfd;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #191970;
    margin-bottom: 5px;
  }
  span {
    display: block;
    margin-top: 40px;
    color: #888888;
    font-size: 14px;
  }
  a {
    margin-left: 4px;
    color: #2f8bfd;
  }
  input {
    font-weight: bold;
    color: #005a9c; //#fff;
    font-size: 18px;
    padding: 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: #191970;
      color: #fff;
    }
  }
`;

export const Xlogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;

  h2 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: #191970;
    margin-top: 10px;
    margin-bottom: -4px;
  }

  input {
    font-size: 18px;
    text-align: center;
    border: 2px solid #191970;
    padding: 10px;
    background: #f0f8ff;
  }
`;

export const styledButton = styled.button`
  display: flex;
  width: 95%;
  height: 5vh;
  flex-direction: column;
  position: relative;
  margin-top: 5vh;
  margin-left: 0.75vw;

  span {
    text-transform: uppercase;
    font-weight: bold;
    color: #191970;
    padding: 10px;
  }

  input {
    font-size: 16px;
    color: #f0f8ff;
    text-align: center;
    border: 2px solid #191970;
    background: #191970;
    cursor: pointer;
    &:hover {
      background-color: #f0f8ff;
      color: #191970;
    }
  }

  button {
    font-weight: bold;
    background-color: #005a9c;
    color: #fff;
    font-size: 18px;
    padding: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: #191970;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 68vh;
  margin-left: 14.75vw;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #191970;
    align-content: center;
    justify-content: center;
  }
`;

export const FlagEN = styled.div`
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: +25.5vw;
    margin-top: 2.5vh;
  }
`;

export const FlagES = styled.div`
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: +20vw;
    margin-top: 2.5vh;
  }
`;

export const FlagPT = styled.div`
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: +14vw;
    margin-top: 2.5vh;
  }
`;

export const FlagDE = styled.div`
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: +31.5vw;
    margin-top: 2.5vh;
  }
`;

export const styledInput = styled.input`
  width: 100%;

  outline: none;
  padding: 8px 16px;
  border: 1px solid #e0e6e8;
  border-radius: 4px;
  font-size: 1rem;
  color: #888888;
  transition: box-shadow 0.2s;
  &::placeholder {
    color: #dedede;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(169, 172, 255, 0.5);
  }
`;

export const styledInputGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #888888;
  }
`;

export const styledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  color: #ffffff;
  background-color: #202023;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Screen = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 150px;
  margin-left: -1400px;
  background: hsl(213deg 85% 97%);
  border-radius: 30px;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  margin-left: 70px;
  $p: hsl(213deg 85% 97%);
  $s: hsl(233deg 36% 38%);
  font-family: "Roboto", sans-serif;
`;

export const username = styled.div`
  width: 250px;
  height: 40px;
  background-color: yellow;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  padding: 1em;
  gap: 0.5em;
  border-radius: 20px;
  color: hsl(0deg 0% 30%);

  input {
    outline: none;
    border: none;

    &::placeholder {
      color: hsl(0deg 0% 0%);
      font-size: 0.9em;
    }
  }
`;

export const password = styled.div`
  width: 250px;
  height: 40px;
  background-color: red;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  padding: 1em;
  position: absolute;
  margin-top: 15vh;
  flex-direction: column;
  gap: 1px;
  border-radius: 20px;
  color: hsl(0deg 0% 30%);
  input {
    outline: none;
    border: none;
    &::placeholder {
      color: hsl(0deg 0% 0%);
      font-size: 0.9em;
    }
  }
  ion-icon {
    color: hsl(0deg 0% 30%);
    margin-bottom: -0.2em;
  }
  .show-hide {
    margin-right: -5em;
  }
`;

export const button = styled.button`
  padding: 15px;
  width: 250px;
  background: #33ff00;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  position: absolute;
  margin-left: 5px;
  margin-top: 370px;
  font-size: 1em;
  color: #993399;
  padding: 0.25em 1em;
`;

export const styled_button = styled.button`
  width: ${(props) => (props.full ? "100%" : "null")};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #2f8bfd;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0072ff;
  }
`;

export const body = styled.div`
  user-select: none;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(218deg 50% 11%);
  height: 100vh;
`;

export const BottomScreen = styled.div`
  width: 50%;
  height: 10vh;
  position: absolute;
  bottom: -7vh;

  @media screen and (max-width: 1837px) {
    bottom: -7.25vh;
  }
`;

export const ScreenSize_1 = styled.div`
  width: 15vw; //40vw
  height: 3vh; //84vh
  display: flex;
  position: absolute;
  margin-top: 0vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 8px;
    font-weight: regular;

    color: #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 40%; // -135%;
    margin-left: -20%; // -15%;
  }

  @media screen and (max-width: 1920px) {
    width: 7vw;
    height: 2vh;

    position: absolute;
    bottom: 13.25vh;
    left: 23vw;
    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      font-weight: regular;

      color: #000; //#f8612d;
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

  @media screen and (max-width: 1912px) {
    width: 27vw; //40vw

    margin-top: 0vh;
    margin-left: -5vw;

    h2 {
      margin-top: 0%; //-115%;
      margin-left: 23vw;
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

  bottom: -7vh;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -20%;
    margin-left: -90%;
  }

  @media screen and (max-width: 1920px) {
    width: 7vw;
    height: 2vh;

    position: absolute;
    bottom: 18vh;
    left: 25vw;

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      font-weight: regular;
      color: #000; //#f8612d;
      align-items: left;
      justify-content: center;
      position: absolute;
      margin-top: 74.5%; // -135%;
      margin-left: 10%; // -15%;
    }
  }

  @media screen and (max-width: 1912px) {
    width: 27vw; //40vw
    margin-top: 0vh;
    margin-left: 0vw;

    h2 {
      margin-top: 0%; //-115%;
      margin-left: 23vw;
    }
  }

  @media screen and (max-width: 1296px) {
    h2 {
      margin-top: -125%;
      margin-left: -15%;
    }
  }
`;

export const Footer_bk = styled.div`
  width: 50%;
  height: 10vh;
  position: absolute;
  bottom: -7vh;

  h3 {
    position: absolute;
    margin-bottom: 1.5vh;
    margin-left: 0.5vw;
    color: #191920; //#fff;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }
`;
export const Versao = styled.div`
  position: absolute;
  bottom: -7vh;

  @media screen and (max-width: 1920px) {
    width: 7%;
    height: 2vh;
    position: absolute;
    bottom: 8vh;
    left: 29vw;

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      color: #191920; //#fff;
    }
  }

  @media screen and (max-width: 1837px) {
    width: 7%;
    height: 2vh;
    position: absolute;
    bottom: 8vh;
    left: 29vw;

    h2 {
      position: absolute;
      margin-bottom: 4.5vh;
      margin-left: 0.5vw;
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      color: #191920; //#fff;
    }
  }
`;
