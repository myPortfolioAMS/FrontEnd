
import React,{useState, useEffect, useRef} from 'react';
import * as S from './styles';
import Sidebar from './Sidebar';

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

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import centralDuplaVaziaHE from '../../assets/CENTRAL_DUPLA_VAZIA_HE.png';
import centralDuplaVaziaARS from '../../assets/CENTRAL_DUPLA_VAZIA_ARS.png';
import centralDuplaVaziaN2 from '../../assets/CENTRAL_DUPLA_VAZIA_N2.png';
import centralDuplaVaziabranco from '../../assets/CENTRAL_DUPLA_VAZIA_branco.png';
import centralDuplaVazia from '../../assets/CENTRAL_DUPLA_VAZIA.png';

import {getUser, removeUserSession, setUserSession} from '../../service/AuthService';
import {getToken} from '../../service/AuthService';
import {useNavigate} from 'react-router-dom';

function Footer (props) {

    const navigate = useNavigate();
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const logoutHandler = () => {

        removeUserSession();
        //props.history.push('/login');
        navigate('/login', props);
        alert("Log out successful");


    }

    return (
        <S.Container>
{/*
            <S.logoGasesData>
            <img src={SmartGauge} alt="SmartGauge" />
            
                
            </S.logoGasesData>
    */}
            <S.LeftSide>

            
            <h3>© 2023, TariX, Inc. ou suas afiliadas.</h3>

            </S.LeftSide>

            <S.FarLeftSide>
            
            <h3>r:53_7</h3>

            </S.FarLeftSide>

            <S.BottomScreen >

                <S.ScreenSize_1>


                <h2>Width: {windowSize.current[0]}</h2>
                </S.ScreenSize_1>

                <S.ScreenSize_2>

                <h2>Height: {windowSize.current[1]}</h2>

                </S.ScreenSize_2>


            </S.BottomScreen >
   

            <S.CenterSide>

            <a href="www.tarix.com.br"><h3>www.tarix.com.br</h3></a>
            </S.CenterSide>

            <S.Privacidade>
                
            <h3>Privacidade</h3>
            
            </S.Privacidade>

            <S.Termos>

            <h3>Termos</h3>

            </S.Termos>

            <S.PreferenciaDeCookies>
            <h3>Preferência de Cookies</h3>

            </S.PreferenciaDeCookies>

            {/*

            <S.Home>

            <a href = '/Login'><span className="featuredIcons"> <HomeOutlinedIcon className="featuredIconConfig"/></span></a>

            </S.Home>

            */}

        </S.Container>


    )
}

export default Footer;

