
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaOxN from '../../assets/CENTRAL_DUPLA_VAZIA_OxN.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

import OxN05 from '../../assets/OxN_05.png';
import OxN10 from '../../assets/OxN_10.png';
import OxN15 from '../../assets/OxN_15.png';
import OxN20 from '../../assets/OxN_20.png';
import OxN25 from '../../assets/OxN_25.png';
import OxN30 from '../../assets/OxN_30.png';
import OxN35 from '../../assets/OxN_35.png';
import OxN40 from '../../assets/OxN_40.png';
import OxN45 from '../../assets/OxN_45.png';
import OxN50 from '../../assets/OxN_50.png';
import OxN55 from '../../assets/OxN_55.png';
import OxN60 from '../../assets/OxN_60.png';
import OxN65 from '../../assets/OxN_65.png';
import OxN70 from '../../assets/OxN_70.png';
import OxN75 from '../../assets/OxN_75.png';
import OxN80 from '../../assets/OxN_80.png';
import OxN85 from '../../assets/OxN_85.png';
import OxN90 from '../../assets/OxN_90.png';
import OxN95 from '../../assets/OxN_95.png';
import OxN100 from '../../assets/OxN_100.png';

import bellOxN from '../../assets/bell_OxN.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';



function CentralOxN (PatualOxN1, PatualOxN2) {

    
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
 
     }, [PatualOxN1, PatualOxN2]);

     {
      valoresNow.map(t => ( PatualOxN1=Number(t.He).toFixed(0)

      ))
    }

    {
      valoresNow.map(t => ( PatualOxN2=Number(t.He2).toFixed(0)

      ))

// Variavéis que aramazenam valores atuais das pressões dos gases
let OxNNow_1 = (PatualOxN1);
let OxNNow_2 = PatualOxN2;
// final da função que faz a requisição dos valores atuais
      }

      PatualOxN1 = Math.round(1.75*Number(PatualOxN1))
      PatualOxN2= 165;


    return (
        <S.ContainerOxN>
            
            <S.CENTRALOXN>

                <img src={centralDuplaVaziaOxN} alt="Central Dupla Óxido Nitroso" />

                {PatualOxN1 >= 190 &&<S.OxN1001><img src= {OxN100} alt="OxN100_1" />  </S.OxN1001> }
                {PatualOxN1 >= 180 &&<S.OxN1001><img src= {OxN95} alt="OxN95_1" />  </S.OxN1001> }
                {PatualOxN1 >= 170 &&<S.OxN1001><img src= {OxN90} alt="OxN90_1" />  </S.OxN1001> }
                {PatualOxN1 >= 160 &&<S.OxN1001><img src= {OxN85} alt="OxN85_1" />  </S.OxN1001> }
                {PatualOxN1 >= 150 &&<S.OxN1001><img src= {OxN80} alt="OxN80_1" />  </S.OxN1001> }
                {PatualOxN1 >= 140 &&<S.OxN1001><img src= {OxN75} alt="OxN75_1" />  </S.OxN1001> }
                {PatualOxN1 >= 130 &&<S.OxN1001><img src= {OxN70} alt="OxN70_1" />  </S.OxN1001> }
                {PatualOxN1 >= 120 &&<S.OxN1001><img src= {OxN65} alt="OxN65_1" />  </S.OxN1001> }
                {PatualOxN1 >= 110 &&<S.OxN1001><img src= {OxN60} alt="OxN60_1" />  </S.OxN1001> }
                {PatualOxN1 >= 100 &&<S.OxN1001><img src= {OxN55} alt="OxN55_1" />  </S.OxN1001> }
                {PatualOxN1 >= 90 &&<S.OxN1001><img src= {OxN50} alt="OxN50_1" />  </S.OxN1001> }
                {PatualOxN1 >= 80 &&<S.OxN1001><img src= {OxN45} alt="OxN45_1" />  </S.OxN1001> }
                {PatualOxN1 >= 70 &&<S.OxN1001><img src= {OxN40} alt="OxN40_1" />  </S.OxN1001> }
                {PatualOxN1 >= 60 &&<S.OxN1001><img src= {OxN35} alt="OxN35_1" />  </S.OxN1001> }
                {PatualOxN1 >= 50 &&<S.OxN1001><img src= {OxN30} alt="OxN30_1" />  </S.OxN1001> }
                {PatualOxN1 >= 40 &&<S.OxN1001><img src= {OxN25} alt="OxN25_1" />  </S.OxN1001> }
                {PatualOxN1 >= 30 &&<S.OxN1001><img src= {OxN20} alt="OxN20_1" />  </S.OxN1001> }
                {PatualOxN1 >= 20 &&<S.OxN1001><img src= {OxN15} alt="OxN15_1" />  </S.OxN1001> }
                {PatualOxN1 >= 10 &&<S.OxN1001><img src= {OxN10} alt="OxN10_1" />  </S.OxN1001> }
                {PatualOxN1 >= 1 &&<S.OxN1001><img src= {OxN05} alt="OxN5_1" />  </S.OxN1001> }

                {PatualOxN2 >= 190 &&<S.OxN1002><img src= {OxN100} alt="OxN100_2" />  </S.OxN1002> }
                {PatualOxN2 >= 180 &&<S.OxN1002><img src= {OxN95} alt="OxN95_2" />  </S.OxN1002> }
                {PatualOxN2 >= 170 &&<S.OxN1002><img src= {OxN90} alt="OxN90_2" />  </S.OxN1002> }
                {PatualOxN2 >= 160 &&<S.OxN1002><img src= {OxN85} alt="OxN85_2" />  </S.OxN1002> }
                {PatualOxN2 >= 150 &&<S.OxN1002><img src= {OxN80} alt="OxN80_2" />  </S.OxN1002> }
                {PatualOxN2 >= 140 &&<S.OxN1002><img src= {OxN75} alt="OxN75_2" />  </S.OxN1002> }
                {PatualOxN2 >= 130 &&<S.OxN1002><img src= {OxN70} alt="OxN70_2" />  </S.OxN1002> }
                {PatualOxN2 >= 120 &&<S.OxN1002><img src= {OxN65} alt="OxN65_2" />  </S.OxN1002> }
                {PatualOxN2 >= 110 &&<S.OxN1002><img src= {OxN60} alt="OxN60_2" />  </S.OxN1002> }
                {PatualOxN2 >= 100 &&<S.OxN1002><img src= {OxN55} alt="OxN55_2" />  </S.OxN1002> }
                {PatualOxN2 >= 90 &&<S.OxN1002><img src= {OxN50} alt="OxN50_2" />  </S.OxN1002> }
                {PatualOxN2 >= 80 &&<S.OxN1002><img src= {OxN45} alt="OxN45_2" />  </S.OxN1002> }
                {PatualOxN2 >= 70 &&<S.OxN1002><img src= {OxN40} alt="OxN40_2" />  </S.OxN1002> }
                {PatualOxN2 >= 60 &&<S.OxN1002><img src= {OxN35} alt="OxN35_2" />  </S.OxN1002> }
                {PatualOxN2 >= 50 &&<S.OxN1002><img src= {OxN30} alt="OxN30_2" />  </S.OxN1002> }
                {PatualOxN2 >= 40 &&<S.OxN1002><img src= {OxN25} alt="OxN25_2" />  </S.OxN1002> }
                {PatualOxN2 >= 30 &&<S.OxN1002><img src= {OxN20} alt="OxN20_2" />  </S.OxN1002> }
                {PatualOxN2 >= 20 &&<S.OxN1002><img src= {OxN15} alt="OxN15_2" />  </S.OxN1002> }
                {PatualOxN2 >= 10 &&<S.OxN1002><img src= {OxN10} alt="OxN10_2" />  </S.OxN1002> }
                {PatualOxN2 >= 1 &&<S.OxN1002><img src= {OxN05} alt="OxN5_2" />  </S.OxN1002> }




                <h3>ÓXIDO NITROSO</h3>

                          
            <S.PressaoAtualOxNitrosoCilindro1><h2>EM USO</h2></S.PressaoAtualOxNitrosoCilindro1>

            <S.VALOR_PressaoAtual_OxNitroso_Cilindro_1><h2>{PatualOxN1}</h2></S.VALOR_PressaoAtual_OxNitroso_Cilindro_1>

            <S.UNIDADE_PressaoAtual_OxNitroso_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_OxNitroso_Cilindro_1>

            <S.bellOxN1><img src= {bellOxN} alt= "Alarme 1 OxN"></img></S.bellOxN1>

            <S.bellOxN1_text><h2>10.0</h2></S.bellOxN1_text>

            <S.PressaoAtualOxNitrosoCilindro2><h2>RESERVA</h2></S.PressaoAtualOxNitrosoCilindro2>

            <S.VALOR_PressaoAtual_OxNitroso_Cilindro_2><h2>{PatualOxN2}</h2></S.VALOR_PressaoAtual_OxNitroso_Cilindro_2>

             <S.UNIDADE_PressaoAtual_OxNitroso_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_OxNitroso_Cilindro_2>

                <S.bellOxN2><img src= {bellOxN} alt= "Alarme 2 Óxido Nitroso"></img></S.bellOxN2>
                <S.bellOxN2_text><h2>10.0</h2></S.bellOxN2_text>

            </S.CENTRALOXN>

            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src={manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_azul} className="featuredIconLogo1"/></span> 
              </a>
        </S.MANOMETER>


       

        </S.ContainerOxN>


    )
}

export default CentralOxN;