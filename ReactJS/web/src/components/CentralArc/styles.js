import styled from 'styled-components';

export const ContainerArc = styled.div `

width: 20vw;
height: 39vh;
//border: 3px solid darkgoldenrod;
//background-color: #ffe529;

display: flex;

align-items: center;
justify-content: center;

position : absolute;
left: 2%; // 2%
margin-top: 3.5%;//-0.75%;

`

export const CENTRALARC = styled.div `
width: 83%;
height: 72%;
//border: 3px solid darkgoldenrod;
//background: #ff5200;

position: absolute;
margin-top: -27%;
margin-left: 0%;


h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: bold;  
color:#0D00ff;
align-items: center;
justify-content: center;
position: relative;
margin-top: -33vh;
margin-left: 21%;
}

img {
    width: 100%;
    height: 100%;
    
}

`

export const MANOMETER = styled.div`
position: absolute;
margin-top: -1.5vh;
margin-left: -1.00vw;

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
        color: #005A9C;
    }
}

.featuredIconLogo{

    width: 2vw;
    height: 2vw;
    color: #005A9C;
    position: relative;
    top: -4.0vh;
    margin-left: -0.5vw;
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
    top: -2.5vh;
    left: 2.5vw;
    //color: #005A9C;
    color : red;
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


// TEXTO "EM USO" CILINDRO 1 - CENTRAL AR COMPRIMIDO

export const PressaoAtualArComprimidoCilindro1 = styled.div`
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
            color: #0d00ff;
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
// VALOR DA PRESSÃO CILINDRO 1 DE AR COMPRIMIDO

export const VALOR_PressaoAtual_ArComprimido_Cilindro_1 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 31.5vh;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #0d00ff;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0px;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE Ar Comprimido CILINDRO 1
export const UNIDADE_PressaoAtual_ArComprimido_Cilindro_1 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 29.5vh;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color:#0d00ff;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -23%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE AR COMPRIMIDO CILINDRO 1

export const bellAC1 = styled.div`



img {

    position: absolute;
    top: 123%;
    left: 18%;
    width: 6%;
    height: 9%;
}

`


export const bellAC1_text = styled.div`


h2 {

position: relative;
top: 31.5vh;
left: 4%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #0d00ff;

}


`

// FAIXAS AZUIS DA CENTRAL Ar Comprimido - CILINDRO 1

export const AC1001 = styled.div`

width: 23.5%;
height: 66.5%;


display: flex;
position: absolute;
left: 1.2%;
top:32.0%;

img {
    width: 100%;
    height: 100%;
}

`
export const AC_date_1_FINAL = styled.div`

position: relative;
top: -157px;
left: 16px;

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #0d00ff;
    align-items: center;
    justify-content: center;

}


`
// FINAL CENTRAL DE AR COMPRIMIDO CILINDRO 1

//// COMEÇO CENTRAL DE AR COMPRIMIDO CILINDRO 2

// TEXTO "EM USO" ou "RESERVA" CILINDRO 2 - CENTRAL AR COMPRIMIDO

export const PressaoAtualArComprimidoCilindro2 = styled.div`
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
            color: #0d00ff;
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
// VALOR DA PRESSÃO CILINDRO 2 DE AR COMPRIMIDO

export const VALOR_PressaoAtual_ArComprimido_Cilindro_2 = styled.div`
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
            color: #0d00ff;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 30%;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE AR COMPRIMIDO CILINDRO 2
export const UNIDADE_PressaoAtual_ArComprimido_Cilindro_2 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 15.5vh;
    left: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #0d00ff;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 23%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE AR COMPRIMIDO CILINDRO 2

export const bellAC2 = styled.div`

img {

    position: absolute;
    top: 123%;
    left: 92%;
    width: 6%;
    height: 9%;
}



`


export const bellAC2_text = styled.div`


h2 {

position: absolute;
top: 124%;
left: 77%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #0d00ff;

}


`

// FAIXAS AZÚIS DA CENTRAL AR COMPRIMIDO - CILINDRO 2

export const AC1002 = styled.div`
width: 23.5%;
height: 66.5%;

display: flex;
position: absolute;
left: 75%;
top:32%;

img {
    width: 100%;
    height: 100%;
}

`
