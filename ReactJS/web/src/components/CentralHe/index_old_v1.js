
import React, {useState,useEffect, Component} from 'react';
import * as S from './styles';
import api from '../../service/api';

import centralDuplaVaziaHE from '../../assets/CENTRAL_DUPLA_VAZIA_HE.png';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';


import HE05 from '../../assets/HE05.png';
import HE10 from '../../assets/HE10.png';
import HE15 from '../../assets/HE15.png';
import HE20 from '../../assets/HE20.png';
import HE25 from '../../assets/HE25.png';
import HE30 from '../../assets/HE30.png';
import HE35 from '../../assets/HE35.png';
import HE40 from '../../assets/HE40.png';
import HE45 from '../../assets/HE45.png';
import HE50 from '../../assets/HE50.png';
import HE55 from '../../assets/HE55.png';
import HE60 from '../../assets/HE60.png';
import HE65 from '../../assets/HE65.png';
import HE70 from '../../assets/HE70.png';
import HE75 from '../../assets/HE75.png';
import HE80 from '../../assets/HE80.png';
import HE85 from '../../assets/HE85.png';
import HE90 from '../../assets/HE90.png';
import HE95 from '../../assets/HE95.png';
import HE100 from '../../assets/HE100.png';

import bellHe from '../../assets/bell.png';


function CentralHe (PatualHe1, PatualHe2, helioNow_1, helioNow_2, GAS11, id, AlarmeHe10) {

    const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais 
    const [PRESSAO_ALARME_He1_gravado, setPA_gravado] = useState([]);   // PRESSÃO DE ALARME GRAVADA NO BANCO DE DADOS
    
  async function loadCilindrosNow() {

  //  await api.get('https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine')


    await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?devideID=Aliine')
           
   
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
 
     }, [PatualHe1, PatualHe2, id]);

     {
     valoresNow.map(t => ( PatualHe1=Number(t.He).toFixed(0)
      

      ))
    }

    {
      valoresNow.map(t => ( PatualHe2=Number(t.He2).toFixed(0)
      

      ))

      {
        valoresNow.map(t => ( id=(t.id)
  
        ))
      }

// Variavéis que aramazenam valores atuais das pressões dos gases
let helioNow_1 = (PatualHe1);
let nitrogenioNow = GAS11; 
let ID = id;

PatualHe2 = 200;

console.log ('ID:',ID);
// final da função que faz a requisição dos valores atuais
      }


// função para retornar o valor do alarme do He, cilindro 1,  gravado no banco de dados

async function loadAlarmesNow() {

  //await api.get('https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine')

  await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine')
         
 
           .then(response => {
            
             setPA_gravado (response.data);

             console.log('Alarmes Agora:',PRESSAO_ALARME_He1_gravado);
           
           })
           .catch(error => {
             console.log(error);
           });
}

  useEffect(() => {

     loadAlarmesNow();

   }, [AlarmeHe10]);

   {
    PRESSAO_ALARME_He1_gravado.map(t => ( AlarmeHe10 =t.AlarmeHe1

    ))

    console.log ('AlarmeHe10:',AlarmeHe10);

   }

    return (
        <S.ContainerHe>
            
            <S.CENTRALHE>
            {/*<a href={`/abrigodegases/Cilindro1Helio/${id}`} > */}
            
                <img src={centralDuplaVaziaHE} alt="Central Dupla Hélio" />
         
       
          {PatualHe1 >= 190 &&  <S.HE1001><img src= {HE100} alt="HE100_1" />  </S.HE1001> }
          {PatualHe1 >= 180 &&  <S.HE1001><img src= {HE95} alt="HE95_1" />  </S.HE1001> }
          {PatualHe1 >= 170 &&  <S.HE1001><img src= {HE90} alt="HE90_1" />  </S.HE1001> }
          {PatualHe1 >= 160 &&  <S.HE1001><img src= {HE85} alt="HE85_1" />  </S.HE1001> }
          {PatualHe1 >= 150 &&  <S.HE1001><img src= {HE80} alt="HE80_1" />  </S.HE1001> }
          {PatualHe1 >= 140 &&  <S.HE1001><img src= {HE75} alt="HE75_1" />  </S.HE1001> }
          {PatualHe1 >= 130 &&  <S.HE1001><img src= {HE70} alt="HE70_1" />  </S.HE1001> }
          {PatualHe1 >= 120 &&  <S.HE1001><img src= {HE65} alt="HE65_1" />  </S.HE1001> }
          {PatualHe1 >= 110 &&  <S.HE1001><img src= {HE60} alt="HE60_1" />  </S.HE1001> }
          {PatualHe1 >= 100 &&  <S.HE1001><img src= {HE55} alt="HE55_1" />  </S.HE1001> }
          {PatualHe1 >= 90 &&  <S.HE1001><img src= {HE50} alt="HE50_1" />  </S.HE1001> }
          {PatualHe1 >= 80 &&  <S.HE1001><img src= {HE45} alt="HE45_1" />  </S.HE1001> }
          {PatualHe1 >= 70 &&  <S.HE1001><img src= {HE40} alt="HE40_1" />  </S.HE1001> }
          {PatualHe1 >= 60 &&  <S.HE1001><img src= {HE35} alt="HE35_1" />  </S.HE1001> }
          {PatualHe1 >= 50 &&  <S.HE1001><img src= {HE30} alt="HE30_1" />  </S.HE1001> }
          {PatualHe1 >= 40 &&  <S.HE1001><img src= {HE25} alt="HE25_1" />  </S.HE1001> }
          {PatualHe1 >= 30 &&  <S.HE1001><img src= {HE20} alt="HE20_1" />  </S.HE1001> }
          {PatualHe1 >= 20 &&  <S.HE1001><img src= {HE15} alt="HE15_1" />  </S.HE1001> }
          {PatualHe1 >= 10 &&  <S.HE1001><img src= {HE10} alt="HE10_1" />  </S.HE1001> }
          {PatualHe1 >= 1  &&  <S.HE1001><img src= {HE05} alt="HE05_1" />  </S.HE1001> }

          
          {PatualHe2 >= 190 &&  <S.HE1002><img src= {HE100} alt="HE100_1" />  </S.HE1002> }
          {PatualHe2 >= 180 &&  <S.HE1002><img src= {HE95} alt="HE95_1" />  </S.HE1002> }
          {PatualHe2 >= 170 &&  <S.HE1002><img src= {HE90} alt="HE90_1" />  </S.HE1002> }
          {PatualHe2 >= 160 &&  <S.HE1002><img src= {HE85} alt="HE85_1" />  </S.HE1002> }
          {PatualHe2 >= 150 &&  <S.HE1002><img src= {HE80} alt="HE80_1" />  </S.HE1002> }
          {PatualHe2 >= 140 &&  <S.HE1002><img src= {HE75} alt="HE75_1" />  </S.HE1002> }
          {PatualHe2 >= 130 &&  <S.HE1002><img src= {HE70} alt="HE70_1" />  </S.HE1002> }
          {PatualHe2 >= 120 &&  <S.HE1002><img src= {HE65} alt="HE65_1" />  </S.HE1002> }
          {PatualHe2 >= 110 &&  <S.HE1002><img src= {HE60} alt="HE60_1" />  </S.HE1002> }
          {PatualHe2 >= 100 &&  <S.HE1002><img src= {HE55} alt="HE55_1" />  </S.HE1002> }
          {PatualHe2 >= 90 &&  <S.HE1002><img src= {HE50} alt="HE50_1" />  </S.HE1002> }
          {PatualHe2 >= 80 &&  <S.HE1002><img src= {HE45} alt="HE45_1" />  </S.HE1002> }
          {PatualHe2 >= 70 &&  <S.HE1002><img src= {HE40} alt="HE40_1" />  </S.HE1002> }
          {PatualHe2 >= 60 &&  <S.HE1002><img src= {HE35} alt="HE35_1" />  </S.HE1002> }
          {PatualHe2 >= 50 &&  <S.HE1002><img src= {HE30} alt="HE30_1" />  </S.HE1002> }
          {PatualHe2 >= 40 &&  <S.HE1002><img src= {HE25} alt="HE25_1" />  </S.HE1002> }
          {PatualHe2 >= 30 &&  <S.HE1002><img src= {HE20} alt="HE20_1" />  </S.HE1002> }
          {PatualHe2 >= 20 &&  <S.HE1002><img src= {HE15} alt="HE15_1" />  </S.HE1002> }
          {PatualHe2 >= 10 &&  <S.HE1002><img src= {HE10} alt="HE10_1" />  </S.HE1002> }
          {PatualHe2 >= 1  &&  <S.HE1002><img src= {HE05} alt="HE05_1" />  </S.HE1002> }
         
         
         
                <h3>HÉLIO</h3>
            
           
            
            <S.PressaoAtualHelioCilindro1><h2>EM USO</h2></S.PressaoAtualHelioCilindro1>
           
            <S.VALOR_PressaoAtual_Helio_Cilindro_1> <h2>{PatualHe1}</h2></S.VALOR_PressaoAtual_Helio_Cilindro_1>

            <S.UNIDADE_PressaoAtual_Helio_Cilindro_1><h2>bar</h2></S.UNIDADE_PressaoAtual_Helio_Cilindro_1>

          

            <S.bellHe1><img src= {bellHe} alt= "Alarme 1 Hélio"></img></S.bellHe1>

            <S.bellHe1_text><h2>{AlarmeHe10}</h2>  </S.bellHe1_text>

            <S.PressaoAtualHelioCilindro2><h2>RESERVA</h2></S.PressaoAtualHelioCilindro2>

            <S.VALOR_PressaoAtual_Helio_Cilindro_2><h2>{PatualHe2}</h2></S.VALOR_PressaoAtual_Helio_Cilindro_2>

           <S.UNIDADE_PressaoAtual_Helio_Cilindro_2><h2>bar</h2></S.UNIDADE_PressaoAtual_Helio_Cilindro_2>

            <S.bellHe2><img src= {bellHe} alt= "Alarme 2 Hélio"></img></S.bellHe2>

            <S.bellHe2_text><h2>{AlarmeHe10}</h2>  </S.bellHe2_text>
            </S.CENTRALHE>

            <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2> <SpeedOutlinedIcon className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2> <SpeedOutlinedIcon className="featuredIconLogo1"/></span> 
              </a>
            </S.MANOMETER>
        </S.ContainerHe>


    )
}

export default CentralHe;