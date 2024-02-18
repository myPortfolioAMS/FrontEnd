
import React from 'react';
import * as S from './styles';


import TarixLogo from '../../assets/TARIX_BRANCO_LARGE.png';
//import TarixLogo from '../../assets/TARIX_ROXO_LARGE.png';
import GasesData from '../../assets/logo_GasesData_G.png'
//import SmartGauge from '../../assets/logo_SmartGauge_ROXO_v1.png'
import SmartGauge from '../../assets/logo_SmartGauge_Green_v1.png'
import bell from '../../assets/bell.png'
import config from '../../assets/config.png'

import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import KPI from '../../assets/personal-kpi-48.png'
import KPIW from '../../assets/personal-kpi-512-white.png'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import centralDuplaVaziaHE from '../../assets/CENTRAL_DUPLA_VAZIA_HE.png';
import centralDuplaVaziaARS from '../../assets/CENTRAL_DUPLA_VAZIA_ARS.png';
import centralDuplaVaziaN2 from '../../assets/CENTRAL_DUPLA_VAZIA_N2.png';
import centralDuplaVaziabranco from '../../assets/CENTRAL_DUPLA_VAZIA_branco.png';
import centralDuplaVazia from '../../assets/CENTRAL_DUPLA_VAZIA.png';

import {getUser, removeUserSession, setUserSession} from '../../service/AuthService';
import {getToken} from '../../service/AuthService';
import {NavLink, useNavigate, Link} from 'react-router-dom';

function Header (props) {

    const navigate = useNavigate();

    const logoutHandler = () => {

        removeUserSession();
        //props.history.push('/login');
        navigate('/login', props);
        alert("Log out successful");


    }

    const goToAbrigoDeGases = () => {


        //props.history.push('/login');
        navigate('/AbrigoDeGases', props);
        //alert("travel to Manometers successful");
    
    
    }

    return (
        <S.Container>

            <S.LeftSide>

            <img src={TarixLogo} alt="TarixLogo" />
          

            {/*<h3>from analog to the future </h3>
            <h3>helps you work better </h3>*/}
            <h3>dare to innovate</h3>

            </S.LeftSide>

            <S.RightSide>
                
            <h3>GasesData</h3>
            
            
            </S.RightSide>

           
            <S.FarRightSide>

            <S.AbrigoDeGases>  
            <div class = "AmyDIV"><a href='/AbrigoDeGases'><img src={centralDuplaVaziaARS} alt="centralDuplaVaziaHE"/></a></div>
            <div class="hide">Abrigo de Gases</div>
            </S.AbrigoDeGases>

            <span className="divider"></span>

            <S.ConfigGear>
            <div class = "CmyDIV"><a href ='/config'><span className="featuredIcons"> <SettingsApplicationsOutlinedIcon className="featuredIconConfig"/></span></a></div>
            <div class="hide">Configuração</div>
            </S.ConfigGear>

            <span className="divider"></span>

            <S.Mensagens> 
            <div class = "MmyDIV"><a href = '/mensagens'><span className="featuredIcons"> < MailOutlinedIcon className="featuredIconConfig"/></span></a></div>
            <div class="hide">Mensagens</div>
            </S.Mensagens>

            <span className="divider"></span>

            <S.Charts>

            <div class = "CmyDIV"><a href = '/Charts'><span className="featuredIcons"><InsertChartOutlinedOutlinedIcon className="featuredIconConfig"/> </span></a></div>
            <div class="hide">Gráficos</div>
            </S.Charts>

            <span className="divider"></span>

            <S.KPI>


            {/* <a href = '/KPI'><span className="featuredIcons"><MonetizationOnOutlinedIcon className="featuredIconConfig"/> </span></a>
            */}

            <div class = "KmyDIV"><a href = '/KPI'><span className="featuredIcons"><img className="imgInverter" src={KPIW} alt="KPI"/></span></a></div>
            <div class="hide">Indicadores</div>
            </S.KPI>

            <span className="divider"></span>
            <S.User>
            <div class = "UmyDIV"><a href='/UserProfile'><span className="featuredIcons"> <AssignmentIndOutlinedIcon className="featuredIconConfig"/></span></a></div>
            <div class="hide">Usuário</div>
            </S.User>

            <span className="divider"></span>

            <S.QrCode> 
            <div class = "QmyDIV"><a href = '/QrCode'><span className="featuredIcons"><QrCode2OutlinedIcon className="featuredIconConfig"/></span></a></div>
            <div class="hide">QR Code</div>
            </S.QrCode>

            <span className="divider"></span>

            <S.HelpCenter>
            <div class = "HmyDIV"><a href = '/HelpCenter'><span className="featuredIcons"><HelpCenterOutlinedIcon className="featuredIconConfig"/> </span></a> </div>
            <div class="hide">Suporte</div>
            </S.HelpCenter>

            <span className="divider"></span>

            <S.Logout> 
            <div class = "myDIV"><a href = '/Login'onClick={() => {logoutHandler()}}><span className="featuredIcons"><LogoutOutlinedIcon className="featuredIconConfig"/> </span></a></div>
            <div class="hide">Sair</div>
            </S.Logout>

            <span className="divider"></span>

            

            </S.FarRightSide>

            <S.CantoDireito>

            <S.Local>
            <h3>São Paulo</h3>

            </S.Local>

            <span className="divider"></span>

            <S.UserName>

                <h3>ALINE</h3>
            </S.UserName>

            <span className="divider"></span>

            </S.CantoDireito>

        </S.Container>

            

    )
}

export default Header;

