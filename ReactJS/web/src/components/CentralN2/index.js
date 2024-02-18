
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaN2 from '../../assets/CENTRAL_DUPLA_VAZIA_N2.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

import N205 from '../../assets/N205.png';
import N210 from '../../assets/N210.png';
import N215 from '../../assets/N215.png';
import N220 from '../../assets/N220.png';
import N225 from '../../assets/N225.png';
import N230 from '../../assets/N230.png';
import N235 from '../../assets/N235.png';
import N240 from '../../assets/N240.png';
import N245 from '../../assets/N245.png';
import N250 from '../../assets/N250.png';
import N255 from '../../assets/N255.png';
import N260 from '../../assets/N260.png';
import N265 from '../../assets/N265.png';
import N270 from '../../assets/N270.png';
import N275 from '../../assets/N275.png';
import N280 from '../../assets/N280.png';
import N285 from '../../assets/N285.png';
import N290 from '../../assets/N290.png';
import N295 from '../../assets/N295.png';
import N2100 from '../../assets/N2100.png';

import bellN2 from '../../assets/bell_N2.png';
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';



function CentralN2 (PatualN21, PatualN22) {

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
   
       }, []);
  
       {
        valoresNow.map(t => ( PatualN21=Number(t.He).toFixed(0)
  
        ))
      }
  
      {
        valoresNow.map(t => ( PatualN22=Number(t.He2).toFixed(0)
  
        ))
  
  // Variavéis que aramazenam valores atuais das pressões dos gases
  
  let nitrogenioNow1 = PatualN21; 
let nitrogenioNow2 = PatualN22;
  // final da função que faz a requisição dos valores atuais
        }
        PatualN21 = Math.round(Number(PatualN21*1.42));
        PatualN22 = 195;

    return (
        <S.ContainerN2>
            
            <S.CENTRALN2>

                <img src={centralDuplaVaziaN2} alt="Central Dupla Nitrogênio" />

                {PatualN21 >= 190 &&  <S.N21001><img src= {N2100} alt="N2100_1" />  </S.N21001> }
                {PatualN21 >= 180 &&  <S.N21001><img src= {N295} alt="N295_1" />  </S.N21001> }
                {PatualN21 >= 170 &&  <S.N21001><img src= {N290} alt="N290_1" />  </S.N21001> }
                {PatualN21 >= 160 &&  <S.N21001><img src= {N285} alt="N285_1" />  </S.N21001> }
                {PatualN21 >= 150 &&  <S.N21001><img src= {N280} alt="N280_1" />  </S.N21001> }
                {PatualN21 >= 140 &&  <S.N21001><img src= {N275} alt="N275_1" />  </S.N21001> }
                {PatualN21 >= 130 &&  <S.N21001><img src= {N270} alt="N270_1" />  </S.N21001> }
                {PatualN21 >= 120 &&  <S.N21001><img src= {N265} alt="N265_1" />  </S.N21001> }
                {PatualN21 >= 110 &&  <S.N21001><img src= {N260} alt="N260_1" />  </S.N21001> }
                {PatualN21 >= 100 &&  <S.N21001><img src= {N255} alt="N255_1" />  </S.N21001> }
                {PatualN21 >= 90 &&  <S.N21001><img src= {N250} alt="N250_1" />  </S.N21001> }
                {PatualN21 >= 80 &&  <S.N21001><img src= {N245} alt="N245_1" />  </S.N21001> }
                {PatualN21 >= 70 &&  <S.N21001><img src= {N240} alt="N240_1" />  </S.N21001> }
                {PatualN21 >= 60 &&  <S.N21001><img src= {N235} alt="N235_1" />  </S.N21001> }
                {PatualN21 >= 50 &&  <S.N21001><img src= {N230} alt="N230_1" />  </S.N21001> }
                {PatualN21 >= 40 &&  <S.N21001><img src= {N225} alt="N225_1" />  </S.N21001> }
                {PatualN21 >= 30 &&  <S.N21001><img src= {N220} alt="N220_1" />  </S.N21001> }
                {PatualN21 >= 20 &&  <S.N21001><img src= {N215} alt="N215_1" />  </S.N21001> }
                {PatualN21 >= 10 &&  <S.N21001><img src= {N210} alt="N210_1" />  </S.N21001> }
                {PatualN21 >= 1 &&  <S.N21001><img src= {N205} alt="N205_1" />  </S.N21001> }

                {PatualN22 >= 190 &&  <S.N21002><img src= {N2100} alt="N2100_2" />  </S.N21002> }
                {PatualN22 >= 180 &&  <S.N21002><img src= {N295} alt="N295_2" />  </S.N21002> }
                {PatualN22 >= 170 &&  <S.N21002><img src= {N290} alt="N290_2" />  </S.N21002> }
                {PatualN22 >= 160 &&  <S.N21002><img src= {N285} alt="N285_2" />  </S.N21002> }
                {PatualN22 >= 150 &&  <S.N21002><img src= {N280} alt="N280_2" />  </S.N21002> }
                {PatualN22 >= 140 &&  <S.N21002><img src= {N275} alt="N275_2" />  </S.N21002> }
                {PatualN22 >= 130 &&  <S.N21002><img src= {N270} alt="N270_2" />  </S.N21002> }
                {PatualN22 >= 120 &&  <S.N21002><img src= {N265} alt="N265_2" />  </S.N21002> }
                {PatualN22 >= 110 &&  <S.N21002><img src= {N260} alt="N260_2" />  </S.N21002> }
                {PatualN22 >= 100 &&  <S.N21002><img src= {N255} alt="N255_2" />  </S.N21002> }
                {PatualN22 >= 90 &&  <S.N21002><img src= {N250} alt="N250_2" />  </S.N21002> }
                {PatualN22 >= 80 &&  <S.N21002><img src= {N245} alt="N245_2" />  </S.N21002> }
                {PatualN22 >= 70 &&  <S.N21002><img src= {N240} alt="N240_2" />  </S.N21002> }
                {PatualN22 >= 60 &&  <S.N21002><img src= {N235} alt="N235_2" />  </S.N21002> }
                {PatualN22 >= 50 &&  <S.N21002><img src= {N230} alt="N230_2" />  </S.N21002> }
                {PatualN22 >= 40 &&  <S.N21002><img src= {N225} alt="N225_2" />  </S.N21002> }
                {PatualN22 >= 30 &&  <S.N21002><img src= {N220} alt="N220_2" />  </S.N21002> }
                {PatualN22 >= 20 &&  <S.N21002><img src= {N215} alt="N215_2" />  </S.N21002> }
                {PatualN22 >= 10 &&  <S.N21002><img src= {N210} alt="N210_2" />  </S.N21002> }
                {PatualN22 >= 1 &&  <S.N21002><img src= {N205} alt="N205_2" />  </S.N21002> }



                <h3>NITROGÊNIO</h3>

                <S.PressaoAtualNitrogenioCilindro1><h2>EM USO</h2></S.PressaoAtualNitrogenioCilindro1>

<S.VALOR_PressaoAtual_Nitrogenio_Cilindro_1><h2>{PatualN21}</h2></S.VALOR_PressaoAtual_Nitrogenio_Cilindro_1>

<S.UNIDADE_PressaoAtual_Nitrogenio_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_Nitrogenio_Cilindro_1>

<S.bellN21><img src= {bellN2} alt= "Alarme 1 Nitrogênio"></img></S.bellN21>

<S.bellN21_text><h2>9.50</h2></S.bellN21_text>

<S.PressaoAtualNitrogenioCilindro2><h2>RESERVA</h2></S.PressaoAtualNitrogenioCilindro2>

<S.VALOR_PressaoAtual_Nitrogenio_Cilindro_2><h2>{PatualN22}</h2></S.VALOR_PressaoAtual_Nitrogenio_Cilindro_2>

<S.UNIDADE_PressaoAtual_Nitrogenio_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_Nitrogenio_Cilindro_2>

<S.bellN22><img src= {bellN2} alt= "Alarme 2 Nitrogênio"></img></S.bellN22>

<S.bellN22_text><h2>9.50</h2></S.bellN22_text>
            </S.CENTRALN2>
           <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <img src={manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <img src={manometer_azul}  className="featuredIconLogo1"/></span> 
              </a>
            </S.MANOMETER>
       

        </S.ContainerN2>


    )
}

export default CentralN2;