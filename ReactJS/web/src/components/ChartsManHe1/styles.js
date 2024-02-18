import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40%;
  //background: #999;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -150vh;
  margin-left: 0vh;

  //padding-left: 150px;

  @media screen and (max-width: 1296px) {
    height: 20%;
    //background: #999;
    margin-top: -75vh;
    margin-left: 75vh;

  }
`;


export const charts2 = styled.div`
  width: 50vw;
  height: 20vh;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  position: absolute;
  margin-top: 24vw;
  margin-left: 145vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 1296px) {
    width: 55vw;
    height: 35vh;

  margin-top: 13.75vw;
  margin-left: -45vh;

  }
`;

export const charts3 = styled.div`
  width: 50vw;
  height: 20vh;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  position: absolute;
  margin-top: 45.5vw;
  margin-left: 145vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 1296px) {
    width: 55vw;
    height: 35vh;

  margin-top: 13.75vw;
  margin-left: -45vh;

  }
`;
