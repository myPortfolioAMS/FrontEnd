import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 3vh;
background-color: #191970;
position: fixed;
bottom: 0;
display: flex;
border-top: 5px solid #b3cee5;
align-items: center;
justify-content: center;

span {
    color: #fff;
    font-size: 18px;
}

`
export const logoGasesData = styled.div `
width: 25%;
height: 7vh;

img {

position: relative;
top: 0.5vh;
left : 0vw;

width: 50%;
height: 50px;


}

h3 {

    position: relative;
    margin-top: 1.5vh;
    margin-left: 0.5vw;
    align-self: center ;
    justify-content: center;

    color: #f0f8ff;//#fff;

    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
}


` 

export const LeftSide = styled.div`
width: 25%;
height: 3vh;
display: flex;
//background-color:yellow;
align-items: center;


    
   
    img {
        margin-top: 0vh;
        margin-left: -6vw;
        width: 87px;
        height: 30px;
    }

    h3 {

        position: absolute;
        margin-top: 0vh;
        margin-left: -18.0vw;
        align-self: center ;
        justify-content: center;

        color: #f0f8ff;//#fff;

        font-size: 10px;
        //font-weight: bold;
        font-family: 'Roboto', sans-serif;
        //font-style: italic;
        }

    @media screen and (max-width: 1296px) {

        img {
        width: 93px;
        height: 32px;
    }



    }



`


export const FarLeftSide = styled.div`
width: 25%;
height: 3vh;
display: flex;
//background-color:yellow;
align-items: center;


    
   
    img {
        margin-top: 0vh;
        margin-left: -6vw;
        width: 87px;
        height: 30px;
    }

    h3 {

        position: absolute;
        margin-top: 0vh;
        margin-left: -49.5vw;
        align-self: center ;
        justify-content: center;

        color: #f0f8ff;//#fff;

        font-size: 10px;
        //font-weight: bold;
        font-family: 'Roboto', sans-serif;
        //font-style: italic;
        }

    @media screen and (max-width: 1296px) {

        img {
        width: 93px;
        height: 32px;
    }



    }



`


export const CenterSide = styled.div `

h3 {

position: absolute;
margin-top: -0.8vh;
margin-left: -28.5vw;
align-self: center ;
justify-content: center;

color: #f0f8ff;//#fff;

font-size: 10px;
//font-weight: bold;
font-family: 'Roboto', sans-serif;
//font-style: italic;
}



`

export const Privacidade = styled.div `


h3 {

position: absolute;
margin-top: -0.80vh;
margin-left: 2vw;
//align-self: center ;
//justify-content: center;

color: #f0f8ff;//#fff;

font-size: 10px;
//font-weight: bold;
font-family: 'Roboto', sans-serif;
//font-style: italic;
}
`


export const Termos = styled.div `


h3 {

position: absolute;
margin-top: -0.80vh;
margin-left: 10vw;
//align-self: center ;
//justify-content: center;

color: #f0f8ff;//#fff;

font-size: 10px;
//font-weight: bold;
font-family: 'Roboto', sans-serif;
//font-style: italic;
}
`

export const PreferenciaDeCookies = styled.div `


h3 {

position: absolute;
margin-top: -0.85vh;
margin-left: 16vw;
//align-self: center ;
//justify-content: center;

color: #f0f8ff;//#fff;

font-size: 10px;
//font-weight: bold;
font-family: 'Roboto', sans-serif;
//font-style: italic;
}
`



export const ConfigGear = styled.div `

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

export const Mensagens = styled.div `


`


export const User = styled.div `


`

export const QrCode = styled.div `


`

export const Config = styled.div `

width: 3vw;
height: 3vh;

img {

    margin-top: -1.0vh;
    margin-left: 0.5vw;


}
a {
    color: #fff;
}




`

export const AbrigoDeGases = styled.div `

width: 3vw;
height: 3vh;


img {
    color: #fff;
    width: 3vw;
    height: 4vh;
    position:absolute;
    margin-top: -0.5vh;
    margin-left: 4.5vw;

}
a {
    color: #fff;
}



`

export const Logout = styled.div `




`

export const Home = styled.div `




`



export const burgerMenu = styled.div `

    width: 15%;
    height: 7vh;
   
        position: relative;
        top: 2.5vh;
        left : 0vw; 
        `

export const BottomScreen = styled.div`
  width: 40vw; //40vw
  height: 25vh; //84vh
  //background-color: yellow;
  //box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  //display: flex;
  position: absolute;
  margin-top: 0vh;
  margin-left: -10vw;
`;

export const ScreenSize_1 = styled.div`
  width: 15vw; //40vw
  height: 3vh; //84vh
  //background-color: yellow;

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: absolute;
  margin-top: 0vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 40%; // -135%;
    margin-left: -20%; // -15%;
  }

  
  @media screen and (max-width: 1920px) {
    h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff;//#000; //#f8612d;
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
`;

export const ScreenSize_2 = styled.div`
  width: 15vw; //40vw
  height: 3vh; //84vh

  //background-color: #c1e4fc;
  //box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  //box-shadow:  rgba(0,0,0,0.75);
  display: flex;

  position: absolute;
  margin-top: -10vh;
  margin-left: 0vw;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: -20%;
    margin-left: -90%;
  }

  
  @media screen and (max-width: 1920px) {
    h2 {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    font-weight: regular;

    color: #ffffff;//#000; //#f8612d;
    align-items: left;
    justify-content: center;
    position: absolute;
    margin-top: 74.5%; // -135%;
    margin-left: 10%; // -15%;
  }

  }


  @media screen and (max-width: 1296px) {

h2 {
margin-top: -125%;
margin-left: -15%;
}
}
`;


