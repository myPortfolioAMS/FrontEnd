import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaH2 from '../../assets/CENTRAL_DUPLA_VAZIA_H2.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

import H2_05 from '../../assets/H2_05.png';
import H2_10 from '../../assets/H2_10.png';
import H2_15 from '../../assets/H2_15.png';
import H2_20 from '../../assets/H2_20.png';
import H2_25 from '../../assets/H2_25.png';
import H2_30 from '../../assets/H2_30.png';
import H2_35 from '../../assets/H2_35.png';
import H2_40 from '../../assets/H2_40.png';
import H2_45 from '../../assets/H2_45.png';
import H2_50 from '../../assets/H2_50.png';
import H2_55 from '../../assets/H2_55.png';
import H2_60 from '../../assets/H2_60.png';
import H2_65 from '../../assets/H2_65.png';
import H2_70 from '../../assets/H2_70.png';
import H2_75 from '../../assets/H2_75.png';
import H2_80 from '../../assets/H2_80.png';
import H2_85 from '../../assets/H2_85.png';
import H2_90 from '../../assets/H2_90.png';
import H2_95 from '../../assets/H2_95.png';
import H2_100 from '../../assets/H2_100.png';

import bellH2 from '../../assets/bell_H2.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';



function CentralH2 (PatualH21, PatualH22) {

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
 
     }, [PatualH21, PatualH22]);

     {
      valoresNow.map(t => ( PatualH21=Number(t.He).toFixed(0)

      ))
    }

    {
      valoresNow.map(t => ( PatualH22=Number(t.He2).toFixed(0)

      ))

// Variavéis que aramazenam valores atuais das pressões dos gases
let h2Now_1 = (PatualH21);
let h2Now_2 = PatualH22;
// final da função que faz a requisição dos valores atuais
      }
      PatualH21 = Math.round(2.1*(Number(PatualH21)));
      PatualH22 = 200;;

    return (
        <S.ContainerH2>
            
            <S.CENTRALH2>

                <img src={centralDuplaVaziaH2} alt="Central Dupla Hidrogênio" />

                {PatualH21 >= 190 &&<S.H21001><img src= {H2_100} alt="H2100_1" />  </S.H21001> }
                {PatualH21 >= 180 &&<S.H21001><img src= {H2_95} alt="H295_1" />  </S.H21001> }
                {PatualH21 >= 170 &&<S.H21001><img src= {H2_90} alt="H290_1" />  </S.H21001> }
                {PatualH21 >= 160 &&<S.H21001><img src= {H2_85} alt="H285_1" />  </S.H21001> }
                {PatualH21 >= 150 &&<S.H21001><img src= {H2_80} alt="H280_1" />  </S.H21001> }
                {PatualH21 >= 140 &&<S.H21001><img src= {H2_75} alt="H275_1" />  </S.H21001> }
                {PatualH21 >= 130 &&<S.H21001><img src= {H2_70} alt="H270_1" />  </S.H21001> }
                {PatualH21 >= 120 &&<S.H21001><img src= {H2_65} alt="H265_1" />  </S.H21001> }
                {PatualH21 >= 110 &&<S.H21001><img src= {H2_60} alt="H260_1" />  </S.H21001> }
                {PatualH21 >= 100 &&<S.H21001><img src= {H2_55} alt="H255_1" />  </S.H21001> }
                {PatualH21 >= 90 &&<S.H21001><img src= {H2_50} alt="H250_1" />  </S.H21001> }
                {PatualH21 >= 80 &&<S.H21001><img src= {H2_45} alt="H245_1" />  </S.H21001> }
                {PatualH21 >= 70 &&<S.H21001><img src= {H2_40} alt="H240_1" />  </S.H21001> }
                {PatualH21 >= 60 &&<S.H21001><img src= {H2_35} alt="H235_1" />  </S.H21001> }
                {PatualH21 >= 50 &&<S.H21001><img src= {H2_30} alt="H230_1" />  </S.H21001> }
                {PatualH21 >= 40 &&<S.H21001><img src= {H2_25} alt="H225_1" />  </S.H21001> }
                {PatualH21 >= 30 &&<S.H21001><img src= {H2_20} alt="H220_1" />  </S.H21001> }
                {PatualH21 >= 20 &&<S.H21001><img src= {H2_15} alt="H215_1" />  </S.H21001> }
                {PatualH21 >= 10 &&<S.H21001><img src= {H2_10} alt="H210_1" />  </S.H21001> }
                {PatualH21 >= 1 &&<S.H21001><img src= {H2_05} alt="H205_1" />  </S.H21001> }

              


                {PatualH22 >= 190 &&<S.H21002><img src= {H2_100} alt="H2100_2" />  </S.H21002> }
                {PatualH22 >= 180 &&<S.H21002><img src= {H2_95} alt="H295_2" />  </S.H21002> }
                {PatualH22 >= 170 &&<S.H21002><img src= {H2_90} alt="H290_2" />  </S.H21002> }
                {PatualH22 >= 160 &&<S.H21002><img src= {H2_85} alt="H285_2" />  </S.H21002> }
                {PatualH22 >= 150 &&<S.H21002><img src= {H2_80} alt="H280_2" />  </S.H21002> }
                {PatualH22 >= 140 &&<S.H21002><img src= {H2_75} alt="H275_2" />  </S.H21002> }
                {PatualH22 >= 130 &&<S.H21002><img src= {H2_70} alt="H270_2" />  </S.H21002> }
                {PatualH22 >= 120 &&<S.H21002><img src= {H2_65} alt="H265_2" />  </S.H21002> }
                {PatualH22 >= 110 &&<S.H21002><img src= {H2_60} alt="H260_2" />  </S.H21002> }
                {PatualH22 >= 100 &&<S.H21002><img src= {H2_55} alt="H255_2" />  </S.H21002> }
                {PatualH22 >= 90 &&<S.H21002><img src= {H2_50} alt="H250_2" />  </S.H21002> }
                {PatualH22 >= 80 &&<S.H21002><img src= {H2_45} alt="H245_2" />  </S.H21002> }
                {PatualH22 >= 70 &&<S.H21002><img src= {H2_40} alt="H240_2" />  </S.H21002> }
                {PatualH22 >= 60 &&<S.H21002><img src= {H2_35} alt="H235_2" />  </S.H21002> }
                {PatualH22 >= 50 &&<S.H21002><img src= {H2_30} alt="H230_2" />  </S.H21002> }
                {PatualH22 >= 40 &&<S.H21002><img src= {H2_25} alt="H225_2" />  </S.H21002> }
                {PatualH22 >= 30 &&<S.H21002><img src= {H2_20} alt="H220_2" />  </S.H21002> }
                {PatualH22 >= 20 &&<S.H21002><img src= {H2_15} alt="H215_2" />  </S.H21002> }
                {PatualH22 >= 10 &&<S.H21002><img src= {H2_10} alt="H210_2" />  </S.H21002> }
                {PatualH22 >= 1 &&<S.H21002><img src= {H2_05} alt="H205_2" />  </S.H21002> }
                
               


                <h3>HIDROGÊNIO</h3>

                
            <S.PressaoAtualHidrogenioCilindro1><h2>EM USO</h2></S.PressaoAtualHidrogenioCilindro1>

           <S.VALOR_PressaoAtual_Hidrogenio_Cilindro_1><h2>{PatualH21}</h2></S.VALOR_PressaoAtual_Hidrogenio_Cilindro_1>

            <S.UNIDADE_PressaoAtual_Hidrogenio_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_Hidrogenio_Cilindro_1>

            <S.bellH21><img src= {bellH2} alt= "Alarme 1 Hidrogênio"></img></S.bellH21>

            <S.bellH21_text><h2>7.25</h2></S.bellH21_text>

            <S.PressaoAtualHidrogenioCilindro2><h2>RESERVA</h2></S.PressaoAtualHidrogenioCilindro2>

            <S.VALOR_PressaoAtual_Hidrogenio_Cilindro_2><h2>{PatualH22}</h2></S.VALOR_PressaoAtual_Hidrogenio_Cilindro_2>

            <S.UNIDADE_PressaoAtual_Hidrogenio_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_Hidrogenio_Cilindro_2>

            <S.bellH22><img src= {bellH2} alt= "Alarme 2 Hidrogênio"></img></S.bellH22>

            
            <S.bellH22_text><h2>8.75</h2></S.bellH22_text>

            </S.CENTRALH2>
            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src={manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_azul} className="featuredIconLogo1"/></span> 
              </a>
            </S.MANOMETER>
       

        </S.ContainerH2>


    )
}

export default CentralH2;