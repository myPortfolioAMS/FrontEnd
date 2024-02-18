
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';


import centralDuplaVaziaO2 from '../../assets/CENTRAL_DUPLA_VAZIA_O2.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';



import O205 from '../../assets/O2_05.png';
import O210 from '../../assets/O2_10.png';
import O215 from '../../assets/O2_15.png';
import O220 from '../../assets/O2_20.png';
import O225 from '../../assets/O2_25.png';
import O230 from '../../assets/O2_30.png';
import O235 from '../../assets/O2_35.png';
import O240 from '../../assets/O2_40.png';
import O245 from '../../assets/O2_45.png';
import O250 from '../../assets/O2_50.png';
import O255 from '../../assets/O2_55.png';
import O260 from '../../assets/O2_60.png';
import O265 from '../../assets/O2_65.png';
import O270 from '../../assets/O2_70.png';
import O275 from '../../assets/O2_75.png';
import O280 from '../../assets/O2_80.png';
import O285 from '../../assets/O2_85.png';
import O290 from '../../assets/O2_90.png';
import O295 from '../../assets/O2_95.png';
import O2100 from '../../assets/O2_100.png';

import bellO2 from '../../assets/bell_O2.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';

function CentralO2 (PatualO21, PatualO22) {

    const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais 

    
    async function loadCilindrosNow() {
  
      await api.get(
        //'https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine')
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?devideID=Aliine")     
     
               .then(response => {
                
                 CilindrosNow(response.data);
  
                 console.log('valores Agora:',valoresNow);
               
               })
               .catch(error => {
                 console.log(error);
               });
  }
  
      useEffect(() => {
  
         loadCilindrosNow();
   
       }, [ PatualO21, PatualO22]);
  
       {
        valoresNow.map(t => ( PatualO21=Number(t.He).toFixed(0)
  
        ))
      }
  
      {
        valoresNow.map(t => ( PatualO22=Number(t.He2).toFixed(0)
  
        ))
  
  // Variavéis que aramazenam valores atuais das pressões dos gases
  let o2Now_1 = (PatualO21);
  let o2Now_2 = PatualO22;
  // final da função que faz a requisição dos valores atuais
        }

        PatualO21  = Math.round(0.25*Number(PatualO21));
        PatualO22 = 11;


    return (
        <S.Container_O2>
            
            <S.CENTRAL_O2>

                <img src={centralDuplaVaziaO2} alt="Central Dupla Oxigênio" />

                {PatualO21 >= 190 &&<S.O21001><img src= {O2100} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 180 &&<S.O21001><img src= {O295} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 170 &&<S.O21001><img src= {O290} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 160 &&<S.O21001><img src= {O285} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 150 &&<S.O21001><img src= {O280} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 140 &&<S.O21001><img src= {O275} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 130 &&<S.O21001><img src= {O270} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 120 &&<S.O21001><img src= {O265} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 110 &&<S.O21001><img src= {O260} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 100 &&<S.O21001><img src= {O255} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 90 &&<S.O21001><img src= {O250} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 80 &&<S.O21001><img src= {O245} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 70 &&<S.O21001><img src= {O240} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 60 &&<S.O21001><img src= {O235} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 50 &&<S.O21001><img src= {O230} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 40 &&<S.O21001><img src= {O225} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 30 &&<S.O21001><img src= {O220} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 20 &&<S.O21001><img src= {O215} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 10 &&<S.O21001><img src= {O210} alt="O2100_1" />  </S.O21001> }
                {PatualO21 >= 1 &&<S.O21001><img src= {O205} alt="O2100_1" />  </S.O21001> }

                {PatualO22 >= 190 &&<S.O21002><img src= {O2100} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 180 &&<S.O21002><img src= {O295} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 170 &&<S.O21002><img src= {O290} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 160 &&<S.O21002><img src= {O285} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 150 &&<S.O21002><img src= {O280} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 140 &&<S.O21002><img src= {O275} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 130 &&<S.O21002><img src= {O270} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 120 &&<S.O21002><img src= {O265} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 110 &&<S.O21002><img src= {O260} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 100 &&<S.O21002><img src= {O255} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 90 &&<S.O21002><img src= {O250} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 80 &&<S.O21002><img src= {O245} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 70 &&<S.O21002><img src= {O240} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 60 &&<S.O21002><img src= {O235} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 50 &&<S.O21002><img src= {O230} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 40 &&<S.O21002><img src= {O225} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 30 &&<S.O21002><img src= {O220} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 20 &&<S.O21002><img src= {O215} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 10 &&<S.O21002><img src= {O210} alt="O2100_2" />  </S.O21002> }
                {PatualO22 >= 1 &&<S.O21002><img src= {O205} alt="O2100_2" />  </S.O21002> }




                <h3>OXIGÊNIO</h3>

                              
            <S.PressaoAtualOxigenioCilindro1><h2>EM USO</h2></S.PressaoAtualOxigenioCilindro1>

            <S.VALOR_PressaoAtual_Oxigenio_Cilindro_1><h2>{PatualO21}</h2></S.VALOR_PressaoAtual_Oxigenio_Cilindro_1>

            <S.UNIDADE_PressaoAtual_Oxigenio_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_Oxigenio_Cilindro_1>

            <S.bellO21><img src= {bellO2} alt= "Alarme 1 Oxigênio"></img></S.bellO21>

            <S.bellO21_text><h2>10.0</h2></S.bellO21_text>

            <S.PressaoAtualOxigenioCilindro2><h2>RESERVA</h2></S.PressaoAtualOxigenioCilindro2>

            <S.VALOR_PressaoAtual_Oxigenio_Cilindro_2><h2>{PatualO22}</h2></S.VALOR_PressaoAtual_Oxigenio_Cilindro_2>

            <S.UNIDADE_PressaoAtual_Oxigenio_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_Oxigenio_Cilindro_2>

            <S.bellO22><img src= {bellO2} alt= "Alarme 2 Oxigênio"></img></S.bellO22>

            <S.bellO22_text><h2>10.0</h2></S.bellO22_text>

            </S.CENTRAL_O2>

            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src={manometer_vermelho} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_vermelho}className="featuredIconLogo1"/></span> 
              </a>
        </S.MANOMETER>

       

        </S.Container_O2>


    )
}

export default CentralO2;