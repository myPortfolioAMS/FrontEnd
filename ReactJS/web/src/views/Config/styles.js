
import styled from 'styled-components';
import { devices } from '../../utils/devices';


export const Container = styled.div`

	
	width: 100%;
	height: 100%;
    position: absolute;
    display: flex;
    //background: #999;
   background: #f2f9fe;
   margin-top:1%;
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

export const ManHe = styled.div `
width: 90vw;
height: 70vh;
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
margin-top: -15vh;//-10vh

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


`

export const CADASTRO_ALARME = styled.div `
width: 100vw;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 0%;
margin-top: 2%;

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

@media screen and (max-width: 1296px) {
height: 10vh;
margin-top: 12.5%;


}
`

export const CADASTRO_FORNECEDORES = styled.div `
width: 100vw;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 0%;
margin-top: 13%;

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
@media screen and (max-width: 1296px) {

margin-top: 23%;


}
`


export const CADASTRO_INSTALACAO = styled.div `
width: 100vw;
height: 20vh;
//border: 3px solid black;
//background: #fff567;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 9%; // 10%;
margin-top: 33%; // 56%;

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

@media screen and (max-width: 1296px) {

    margin-top: 42%;


}


`


export const LastPage = styled.div` 


@media screen and (max-width: 1909px) {




margin-top: 90vh;
margin-left: 7vw;

img {
  width: 60px;
  height: 45px;
  position: relative;
  margin-top: -8.5vh;
  margin-left: -4vw;


}

.featuredIcons3{
position: absolute;
margin-left: -5.5vw;
margin-top: -3.5vh;
font-family: 'Poppins', sans-serif;
font-size: 1.0vw;
color: #005A9C;

}

.featuredIconConfig {

    color: #005A9C;
}

.featuredIconConfig_1 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -1vw;
}

.featuredIconConfig_2 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -3.5vw;
}
}


@media screen and (max-width: 1920px) {




margin-top: 90vh;
margin-left: 7vw;

img {
  width: 60px;
  height: 45px;
  position: relative;
  margin-top: -8.5vh;
  margin-left: -4vw;


}

.featuredIcons3{
position: absolute;
margin-left: -5.5vw;
margin-top: -3.5vh;
font-family: 'Poppins', sans-serif;
font-size: 1.0vw;
color: #005A9C;

}

.featuredIconConfig {

    color: #005A9C;
}

.featuredIconConfig_1 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -1vw;
}

.featuredIconConfig_2 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -3.5vw;
}
}




@media screen and (max-width: 1841px) {




margin-top: 90vh;
margin-left: 7vw;

img {
  width: 60px;
  height: 45px;
  position: relative;
  margin-top: -8.5vh;
  margin-left: -4vw;


}

.featuredIcons3{
position: absolute;
margin-left: -5.5vw;
margin-top: -3.5vh;
font-family: 'Poppins', sans-serif;
font-size: 1.0vw;
color: #005A9C;

}

.featuredIconConfig {

    color: #005A9C;
}

.featuredIconConfig_1 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -1vw;
}

.featuredIconConfig_2 {

    color: #005A9C;
    margin-top: -8.5vh;
    margin-left: -3.5vw;
}
}

` 




