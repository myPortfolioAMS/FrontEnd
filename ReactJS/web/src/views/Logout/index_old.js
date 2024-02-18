import React from 'react';
import * as S from './styles';



import Header from '../../components/Header';
import LogoutBody  from './logoutBody';
import Footer from '../../components/Footer';




function Logout() {

  return (
            <S.Container>

            <Header />
        
           <LogoutBody />
          
            <Footer />
    
 
  
            </S.Container>

 
  
  )
}

export default Logout;

