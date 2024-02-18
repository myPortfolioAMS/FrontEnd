import styled from 'styled-components';

export const ContainerH2 = styled.div `

width: 20vw;
height: 39vh;
//border: 3px solid darkblue;
//background-color: #ffe529;

display: flex;

align-items: center;
justify-content: center;
position : absolute;
left: 27%;
margin-top: -16.5%;//-21.2%;



`

export const CENTRALH2 = styled.div `
width: 83%;
height: 72%;
//border: 3px solid darkblue;
//background: #ff5200;
margin-top: 0px;

position: absolute;
margin-top: -27%;
margin-left: 0%;

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: bold;
color: #bec62f;

align-items: center;
justify-content: center;
position: relative;
margin-top: -33vh;
margin-left: 4.5vw;
}

img {
    width: 100%;
    height: 100%;
    
}

`

export const MANOMETER = styled.div`

position: absolute;
margin-top: -1.5vh;
margin-left: -1.75vw;

.featuredManometer{

    width: 2vw;
    height: 2vw;

    h2 {
        font-family: 'Robot', sans-serif;
        font-size: 10px;
        font-weight: bold;
        position: relative;
        top: -0.5vh;
        left: 2.5vw;
        color: #005A9C;
    }
}

.featuredIconLogo{

    width: 2vw;
    height: 2vw;
    color: #005A9C;
    position: relative;
    top: -4.0vh;
   //color: red


}

.featuredManometer1{

width: 2vw;
height: 2vw;

h2 {
    font-family: 'Robot', sans-serif;
    font-size: 10px;
    font-weight: bold;
    position: relative;
    top: -3.0vh;
    left: 2.5vw;
    color: #005A9C;
}
}

.featuredIconLogo1{

width: 2vw;
height: 2vw;
color: #005A9C;
position: relative;
top: -6.0vh;
//color: red


}


`

// TEXTO "EM USO" CILINDRO 1 - CENTRAL HIDROGÊNIO

export const PressaoAtualHidrogenioCilindro1 = styled.div`
   width: 27%;
    height: 30%;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: absolute;
    top: 29vh;
    left: 0%;
    display: flex;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            color: #bec62f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 3.5vh;
            margin-left: 0%;
                }

    
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.5;
    }
`
// VALOR DA PRESSÃO CILINDRO 1 DE HIDROGÊNIO

export const VALOR_PressaoAtual_Hidrogenio_Cilindro_1 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 23vh;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #bec62f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 8.5vh;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE HIDROGÊNIO CILINDRO 1
export const UNIDADE_PressaoAtual_Hidrogenio_Cilindro_1 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 29.75vh;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #bec62f;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -23%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE HIDROGÊNIO CILINDRO 1

export const bellH21 = styled.div`



img {

    position: absolute;
    top: 123%;
    left: 19%;
    width: 6%;
    height: 9%;
}

`


export const bellH21_text= styled.div`

h2 {

    position: relative;
top: 31.5vh;
left: 0.75vw;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #bec62f;
}

`


// FIXAS AMARELAS DA CENTRAL HIDROGÊNIO - CILINDRO 1

export const H21001 = styled.div`

width: 23.5%;
height: 66.0%;

display: flex;
position: absolute;
left: 1.2%;
top:32.5%;

img {
    width: 100%;
    height: 100%;
}

`
export const h2_date_1_FINAL = styled.div`

position: relative;
top: -157px;
left: 16px;

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #bec62f;
    align-items: center;
    justify-content: center;

}


`
// FINAL CENTRAL DE HIDROGÊNIO CILINDRO 1

//// COMEÇO CENTRAL DE HIDROGÊNIO CILINDRO 2

// TEXTO "EM USO" ou "RESERVA" CILINDRO 2 - CENTRAL HIDROGÊNIO

export const PressaoAtualHidrogenioCilindro2 = styled.div`
   width: 27%;
    height: 30%;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: relative;
    top: 23.5vh;
    left: 74%;
    display: flex;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            color: #bec62f;
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
`
// VALOR DA PRESSÃO CILINDRO 2 DE HIDROGÊNIO

export const VALOR_PressaoAtual_Hidrogenio_Cilindro_2 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 15.75vh;
    left: 74%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #bec62f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 0%;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE HIDROGÊNIO CILINDRO 2
export const UNIDADE_PressaoAtual_Hidrogenio_Cilindro_2 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 13.5vh;
    left: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #bec62f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 0%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE HIDROGÊNIO CILINDRO 2

export const bellH22 = styled.div`


img {

    position: absolute;
    top: 123%;
    left: 92%;

    width: 6%;
    height: 9%;
}
`

export const bellH22_text= styled.div`

h2 {

position: absolute;

top: 124%;
left: 77%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #bec62f;
}

`

// FIXAS AMARELAS DA CENTRAL Hidrogênio - CILINDRO 2

export const H21002 = styled.div`

width: 23.5%;
height: 66.0%;

display: flex;
position: absolute;
left: 75%;
top: 32.5%;

img {
    width: 100%;
    height: 100%;
}

`
