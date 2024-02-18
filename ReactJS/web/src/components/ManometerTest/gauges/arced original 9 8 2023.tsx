import React, {useState,useEffect, Component, useRef} from 'react';
import { useGauge } from "use-gauge";

import api from '../../../service/api.js';

//import bellHe from  '../../../assets/bell.png';
 // @ts-ignore
import bellHe from  '../../../assets/bell.png';

import { useNavigate } from 'react-router-dom';
 // @ts-ignore
import TariXLogo from  '../../../assets/TariX.svg';
import { timeStamp } from 'console';




interface ArcedProps {
  value: number;

}



const START_ANGLE = 45;
const END_ANGLE = 315;

const START_ANGLE_PSI = 45;
const END_ANGLE_PSI = 315;

export function Arced(props: ArcedProps, {PatualHe1, PatualHe1_PSI, AlarmeHe10, dateS3x, timeS3x, LimiteSuperiorAlarmeHe}) {
  const { value } = props;

  const navigate = useNavigate();
  
  const gaugeBAR = useGauge({
    domain: [0, 400],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 6,
    diameter: 400 //400
  });

  const gaugeBARtext = useGauge({
    domain: [0, 400],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 6,
    diameter: 545 //400
  });

  const gaugeBARline = useGauge({
    domain: [0, 414],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 460 //400
  });

  const gaugeBARtitle = useGauge({
    domain: [0, 414],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 200
  });

  const gaugePSI = useGauge({
    domain: [0, 5800],
    startAngle: START_ANGLE_PSI,
    endAngle: END_ANGLE_PSI,
    numTicks: 7, //7
    diameter: 345 //575
  });

  const gaugePSIline = useGauge({
    domain: [0, 5800],
    startAngle: START_ANGLE_PSI,
    endAngle: END_ANGLE_PSI,
    numTicks: 37, //19
    diameter: 380 // 475
  });
  
  const needle = gaugeBAR.getNeedleProps({
    value,
    baseRadius: 10,
    tipRadius: 2,
    offset: 45,
  });

  



 

  const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais 
  const [PRESSAO_ALARME_He1_gravado, setPA_gravado] = useState([]);   // PRESSÃO DE ALARME GRAVADA NO BANCO DE DADOS


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

   {  // @ts-ignore
    PRESSAO_ALARME_He1_gravado.map(t => ( AlarmeHe10 =t.AlarmeHe1

    ))

    console.log ('AlarmeHe10:',AlarmeHe10);

   }

   LimiteSuperiorAlarmeHe = Number((AlarmeHe10*1.1).toFixed(0));
  
   console.log ('LimiteSuperiorAlarmeHe >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:',LimiteSuperiorAlarmeHe);
   console.log (typeof LimiteSuperiorAlarmeHe);


  
   const needleAlarme = gaugeBAR.getNeedleProps({
    value:AlarmeHe10,
    baseRadius: 10,
    tipRadius: 2,
    offset: 55,
  });
 

  

  async function loadCilindrosNow() {

    
  
  
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

  }, [PatualHe1, dateS3x, timeS3x]);

  {
    // @ts-ignore
  valoresNow.map(t => ( PatualHe1=Number(t.He).toFixed(0)
   

   ))
 }

 {
  // @ts-ignore
  valoresNow.map((t) => (dateS3x = t.dateS3x));
}

{
  // @ts-ignore
  valoresNow.map((t) => (timeS3x = t.timeS3x));
}
PatualHe1 = Number(PatualHe1);
console.log ('PatualHe1 OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO:',PatualHe1);
console.log (typeof PatualHe1);

 PatualHe1_PSI = (PatualHe1*14.5038).toFixed(0);

 const [isGreaterThan, setGreaterThan] = useState (false); // useState para comparar o valor atual com o valor de alarme

  useEffect(() => {
    if (PatualHe1 > LimiteSuperiorAlarmeHe) {
      setGreaterThan(true);
    } else {
      setGreaterThan(false);
    }
    },[setGreaterThan, PatualHe1, LimiteSuperiorAlarmeHe]);

  

  


  

  return (
    <div className="p-4">
      <svg className="w-full overflow-visible p-2" {...gaugeBAR.getSVGProps()}>
        <g id="arcs">
        
          <path // Background
            {...gaugeBAR.getArcProps({
              offset: 15,//25
              startAngle: START_ANGLE,
              endAngle: END_ANGLE
            })}
            fill="none"
            className="stroke-gray-200"
            strokeLinecap="round"
            strokeWidth={30}
          />
       
          
            {isGreaterThan ? (
           <path // Anel Manometro
           
            {...gaugeBAR.getArcProps({
              offset: 115, // 95
              startAngle: 0,
              endAngle: 360
            })}

            
           
            fill="none"
            //className="stroke-gray-200"
            
            className ="stroke-blue-700"
            strokeLinecap="round"
            strokeWidth={30}
            
            
          />
            ) : (

        

            <path // Anel Manometro
           
            {...gaugeBAR.getArcProps({
              offset: 115, // 95
              startAngle: 0,
              endAngle: 360
            })}

            
           
            fill="none"
            //className="stroke-gray-200"
            
            className ="stroke-red-700"
            strokeLinecap="round"
            strokeWidth={30}
            
            
          />
            )}

          
          


          

            </g>
       
    </svg>
      
    </div>
  );
}

