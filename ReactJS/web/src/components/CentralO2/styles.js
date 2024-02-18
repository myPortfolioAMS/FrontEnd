import styled from 'styled-components';

export const Container_O2 = styled.div `

width: 20vw;
height: 39vh;
border: 3px solid red;
border-style: dashed;
border-radius: 10px;    
//background-color: #ffe529;

display: flex;

align-items: center;
justify-content: center;
position: absolute;
left: 2%;
top: 55%;



`

export const CENTRAL_O2 = styled.div `
width: 83%;
height: 72%;
//border: 3px solid darkblue;
//background: #ff5200;

position: absolute;
margin-top: -20%;
margin-left: 0%;

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: bold;
color: #0fcb01;
align-items: center;
justify-content: center;
position: relative;
top: -33vh;
margin-left: 32%;
}

img {
    width: 100%;
    height: 100%;
    
}

`

export const MANOMETER = styled.div`

position: absolute;
margin-top: 0.75vh;
margin-left: -0.75vw;

.featuredManometer{

    width: 2vw;
    height: 2vw;

    h2 {
        font-family: 'Robot', sans-serif;
        font-size: 10px;
        font-weight: bold;
        position: relative;
        top: -0.5vh;
        left: 2.0vw;
       // color: #005A9C;
        color : red ;
    }
}

.featuredIconLogo{

    width: 2vw;
    height: 2vw;
   // color: #005A9C;
    position: relative;
    top: -4.0vh;
    margin-left: -0.5vw;
   color: red


}

.featuredManometer1{

width: 2vw;
height: 2vw;

h2 {
    font-family: 'Robot', sans-serif;
    font-size: 10px;
    font-weight: bold;
    position: relative;
    top: -2.5vh;
    left: 2.5vw;
    //color: #005A9C;
    color : red
}
}

.featuredIconLogo1{

width: 2vw;
height: 2vw;
//color: #005A9C;
color:red;
position: relative;
top: -6.0vh;
margin-left: -0.5vw;
//color: red


}


`


// TEXTO "EM USO" CILINDRO 1 - CENTRAL OXIGÊNIO

export const PressaoAtualOxigenioCilindro1 = styled.div`
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
            color: #0fcb01;
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
// VALOR DA PRESSÃO CILINDRO 1 DE OXIGÊNIO

export const VALOR_PressaoAtual_Oxigenio_Cilindro_1 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 0vh;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #0fcb01;
            align-items: center;
            justify-content: center;
            position: absolute;
            margin-top: -2.75vh;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE OXIGÊNIO CILINDRO 1
export const UNIDADE_PressaoAtual_Oxigenio_Cilindro_1 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: -3vh;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #0fcb01;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -23%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE OXIGÊNIO CILINDRO 1

export const bellO21 = styled.div`



img {

    position: absolute;
    top: 123%;
    left: 18%;

    width: 6%;
    height: 9%;
}

`

export const bellO21_text = styled.div`

h2 {
position: absolute;
top: 34.0vh;
left: 3%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #0fcb01;
}

`




// FIXAS AMARELAS DA CENTRAL OXIGÊNIO - CILINDRO 1

export const O21001 = styled.div`

width: 23.5%;
height: 66%;

display: flex;
position: absolute;
left: 1.2%;
top:32%;

img {
    width: 100%;
    height: 100%;
}

`
export const O2_date_1_FINAL = styled.div`

position: relative;
top: -157px;
left: 16px;

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #0fcb01;
    align-items: center;
    justify-content: center;

}


`
// FINAL CENTRAL DE OXIGÊNIO CILINDRO 1

//// COMEÇO CENTRAL DE OXIGÊNIO CILINDRO 2

// TEXTO "EM USO" ou "RESERVA" CILINDRO 2 - CENTRAL OXIGÊNIO

export const PressaoAtualOxigenioCilindro2 = styled.div`
   width: 27%;
    height: 30%;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: relative;
    top: -6.75vh;
    left: 74%;
    display: flex;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            color: #0fcb01;
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
// VALOR DA PRESSÃO CILINDRO 2 DE OXIGÊNIO

export const VALOR_PressaoAtual_Oxigenio_Cilindro_2 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: absolute;
    top: 102%;
    left: 74%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #0fcb01;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 35%;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE OXIGÊNIO CILINDRO 2
export const UNIDADE_PressaoAtual_Oxigenio_Cilindro_2 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: -13.75vh;
    left: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #0fcb01;
            align-items: center;
            justify-content: center;
            position: relative;
            top: -33%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE OXIGÊNIO CILINDRO 2

export const bellO22 = styled.div`



img {

    position: absolute;
    top: 123%;
    left: 92%;
    width: 6%;
    height: 9%;
}



`


export const bellO22_text = styled.div`

h2 {
position: absolute;
top: 124%;
left: 77%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #0fcb01;
}

`



// FIXAS AMARELAS DA CENTRAL OXIGÊNIO - CILINDRO 2

export const O21002 = styled.div`
width: 23.5%;
height:66%;
display: flex;
position: absolute;
left: 75%;
top:32%;

img {
    width: 100%;
    height: 100%;
}

`
