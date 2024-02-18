import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../service/api";

import whatsapp_1 from "../../assets/whatsapp_1.png";
import whatsapp_2 from "../../assets/whatsapp_2.png";



function Latest_Message({subject, message, data, hora} ) {

    

    const [latest_message, setLatest_message] = useState([]);

   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 1 horas da manhã
    async function latest_whatsapp() {

       await api.get ('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/mensagens?deviceID=Aliine')

       .then((response) => {
        setLatest_message(response.data);
        
    })
    .catch((error) => {
      console.log(error);
    });
}
    useEffect(() => {
        latest_whatsapp();
    },[subject, message, data, hora]);

    {
        latest_message.map((t) => {subject = t.subject})
    }
    {
        latest_message.map((t) => {message= t.message_TariX})
    }
    {
        latest_message.map((t) => {data= t.data})
    }
    {
        latest_message.map((t) => {hora= t.hora})
    }

    const latest_message_Ascending = latest_message.sort((a, b) => a.data - b.data);
    console.log("latest_message_Ascending :",latest_message_Ascending);

    const latest_message_Descending = latest_message.sort((a, b) => b.data - a.data);
    console.log("latest_message_Descending :",latest_message_Descending);


    const latest_message_string_Asceding = latest_message_Ascending.sort((a,b)=>
    a.subject > b.subject ? 1 : -1); 
    console.log("latest_message_string_Asceding :",latest_message_string_Asceding);

  return (
    

    
    <S.Container>

    <S.FeaturedContainer>
       
            
            <S.FeaturedItem> 
            <S.FeaturedTitle> <h2>Últimos Eventos / Mensagens Whatsapp:</h2> </S.FeaturedTitle>
            <img src = {whatsapp_2} alt = "whatsapp_logo" />
            <>
            {latest_message.map((t) => 
            <S.FeaturedSub><h2>{t.data} - {t.hora} - Assunto : {t.subject}</h2></S.FeaturedSub>
                )}
            </>
            {/*<S.FeaturedTitle><h2>{data} - {hora} - Assunto : {subject}</h2><img src = {whatsapp_2} alt = "whatsapp_logo" />  </S.FeaturedTitle><br></br>*/}
            {/*<S.FeaturedSub><h2>{message}</h2></S.FeaturedSub>*/}
        
        
            <S.FeaturedMoneyContainer> 

                {/*  <span className= "featuredMoney">{data}</span>*/}
                <span className="featuredMoneyRate"> <whatsapp_1 className="featuredIcon positive"/></span> 
                <span className="featuredMoneyRate"> <whatsapp_2 className="featuredIconLogo"/></span> 
            </S.FeaturedMoneyContainer>
            {/* <S.FeaturedSub>{message}</S.FeaturedSub> */}
            
            </S.FeaturedItem>

    </S.FeaturedContainer>


    </S.Container>

    );

}

export default Latest_Message;
