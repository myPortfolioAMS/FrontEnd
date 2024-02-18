import React from 'react';
import * as S from './styles';




import ManometerHelium from '../../components/ManometerHelium/index.tsx';

import AlarmeManHe1 from '../../components/AlarmeManHe1';
import FornecedorManHe1 from '../../components/FornecedorManHe1';
import FornecedorInstHe1 from '../../components/FornecedorInstHe1';
import ChartsManHe1 from '../../components/ChartsManHe1';

import { ArrowUpward } from '@mui/icons-material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import LatestMessage from '../../components/LatestMessage';

//import Routes from '../routes';


function Manometers() {

  setTimeout(function(){
    window.location.reload();
 }, 600000);

  return (
            <S.Container>

    

            <Header />

          
            

            

            <S.ManHe> 
            <ManometerHelium />
            </S.ManHe>
           
            
            


            <S.CADASTRO_ALARME>

              <AlarmeManHe1 />
            </S.CADASTRO_ALARME>

            <S.CADASTRO_FORNECEDOR>

              <FornecedorManHe1 />
            </S.CADASTRO_FORNECEDOR>

            <S.CADASTRO_INSTALACAO> 

              <FornecedorInstHe1 />

            </S.CADASTRO_INSTALACAO>

           
            <S.CADASTRO_CHARTS>

              <ChartsManHe1 />
              
            </S.CADASTRO_CHARTS>
            

            
          <S.Message>

            <LatestMessage />
          </S.Message>
           
         
           


            <Footer />
    
 
  
            </S.Container>

 
  
  )
}

export default Manometers;
