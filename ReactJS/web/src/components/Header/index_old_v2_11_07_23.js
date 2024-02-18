
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
            <h3>here to help you</h3>

            </S.LeftSide>

            <S.RightSide>
                
            <h3>SmartGauges</h3>
            
            
            </S.RightSide>

           
            <S.FarRightSide>

            <S.AbrigoDeGases>  

            <a href='/AbrigoDeGases'><img src={centralDuplaVaziaARS} alt="centralDuplaVaziaHE"/></a>

            </S.AbrigoDeGases>

            <S.ConfigGear>
            <a href ='/config'><span className="featuredIcons"> <SettingsApplicationsOutlinedIcon className="featuredIconConfig"/></span></a>
            </S.ConfigGear>

            <S.Mensagens> 

            <a href = '/mensagens'><span className="featuredIcons"> < MailOutlinedIcon className="featuredIconConfig"/></span></a>

            </S.Mensagens>

            <S.User>

            <a href='/UserProfile'><span className="featuredIcons"> <AssignmentIndOutlinedIcon className="featuredIconConfig"/></span></a>

            </S.User>

            <S.QrCode> 
            <a href = '/QrCode'><span className="featuredIcons"><QrCode2OutlinedIcon className="featuredIconConfig"/></span></a>

            </S.QrCode>

            <S.HelpCenter>

            <a href = '/HelpCenter'><span className="featuredIcons"><HelpCenterOutlinedIcon className="featuredIconConfig"/> </span></a> 
            </S.HelpCenter>

            <S.Logout> 

            <a href = '/Login'onClick={() => {logoutHandler()}}><span className="featuredIcons"><LogoutOutlinedIcon className="featuredIconConfig"/> </span></a>

            </S.Logout>

            </S.FarRightSide>

        </S.Container>

            

    )
}

export default Header;

