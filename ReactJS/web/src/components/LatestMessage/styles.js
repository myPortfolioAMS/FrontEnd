import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


height: 40%;

// background: #999;

//display: flex;
align-items: center;
justify-content: center;
position: absolute;
margin-left: 15vw;

//padding-left: 150px;

@media screen and (max-width: 1296px) {
  width: 50%;
}
`;

export const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


export const FeaturedContainer2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10vh;
    justify-content: space-between;
`;

export const FeaturedItem = styled.div`
    flex: 1;
    height: 19vh;
    //margin: 0px 10px;
    margin-top: -9vh;
    //background-color: yellow;
    //border-color: green;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
   // border: 3px solid #191970;//#25D366;////#005A9C;//gray;
    border: 3px solid #25D366;
    
    img {
        width: 3vw;
        height: 5vh;
        margin-left: 35.5vw;
        margin-top: -2vh;


    }
`;

export const FeaturedTitle = styled.span`
    //font-family: 'Roboto', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: italic;
    font-weight: 600;
    color: #191970;//#005A9C;//gray;
    position: relative;
    margin-top: 2vh;

    img {
        width: 3vw;
        height: 5vh;
        margin-left: 36vw;
        margin-top: -4vh;


    }

    h2{

        margin-top: -2vh;
    }
`;

export const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    .featuredMoney{
        font-size: 30px;
        font-weight: 600;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }.featuredIcon{
        font-size: 14px;
        margin-left: 5px;
        color: green;
    }.featuredIcon.negative{
        color: red;
    }.featuredIconLogo{
      font-size: 44px;
      margin-left: 1vw;
      color: green;

    }.featuredIconLogoNegative{
        color: red;
        font-size: 44px;
    }.featuredIconLogoAlarme{
      font-size: 44px;
      margin-left: 7vw;
      color: green;
    }.featuredIconLogoTroca{
      font-size: 44px;
      margin-left: 3vw;
      color: green;

    }

`;
export const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
    position: relative;
    font-style: italic;
    margin-top: -2vh;
    

    h2{
 
    display: flex;
    justify-content: space-between;
    margin-top: -0.1vh;
    }
`;