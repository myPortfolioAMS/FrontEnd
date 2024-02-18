
import styled from 'styled-components';
import { devices } from '../../utils/devices';


export const Container = styled.div`

	
	width: 100%;
	height: 100%;
  position: absolute;
  display: flex;
  background:#f0f8ff;
    //background: #999;
/*
    margin: auto;
    text-align: center;

  @media ${devices.laptop} {
    max-width: 800px;
  }

  @media ${devices.desktop} {
    max-width: 1400px;
  }
*/
`

export const Header = styled.div`
	width: 100%;
	height: 5vh;
  //background-color: green;
  position: absolute;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  margin-top: 70vh;
  margin-left: 0vw;


`

export const ManHe = styled.div `
width: 50vw;
height: 10vh;
//border: 3px solid black;
//background: #f00;

display: flex;
/*
display: flex;
  flex-direction: column;
  margin: 0.5rem;

  @media ${devices.laptop} {
    flex-direction: row;
  }
*/
//align-items: center;
//justify-content: center;
position : absolute; // relative
left: 10vw; //-10vw
margin-top: -2vh;//-10vh

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: #f8612d;
align-items: center;
justify-content: center;
position: relative;
margin-top: 0%;
margin-left: 0%;
}

img {
    width: 100%;
    height: 100%;
    
}

@media screen and (max-width: 1841px) {

margin-top: -3vh;

}


`

export const CADASTRO_ALARME = styled.div `
width: 50vw;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 39%;
margin-top: 3%;


h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: #f8612d;
align-items: center;
justify-content: center;
position: relative;
margin-top: 0%;
margin-left: 0%;
}



`

export const CADASTRO_FORNECEDOR = styled.div `
width: 50%;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 39%;
margin-top: 14%;

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: #f8612d;
align-items: center;
justify-content: center;
position: relative;
margin-top: 0%;
margin-left: 0%;
}

@media screen and (max-width: 1841px) {

  margin-top: 15%;
  

}



`


export const CADASTRO_INSTALACAO = styled.div `
width: 50%;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 9%; // 10%;
margin-top: 34%; // 56%;

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: #f8612d;
align-items: center;
justify-content: center;
position: absolute;
margin-top: 0%;
margin-left: 0%;
}

@media screen and (max-width: 1841px) {

margin-top: 35%;


}



`


export const CADASTRO_CHARTS = styled.div `
width: 50%;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 8.8%; // 10%
margin-top: 56%; // 56.5%

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: #f8612d;
align-items: center;
justify-content: center;
position: relative;
margin-top: 0%;
margin-left: 0%;
}



`
export const Message = styled.div`

width: 40vw;
height: 22vh;

position : absolute;

margin-top:87vh;
margin-left: -12vw;

`

export const Footer = styled.div`


`