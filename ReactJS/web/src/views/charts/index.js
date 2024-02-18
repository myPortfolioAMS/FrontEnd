import React from 'react';
import * as S from './styles';


import ChartsManHe1DETAILED from '../../components/ChartsManHe1DETAILED';

import Header from '../../components/Header';

import Footer from '../../components/Footer';


function Charts () {


    return (

        <S.Container>
            <Header />  

           

            <S.CHARTS>

            

            <ChartsManHe1DETAILED />

         

            </S.CHARTS>

           

       

            <Footer />

        </S.Container>
    )
}

export default Charts;