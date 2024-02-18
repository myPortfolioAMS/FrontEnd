import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 5vh;
background-color: #191970;
position: fixed;
top: 0;
display: flex;
border-bottom: 5px solid #b3cee5;
align-items: center;
justify-content: center;
margin-top: 0vh;
margin-left: 0vw;

span {
    color: #fff;
    font-size: 18px;
}

`

export const LeftSide = styled.div`
width: 25%;
height: 5vh;
display: flex;
//background-color:yellow;
align-items: center;


    
   
    img {
        margin-top: 0vh;
        margin-left: -8vw;
        width: 61px;
        height: 21px;
    }

    h3 {

        position: relative;
        margin-top: 1.5vh;
        margin-left: 0.6vw;
        align-self: center ;
        justify-content: center;
        

        color: #f0f8ff;//#fff;

        font-size: 10px;
        //font-weight: bold;
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        }

    @media screen and (max-width: 1296px) {

        img {
        width: 93px;
        height: 32px;
    }
    }
    @media screen and (max-width: 1920px) {

        img {
            margin-left: -7vw;

        }



    }

    

`


export const RightSide = styled.div `
width: 25%;
height: 5vh;
display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    //background-color:yellow;

    img {
        width: 116px;
        height: 40px;
    }
    h3 {

position: relative;
margin-top: 0vh;
margin-left: 11vw;
align-self: center ;
justify-content: center;

color: #f0f8ff;//#fff;

//color:#b3cee5;

font-size: 18px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
}


@media screen and (max-width: 1296px) {

        h3 {

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        font-style: italic;
        margin-left: 10px;
        }


    }

@media screen and (max-width: 1920px) {


    h3 {
        margin-left: 11.5vw;
    }
}


`
export const FarRightSide = styled.div `
width: 25%;
height: 5vh;
display : flex;
justify-content: center;

//background-color: yellow;
margin-left: 12vw;


img {
    color: #fff;
    width: 3vw;
    height:3vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
.divider::after {
    content: "|";
    color: #005A9C;
    padding: 0.0vh 0.25vw;
    //margin-left:.15vw;
    //margin-top: 3.5vh;

}

@media screen and (max-width: 1841px) {

    margin-left: 10vw;

}

@media screen and (max-width: 1840px) {

margin-left: 5.5vw;

}

@media screen and (max-width: 1920px) {

margin-left: 6.5vw;
}
`

export const AbrigoDeGases = styled.div `

width: 3vw;
height: 3vh;


img {
    color: #fff;
    width: 2.5vw;
    height:3.25vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -2.25vw;
   

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}

.hide {
    display: none;
}
.AmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}


@media screen and (max-width: 1841px) {

    img {
        margin-left: -2.75vw;
    }
}
    
@media screen and (max-width: 1840px) {

img {
    margin-left: -0.25vw;
}

}

@media screen and (max-width: 1920px) {

img {
    margin-left: -0.05vw;

}

}


`


export const ConfigGear = styled.div `

width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}


.divider::after {
    content: "|";
    color: #fff;
    margin-left:7vw;
    margin-top: 2.5vh;

}
.hide {
    display: none;
}
.CmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}



`

export const Mensagens = styled.div `
width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}
.hide {
    display: none;
}
.MmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}


`


export const Charts = styled.div `
width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;
   

}



a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}
.hide {
    display: none;
}
.CmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}


`



export const KPI = styled.div `
width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:3.0vh;
    position:absolute;
    margin-top: 0.75vh;
    margin-left: -0.10vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}

.hide {
    display: none;
}
.KmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}


@media screen and (max-width: 1840px) {

}

`



export const User = styled.div `

width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}
.hide {
    display: none;
}
.UmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}





`

export const QrCode = styled.div `

width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}
.hide {
    display: none;
}
.QmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}

`


export const HelpCenter = styled.div `
width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}

.featuredIconConfig {
    color: #fff;
    transition: all ease-in-out 0.2s;
    cursor: pointer;

}
.featuredIconConfig:hover {
    border: 1px solid #888;
    background-color: #ddd;


}
.hide {
    display: none;
}
.HmyDIV:hover + .hide {
    display: block;
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #191970;
}





`


export const Logout = styled.div `

width: 2vw;
height: 2vh;


img {
    color: #fff;
    width: 2.0vw;
    height:2.0vh;
    position:absolute;
    margin-top: 0.5vh;
    margin-left: -0.5vw;

}
a {
    color: #fff;
}
&:hover {
        opacity: 0.5;
       
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #b3cee5;
  color: #191970;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
`

export const CantoDireito = styled.div `

width: 10vw;
height: 5vh;
display : flex;
justify-content: center;
//background-color: yellow;
position: absolute;
margin-left: 90vw;



.divider::after {
    content: "|";
    color: #005A9C;
    padding: 0.0vh 0.25vw;
    //margin-left:.15vw;
    //margin-top: 3.5vh;

}

@media screen and (max-width: 1828px) {

}

`

export const Local = styled.div `
width: 4vw;
align-self: center ;
justify-content: center;
margin-left: 1vw;
//background-color: #005A9C;

h3 {

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #fff;


}

@media screen and (max-width: 1841px) {
    width: 5vw;
    margin-left: 0.5vw;   

}

`

export const UserName = styled.div `
width: 4vw;
align-self: center ;
justify-content: center;
//background-color: #005A9C;


h3 {    
    
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #fff;
    justify-content: center;


}

@media screen and (max-width: 1841px) {
    //width: 5vw;
    margin-left: 0.5vw;   

}


`
export const ConfigGear1 = styled.div `

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
        right : 1vw;
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
        left : 10vw;

    }
    span {
        
        color: #ee6b26;
        padding: 7px 7px;
        border-radius: 50%;
        font-size: 20px;
        background-color: #fff;
        position: relative;
        top: -0.5vh;
        left : 7vw;

    }

    &:hover {
        opacity: 0.5;
}
}.featuredIcons {

}.featuredIconConfig {
    color: #fff;

}

`



