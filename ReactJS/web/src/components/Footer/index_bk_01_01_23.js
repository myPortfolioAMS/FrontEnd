
import React from 'react';
import * as S from './styles';
import Sidebar from './Sidebar';

import TarixLogo from '../../assets/TARIX_BRANCO_LARGE.png';
import GasesData from '../../assets/logo_GasesData_G.png'
import bell from '../../assets/bell.png'

function Footer () {

    return (
        <S.Container>

            <S.logoGasesData>
            <img src={GasesData} alt="GasesData" />
                
            </S.logoGasesData>

            <S.LeftSide>

            <img src={TarixLogo} alt="TarixLogo" />
          

        

            </S.LeftSide>

            <S.RightSide>

            <h3>Telemetria para Cilindros de Gases</h3>
        
            </S.RightSide>

            <S.Sino>

            < a href="#" id="notification">
          
                 <img src={bell} alt="Notificação" /> 
                <span>6</span>
                </a>

            </S.Sino>

            <S.burgerMenu>

                  
            <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
             <div id="page-wrap"></div>
            </div>
            
            </S.burgerMenu>
        </S.Container>


    )
}

export default Footer;