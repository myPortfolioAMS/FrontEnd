
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaARG from '../../assets/CENTRAL_DUPLA_VAZIA_ARG.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

import ARG05 from '../../assets/ARG_05.png';
import ARG10 from '../../assets/ARG_10.png';
import ARG15 from '../../assets/ARG_15.png';
import ARG20 from '../../assets/ARG_20.png';
import ARG25 from '../../assets/ARG_25.png';
import ARG30 from '../../assets/ARG_30.png';
import ARG35 from '../../assets/ARG_35.png';
import ARG40 from '../../assets/ARG_40.png';
import ARG45 from '../../assets/ARG_45.png';
import ARG50 from '../../assets/ARG_50.png';
import ARG55 from '../../assets/ARG_55.png';
import ARG60 from '../../assets/ARG_60.png';
import ARG65 from '../../assets/ARG_65.png';
import ARG70 from '../../assets/ARG_70.png';
import ARG75 from '../../assets/ARG_75.png';
import ARG80 from '../../assets/ARG_80.png';
import ARG85 from '../../assets/ARG_85.png';
import ARG90 from '../../assets/ARG_90.png';
import ARG95 from '../../assets/ARG_95.png';
import ARG100 from '../../assets/ARG_100.png';

import bellARG from '../../assets/bell_ARG.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';




function CentralArg (PatualARG1, PatualARG2) {

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
 
     }, [PatualARG1, PatualARG2]);

     {
      valoresNow.map(t => ( PatualARG1=Number(t.He).toFixed(0)

      ))
    }

    {
      valoresNow.map(t => ( PatualARG2=Number(t.He2).toFixed(0)

      ))

// Variavéis que aramazenam valores atuais das pressões dos gases
let argNow_1 = (PatualARG1);
let argNow_2 = PatualARG2;
// final da função que faz a requisição dos valores atuais
      }

      PatualARG1 = Math.round((1.6*Number(PatualARG1)));
      PatualARG2 = 200;

    return (
        <S.ContainerArg>
            
            <S.CENTRALARG>

                <img src={centralDuplaVaziaARG} alt="Central Dupla Argônio" />

                {PatualARG1 >= 190 &&<S.ARG1001><img src= {ARG100} alt="ARG100_1" />  </S.ARG1001> }
                {PatualARG1 >= 180 &&<S.ARG1001><img src= {ARG95} alt="ARG95_1" />  </S.ARG1001> }
                {PatualARG1 >= 170 &&<S.ARG1001><img src= {ARG90} alt="ARG90_1" />  </S.ARG1001> }
                {PatualARG1 >= 160 &&<S.ARG1001><img src= {ARG85} alt="ARG85_1" />  </S.ARG1001> }
                {PatualARG1 >= 150 &&<S.ARG1001><img src= {ARG80} alt="ARG80_1" />  </S.ARG1001> }
                {PatualARG1 >= 140 &&<S.ARG1001><img src= {ARG75} alt="ARG75_1" />  </S.ARG1001> }
                {PatualARG1 >= 130 &&<S.ARG1001><img src= {ARG70} alt="ARG70_1" />  </S.ARG1001> }
                {PatualARG1 >= 120 &&<S.ARG1001><img src= {ARG65} alt="ARG65_1" />  </S.ARG1001> }
                {PatualARG1 >= 110 &&<S.ARG1001><img src= {ARG60} alt="ARG60_1" />  </S.ARG1001> }
                {PatualARG1 >= 100 &&<S.ARG1001><img src= {ARG55} alt="ARG55_1" />  </S.ARG1001> }
                {PatualARG1 >= 90 &&<S.ARG1001><img src= {ARG50} alt="ARG50_1" />  </S.ARG1001> }
                {PatualARG1 >= 80 &&<S.ARG1001><img src= {ARG45} alt="ARG45_1" />  </S.ARG1001> }
                {PatualARG1 >= 70 &&<S.ARG1001><img src= {ARG40} alt="ARG40_1" />  </S.ARG1001> }
                {PatualARG1 >= 60 &&<S.ARG1001><img src= {ARG35} alt="ARG35_1" />  </S.ARG1001> }
                {PatualARG1 >= 50 &&<S.ARG1001><img src= {ARG30} alt="ARG30_1" />  </S.ARG1001> }
                {PatualARG1 >= 40 &&<S.ARG1001><img src= {ARG25} alt="ARG25_1" />  </S.ARG1001> }
                {PatualARG1 >= 30 &&<S.ARG1001><img src= {ARG20} alt="ARG20_1" />  </S.ARG1001> }
                {PatualARG1 >= 20 &&<S.ARG1001><img src= {ARG15} alt="ARG15_1" />  </S.ARG1001> }
                {PatualARG1 >= 10 &&<S.ARG1001><img src= {ARG10} alt="ARG10_1" />  </S.ARG1001> }
                {PatualARG1 >= 1 &&<S.ARG1001><img src= {ARG05} alt="ARG5_1" />  </S.ARG1001> }

                {PatualARG2 >= 190 &&<S.ARG1002><img src= {ARG100} alt="ARG100_2" />  </S.ARG1002> }
                {PatualARG2 >= 180 &&<S.ARG1002><img src= {ARG95} alt="ARG95_2" />  </S.ARG1002> }
                {PatualARG2 >= 170 &&<S.ARG1002><img src= {ARG90} alt="ARG90_2" />  </S.ARG1002> }
                {PatualARG2 >= 160 &&<S.ARG1002><img src= {ARG85} alt="ARG85_2" />  </S.ARG1002> }
                {PatualARG2 >= 150 &&<S.ARG1002><img src= {ARG80} alt="ARG80_2" />  </S.ARG1002> }
                {PatualARG2 >= 140 &&<S.ARG1002><img src= {ARG75} alt="ARG75_2" />  </S.ARG1002> }
                {PatualARG2 >= 130 &&<S.ARG1002><img src= {ARG70} alt="ARG70_2" />  </S.ARG1002> }
                {PatualARG2 >= 120 &&<S.ARG1002><img src= {ARG65} alt="ARG65_2" />  </S.ARG1002> }
                {PatualARG2 >= 110 &&<S.ARG1002><img src= {ARG60} alt="ARG60_2" />  </S.ARG1002> }
                {PatualARG2 >= 100 &&<S.ARG1002><img src= {ARG55} alt="ARG55_2" />  </S.ARG1002> }
                {PatualARG2 >= 90 &&<S.ARG1002><img src= {ARG50} alt="ARG50_2" />  </S.ARG1002> }
                {PatualARG2 >= 80 &&<S.ARG1002><img src= {ARG45} alt="ARG45_2" />  </S.ARG1002> }
                {PatualARG2 >= 70 &&<S.ARG1002><img src= {ARG40} alt="ARG40_2" />  </S.ARG1002> }
                {PatualARG2 >= 60 &&<S.ARG1002><img src= {ARG35} alt="ARG35_2" />  </S.ARG1002> }
                {PatualARG2 >= 50 &&<S.ARG1002><img src= {ARG30} alt="ARG30_2" />  </S.ARG1002> }
                {PatualARG2 >= 40 &&<S.ARG1002><img src= {ARG25} alt="ARG25_2" />  </S.ARG1002> }
                {PatualARG2 >= 30 &&<S.ARG1002><img src= {ARG20} alt="ARG20_2" />  </S.ARG1002> }
                {PatualARG2 >= 20 &&<S.ARG1002><img src= {ARG15} alt="ARG15_2" />  </S.ARG1002> }
                {PatualARG2 >= 10 &&<S.ARG1002><img src= {ARG10} alt="ARG10_2" />  </S.ARG1002> }
                {PatualARG2 >= 1 &&<S.ARG1002><img src= {ARG05} alt="ARG5_2" />  </S.ARG1002> }

                <h3>ARGÔNIO</h3>

                      
            <S.PressaoAtualArgonioCilindro1><h2>EM USO</h2></S.PressaoAtualArgonioCilindro1>

            <S.VALOR_PressaoAtual_Argonio_Cilindro_1><h2>{PatualARG1}</h2></S.VALOR_PressaoAtual_Argonio_Cilindro_1>

            <S.UNIDADE_PressaoAtual_Argonio_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_Argonio_Cilindro_1>

            <S.bellARG1><img src= {bellARG} alt= "Alarme 1 Argônio"></img></S.bellARG1>

            <S.bellARG1_text><h2>8.00</h2></S.bellARG1_text>

             <S.PressaoAtualArgonioCilindro2><h2>RESERVA</h2></S.PressaoAtualArgonioCilindro2>

            <S.VALOR_PressaoAtual_Argonio_Cilindro_2><h2>{PatualARG2}</h2></S.VALOR_PressaoAtual_Argonio_Cilindro_2>

              <S.UNIDADE_PressaoAtual_ARGONIO_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_ARGONIO_Cilindro_2>

            <S.bellARG2><img src= {bellARG} alt= "Alarme 2 Argônio"></img></S.bellARG2>

            <S.bellARG2_text><h2>9.00</h2></S.bellARG2_text>
            </S.CENTRALARG>

            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src={manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_azul}className="featuredIconLogo1"/></span> 
              </a>
        </S.MANOMETER>

       

        </S.ContainerArg>


    )
}

export default CentralArg;