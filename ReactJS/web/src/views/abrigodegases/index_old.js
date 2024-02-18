import React from 'react';
import * as S from './styles';



import Header from '../../components/Header';
import AbrigoBody from '../../components/abrigodegases';
import Footer from '../../components/Footer';

//import Routes from '../routes';


function abrigodegases() {

  return (
            <S.Container>

            <Header />
        
           <AbrigoBody />
          
            <Footer />
    
 
  
            </S.Container>

 
  
  )
}

export default abrigodegases;