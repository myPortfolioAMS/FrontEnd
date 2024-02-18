import styled from 'styled-components';

export const ContainerOxN = styled.div `

width: 20vw;
height: 39vh;
//border: 3px solid darkblue;

//background-color: #ffe529;

display: flex;

align-items: center;
justify-content: center;
position: absolute;
left: 27%; 
top: 55.0%;



`

export const CENTRALOXN = styled.div `
width: 83%;
height: 72%;
//border: 3px solid darkblue;
//background: #ff5200;
position: absolute;
margin-top: -20%;
margin-left: 0px;

h3 {
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: bold;  
color:#05799f;
align-items: center;
justify-content: center;
position: relative;
//margin-top: -95%;
margin-top: -33vh;
margin-left: 20%;
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
    color: #005A9C;
    //color : red
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



// TEXTO "EM USO" CILINDRO 1 - CENTRAL Óxido Nitroso

export const PressaoAtualOxNitrosoCilindro1 = styled.div`
   width: 27%;
    height: 30%;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: absolute;
    top: 29.5vh;
    left: 0px;
    display: flex;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            font-weight: bold;
            color: #05799f;
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
// VALOR DA PRESSÃO CILINDRO 1 DE Óxido Nitroso

export const VALOR_PressaoAtual_OxNitroso_Cilindro_1 = styled.div`
    width: 27%;
    height: 10%;
    //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 34.5vh;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            color: #05799f;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -2.75vh;
            margin-left: -30px;
                }



`

// TEXTO "bar" CENTRAL DE Óxido Nitroso CILINDRO 1
export const UNIDADE_PressaoAtual_OxNitroso_Cilindro_1 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: absolute;
    top: 30vh;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #05799f;
            align-items: center;
            justify-content: center;
            position: absolute;
            top:0%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE Óxido Nitroso CILINDRO 1

export const bellOxN1 = styled.div`


img {

    position: absolute;
    top: 123%;
    left: 18%;
    width: 6%;//20px;
    height: 9%;//25px;
}

`

export const bellOxN1_text = styled.div`

h2 {
position: absolute;
top: 35vh;
left: 3%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #05799f;
}



`

// FIXAS AMARELAS DA CENTRAL Óxido Nitroso - CILINDRO 1

export const OxN1001 = styled.div`

width: 23.5%;
height: 66%;

display: flex;
position: absolute;
left: 1.0%;
top:32%;

img {
    width: 100%;
    height: 100%;
}

`
export const OxN_date_1_FINAL = styled.div`

position: relative;
top: -157px;
left: 16px;

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #05799f;
    align-items: center;
    justify-content: center;

}


`
// FINAL CENTRAL DE Óxido Nitroso CILINDRO 1

//// COMEÇO CENTRAL DE Óxido Nitroso CILINDRO 2

// TEXTO "EM USO" ou "RESERVA" CILINDRO 2 - CENTRAL Óxido Nitroso

export const PressaoAtualOxNitrosoCilindro2 = styled.div`
   width: 27%;
    height: 30%;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius: 15px;
    position: relative;
    top: 28.5vh;
    left: 74%;
    display: flex;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            font-weight: bold;  
            color: #05799f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 41.5%;
            margin-left: 0%;
                }

    
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.5;
    }
`
// VALOR DA PRESSÃO CILINDRO 2 DE Óxido Nitroso

export const VALOR_PressaoAtual_OxNitroso_Cilindro_2 = styled.div`
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
            color: #05799f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 35%;
            margin-left: -40%;
                }



`

// TEXTO "bar" CENTRAL DE Óxido Nitroso CILINDRO 2
export const UNIDADE_PressaoAtual_OxNitroso_Cilindro_2 = styled.div`
    width: 12%;
    height: 8%;
   // box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    //border-radius: 15px;
    position: relative;
    top: 20.55vh;
    left: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: #05799f;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 0%;
            margin-left: 0%;
                }     

`

// SINO DA CENTRAL DE Óxido Nitroso CILINDRO 2

export const bellOxN2 = styled.div`


img {
    position: absolute;
    top: 123%;
    left: 92%;
    width: 6%;
    height: 9%;
}



`

export const bellOxN2_text = styled.div`

h2 {
position: absolute;
top: 124%;
left: 77%;

font-family: 'Roboto', sans-serif;
font-size: 12px;
color: #05799f;
}



`

// FIXAS AMARELAS DA CENTRAL Óxido Nitroso - CILINDRO 2

export const OxN1002 = styled.div`
width: 23.5%;
height: 66%;
display: flex;
position: absolute;
left: 75%;
top:32.5%;

img {
    width: 100%;
    height: 100%;
}

`
