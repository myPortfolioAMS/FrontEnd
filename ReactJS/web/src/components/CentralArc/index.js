
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaAC from '../../assets/CENTRAL_DUPLA_VAZIA_AC.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';


import AC05 from '../../assets/AC05.png';
import AC10 from '../../assets/AC10.png';
import AC15 from '../../assets/AC15.png';
import AC20 from '../../assets/AC20.png';
import AC25 from '../../assets/AC25.png';
import AC30 from '../../assets/AC30.png';
import AC35 from '../../assets/AC35.png';
import AC40 from '../../assets/AC40.png';
import AC45 from '../../assets/AC45.png';
import AC50 from '../../assets/AC50.png';
import AC55 from '../../assets/AC55.png';
import AC60 from '../../assets/AC60.png';
import AC65 from '../../assets/AC65.png';
import AC70 from '../../assets/AC70.png';
import AC75 from '../../assets/AC75.png';
import AC80 from '../../assets/AC80.png';
import AC85 from '../../assets/AC85.png';
import AC90 from '../../assets/AC90.png';
import AC95 from '../../assets/AC95.png';
import AC100 from '../../assets/AC100.png';

import bellAC from '../../assets/bell_AC.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';


function CentralArc (PatualAC1, PatualAC2) {

    
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
 
     }, [PatualAC1, PatualAC2]);

     {
      valoresNow.map(t => ( PatualAC1=Number(t.He).toFixed(0)

      ))
    }

    {
      valoresNow.map(t => ( PatualAC2=Number(t.He2).toFixed(0)

      ))

// Variavéis que aramazenam valores atuais das pressões dos gases
let acNow_1 = (PatualAC1);
let acNow_2 = PatualAC2;
// final da função que faz a requisição dos valores atuais
      }

      PatualAC1 = Math.round(Number(PatualAC1*2.4));
      PatualAC2= 190;

    return (
        <S.ContainerArc>
            
            <S.CENTRALARC>

                <img src={centralDuplaVaziaAC} alt="Central Dupla Ar Comprimido" />

                
                {PatualAC1 >= 190 &&<S.AC1001><img src= {AC100} alt="AC100_1" />  </S.AC1001> }
                {PatualAC1 >= 180 &&<S.AC1001><img src= {AC95} alt="AC95_1" />  </S.AC1001> }
                {PatualAC1 >= 170 &&<S.AC1001><img src= {AC90} alt="AC90_1" />  </S.AC1001> }
                {PatualAC1 >= 160 &&<S.AC1001><img src= {AC85} alt="AC85_1" />  </S.AC1001> }
                {PatualAC1 >= 150 &&<S.AC1001><img src= {AC80} alt="AC80_1" />  </S.AC1001> }
                {PatualAC1 >= 140 &&<S.AC1001><img src= {AC75} alt="AC75_1" />  </S.AC1001> }
                {PatualAC1 >= 130 &&<S.AC1001><img src= {AC70} alt="AC70_1" />  </S.AC1001> }
                {PatualAC1 >= 120 &&<S.AC1001><img src= {AC65} alt="AC65_1" />  </S.AC1001> }
                {PatualAC1 >= 110 &&<S.AC1001><img src= {AC60} alt="AC60_1" />  </S.AC1001> }
                {PatualAC1 >= 100 &&<S.AC1001><img src= {AC55} alt="AC55_1" />  </S.AC1001> }
                {PatualAC1 >= 90 &&<S.AC1001><img src= {AC50} alt="AC50_1" />  </S.AC1001> }
                {PatualAC1 >= 80 &&<S.AC1001><img src= {AC45} alt="AC45_1" />  </S.AC1001> }
                {PatualAC1 >= 70 &&<S.AC1001><img src= {AC40} alt="AC40_1" />  </S.AC1001> }
                {PatualAC1 >= 60 &&<S.AC1001><img src= {AC35} alt="AC35_1" />  </S.AC1001> }
                {PatualAC1 >= 50 &&<S.AC1001><img src= {AC30} alt="AC30_1" />  </S.AC1001> }
                {PatualAC1 >= 40 &&<S.AC1001><img src= {AC25} alt="AC25_1" />  </S.AC1001> }
                {PatualAC1 >= 30 &&<S.AC1001><img src= {AC20} alt="AC20_1" />  </S.AC1001> }
                {PatualAC1 >= 20 &&<S.AC1001><img src= {AC15} alt="AC15_1" />  </S.AC1001> }
                {PatualAC1 >= 10 &&<S.AC1001><img src= {AC10} alt="AC10_1" />  </S.AC1001> }
                {PatualAC1 >= 1 &&<S.AC1001><img src= {AC05} alt="AC05_1" />  </S.AC1001> }

                {PatualAC2 >= 190 &&<S.AC1002><img src= {AC100} alt="AC100_2" />  </S.AC1002> }
                {PatualAC2 >= 180 &&<S.AC1002><img src= {AC95} alt="AC95_2" />  </S.AC1002> }
                {PatualAC2 >= 170 &&<S.AC1002><img src= {AC90} alt="AC90_2" />  </S.AC1002> }
                {PatualAC2 >= 160 &&<S.AC1002><img src= {AC85} alt="AC85_2" />  </S.AC1002> }
                {PatualAC2 >= 150 &&<S.AC1002><img src= {AC80} alt="AC80_2" />  </S.AC1002> }
                {PatualAC2 >= 140 &&<S.AC1002><img src= {AC75} alt="AC75_2" />  </S.AC1002> }
                {PatualAC2 >= 130 &&<S.AC1002><img src= {AC70} alt="AC70_2" />  </S.AC1002> }
                {PatualAC2 >= 120 &&<S.AC1002><img src= {AC65} alt="AC65_2" />  </S.AC1002> }
                {PatualAC2 >= 110 &&<S.AC1002><img src= {AC60} alt="AC60_2" />  </S.AC1002> }
                {PatualAC2 >= 100 &&<S.AC1002><img src= {AC55} alt="AC55_2" />  </S.AC1002> }
                {PatualAC2 >= 90 &&<S.AC1002><img src= {AC50} alt="AC50_2" />  </S.AC1002> }
                {PatualAC2 >= 80 &&<S.AC1002><img src= {AC45} alt="AC45_2" />  </S.AC1002> }
                {PatualAC2 >= 70 &&<S.AC1002><img src= {AC40} alt="AC40_2" />  </S.AC1002> }
                {PatualAC2 >= 60 &&<S.AC1002><img src= {AC35} alt="AC35_2" />  </S.AC1002> }
                {PatualAC2 >= 50 &&<S.AC1002><img src= {AC30} alt="AC30_2" />  </S.AC1002> }
                {PatualAC2 >= 40 &&<S.AC1002><img src= {AC25} alt="AC25_2" />  </S.AC1002> }
                {PatualAC2 >= 30 &&<S.AC1002><img src= {AC20} alt="AC20_2" />  </S.AC1002> }
                {PatualAC2 >= 20 &&<S.AC1002><img src= {AC15} alt="AC15_2" />  </S.AC1002> }
                {PatualAC2 >= 10 &&<S.AC1002><img src= {AC10} alt="AC10_2" />  </S.AC1002> }
                {PatualAC2 >= 1 &&<S.AC1002><img src= {AC05} alt="AC05_2" />  </S.AC1002> }





                <h3>AR COMPRIMIDO</h3>

                          
            <S.PressaoAtualArComprimidoCilindro1><h2>EM USO</h2></S.PressaoAtualArComprimidoCilindro1>

            <S.VALOR_PressaoAtual_ArComprimido_Cilindro_1><h2>{PatualAC1}</h2></S.VALOR_PressaoAtual_ArComprimido_Cilindro_1>

            <S.UNIDADE_PressaoAtual_ArComprimido_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_ArComprimido_Cilindro_1>

            <S.bellAC1><img src= {bellAC} alt= "Alarme 1 Ar Comprimido"></img></S.bellAC1>

            <S.bellAC1_text><h2>8.25</h2></S.bellAC1_text>

            <S.PressaoAtualArComprimidoCilindro2><h2>RESERVA</h2></S.PressaoAtualArComprimidoCilindro2>

            <S.VALOR_PressaoAtual_ArComprimido_Cilindro_2><h2>{PatualAC2}</h2></S.VALOR_PressaoAtual_ArComprimido_Cilindro_2>

             <S.UNIDADE_PressaoAtual_ArComprimido_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_ArComprimido_Cilindro_2>

            <S.bellAC2><img src= {bellAC} alt= "Alarme 2 Ar Comprimido"></img></S.bellAC2>
            
            <S.bellAC2_text><h2>5.75</h2></S.bellAC2_text>
            
            </S.CENTRALARC>

            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src = {manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_vermelho} className="featuredIconLogo1"/></span> 
              </a>
        </S.MANOMETER>

       

        </S.ContainerArc>
       


    )
}

export default CentralArc;