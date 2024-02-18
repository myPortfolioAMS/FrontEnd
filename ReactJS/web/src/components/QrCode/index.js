import React, {useState} from 'react';
import * as S from "./styles";

import Qr from 'qrcode.react';

function QrCode (){


    return(
        <S.Container>
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com a do seu celular</p>
                <S.QrCode>
                    <Qr value='getmacaddress' size = {350}/>
                </S.QrCode>

                <S.ValidationCode>


                    <span>Digite a numeração que apareceu no seu celular</span>

                    <input type="text" />
                    <button type="button">
                        Sincronizar

                    </button>
                </S.ValidationCode>
            </S.Content>
        </S.Container>
    )
}

export default QrCode;