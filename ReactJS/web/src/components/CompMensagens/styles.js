import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40%;
  //background: #999;


 
  align-items: center;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 1296px) {
  
    width: 50%;
    margin-left: -22.5vw;
  }
`;

export const MENSAGENS = styled.div`

    width: 100%;
    height: 5vh;
    display: flex;
    margin-top: -3vh;
    //background-color:red;
    
    

    h3 {
        margin-left: 2vw;
        margin-top: -2.5vh;
        font-size: 2vw;
        color: #191970;
        font-weight: bold;
    }

`



export const CARD_MENSAGENS = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    //background-color: yellow;
    margin-top: -1vh;
    margin-left: 4vw;

`

export const CARD_MENSAGENS_ITEM = styled.div`
    //width: 100%;
    //height: 10vh;
    //background-color: green;

    img {

        width: 3vw;
        height: 3vh;
        margin-top: 0vh;
        margin-left: 0vw;
    }

`

export const CARD_MENSAGENS_ITEM_DATA = styled.div`
  
    //margin: 0px 10px;
    width: 12.5vw;
    height: 5vh;
    margin-top: 0vh;
    margin-left: 1vw;
    display: flex;
    align-items: center;
 
    //border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    border-top: 1px solid #999;
    color: gray;
`;




export const CARD_MENSAGENS_ITEM_HORA = styled.div`
    width: 12.5vw;
    height: 5vh;
    margin-top: -5vh;
    margin-left: 13.5vw;
    display: flex;
    align-items: center;
   
   // border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    border-top: 1px solid #999;
    color: gray;

`
export const CARD_MENSAGENS_ITEM_TITULO = styled.div`

    width: 65vw;
    height: 5vh;
    margin-top: -5vh;
    margin-left: 26vw;
    display: flex;
    align-items: center;
    justify-content: left;
    //border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    border-top: 1px solid #999;
    color: gray;
    h3{

        font-weight: 400;
        color: gray;
    }

    img {

width: 2.5vw;
height: 2.5vh;
margin-top: 0vh;
margin-left: 37vw;
}


    

`

export const CARD_MENSAGENS_ITEM_LOGO = styled.div`
position: absolute;
margin-top: -3.5vh;
margin-left: 88vw;

img {


width: 2.5vw;
height: 2.5vh;

}


`

export const CARD_MENSAGENS_ITEM_DESCRICAO = styled.div`
    width: 90vw;
    height: 10vh;
    margin-top: 0.0vh;
    margin-left: 1vw;
    display: flex;
    padding: 1vh;
    align-items: center;
    justify-content: center;
    //border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    border-bottom: 1px solid #999;
    //border-top: 1px solid #999;
    font-style: italic;
    h3{

    font-weight: bold;
    font-style: italic;
    
    }

`

export const NextPage = styled.div` 

margin-top: 1vh;
margin-left: 97vw;

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


` 





