import React from 'react';
import * as S from './styles';


import CompMensagens from '../../components/CompMensagens';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Mensagens() {

    setTimeout(function(){
    window.location.reload();
     }, 600000);
    
    return (

        <S.Container>

            <Header />

            <S.MENSAGENS>

               
            <CompMensagens />

            </S.MENSAGENS>

        <Footer />
    
 
  
        </S.Container>

    );

}

export default Mensagens;
