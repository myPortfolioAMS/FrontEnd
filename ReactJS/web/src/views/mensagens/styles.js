import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
    position: absolute;
    display: flex;
    background:#f0f8ff;
    margin-top:1%;

`

export const MENSAGENS = styled.div `
width: 100vw;
height: 20vh;
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