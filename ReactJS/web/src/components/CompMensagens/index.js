import React, { useState, useEffect, useRef } from "react";

import * as S from "./styles";
import api from "../../service/api";
import whatsapp_2 from "../../assets/whatsapp_2.png";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function CompMensagens ({subject, message, data, hora}) {

    const [mensagens, setMensagens] = useState([]);

async function loadMensagens() { 

    await api.get ('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/mensagens?deviceID=Aliine')

       .then((response) => {
        setMensagens(response.data);

    })
    .catch((error) => {
        console.log(error);
    });
}
    useEffect(() => {
        loadMensagens();
    },[subject, message, data, hora]);

    {
        mensagens.map((t) => {subject = t.subject})
    }
    {
        mensagens.map((t) => {message= t.message_TariX})
    }
    {
        mensagens.map((t) => {data= t.data})
    }
    {
        mensagens.map((t) => {hora= t.hora})
    }



    return (
        <S.Container>
            <S.MENSAGENS>
                <h3> Eventos / Mensagens Whatsapp: </h3>
            </S.MENSAGENS>
            <S.CARD_MENSAGENS>
                {mensagens.map((mensagem) => (
                    <S.CARD_MENSAGENS_ITEM key={mensagem._id} >
                        <S.CARD_MENSAGENS_ITEM_DATA>
                            <p> Data : {mensagem.data} </p>
                        </S.CARD_MENSAGENS_ITEM_DATA>
                        <S.CARD_MENSAGENS_ITEM_HORA>
                            <p> Horário: {mensagem.hora} </p>
                        </S.CARD_MENSAGENS_ITEM_HORA>
                        <S.CARD_MENSAGENS_ITEM_TITULO>
                            <p> Assunto :{mensagem.subject} </p>{/* <img src = {whatsapp_2} alt = "whatsapp_logo" />*/}
                        </S.CARD_MENSAGENS_ITEM_TITULO>
                        <S.CARD_MENSAGENS_ITEM_LOGO>
                            <p><img src = {whatsapp_2} alt = "whatsapp_logo" /></p>
                        </S.CARD_MENSAGENS_ITEM_LOGO>
                        <S.CARD_MENSAGENS_ITEM_DESCRICAO>
                            <p> <h3>Mensagem : </h3> {mensagem.message_TariX} </p>
                        </S.CARD_MENSAGENS_ITEM_DESCRICAO>
                    </S.CARD_MENSAGENS_ITEM>
                ))}
            </S.CARD_MENSAGENS>

            <S.NextPage>
            <span className="featuredIcons"> <ArrowForwardIosOutlinedIcon className="featuredIconConfig"/></span>
            <span className="featuredIcons"> <ArrowForwardIosOutlinedIcon className="featuredIconConfig_1"/></span>
            <span className="featuredIcons"> <ArrowForwardIosOutlinedIcon className="featuredIconConfig_2"/></span>
            <span className="featuredIcons3">+ 5 </span>
            </S.NextPage>

                
        </S.Container>
    );
}

export default CompMensagens;