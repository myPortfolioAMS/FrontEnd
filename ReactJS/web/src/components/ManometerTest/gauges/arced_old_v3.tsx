import React, {useState,useEffect, Component} from 'react';
import { useGauge } from "use-gauge";

import api from '../../../service/api.js';

//import bellHe from  '../../../assets/bell.png';
import bellHe from  '../../../assets/bell.png';
import TariXLogo from  '../../../assets/TariX.svg';




interface ArcedProps {
  value: number;

}



const START_ANGLE = 45;
const END_ANGLE = 315;

const START_ANGLE_PSI = 45;
const END_ANGLE_PSI = 315;

export function Arced(props: ArcedProps, {PatualHe1, PatualHe1_PSI, AlarmeHe10}) {
  const { value } = props;

  
  
  const gaugeBAR = useGauge({
    domain: [0, 400],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 6,
    diameter: 400
  });

  const gaugeBARline = useGauge({
    domain: [0, 414],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 400
  });

  const gaugeBARtitle = useGauge({
    domain: [0, 414],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 200
  });

  const gaugePSI = useGauge({
    domain: [0, 6000],
    startAngle: START_ANGLE_PSI,
    endAngle: END_ANGLE_PSI,
    numTicks: 7, //7
    diameter: 575
  });

  const gaugePSIline = useGauge({
    domain: [0, 6000],
    startAngle: START_ANGLE_PSI,
    endAngle: END_ANGLE_PSI,
    numTicks: 37, //19
    diameter: 475
  });

  const needle = gaugeBAR.getNeedleProps({
    value,
    baseRadius: 10,
    tipRadius: 2,
    offset: 45,
  });

  



 

  const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais 
  const [PRESSAO_ALARME_He1_gravado, setPA_gravado] = useState([]);   // PRESSÃO DE ALARME GRAVADA NO BANCO DE DADOS
  
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

  }, [PatualHe1]);

  {
    // @ts-ignore
  valoresNow.map(t => ( PatualHe1=Number(t.He).toFixed(0)
   

   ))
 }

 PatualHe1_PSI = (PatualHe1*14.5038).toFixed(0);

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

   const needleAlarme = gaugeBAR.getNeedleProps({
    value: AlarmeHe10,
    baseRadius: 10,
    tipRadius: 2,
    offset: 55,
  });

  return (
    <div className="p-4">
      <svg className="w-full overflow-visible p-2" {...gaugeBAR.getSVGProps()}>
        <g id="arcs">
        
          <path // Background
            {...gaugeBAR.getArcProps({
              offset: 25,
              startAngle: START_ANGLE,
              endAngle: END_ANGLE
            })}
            fill="none"
            className="stroke-gray-200"
            strokeLinecap="round"
            strokeWidth={30}
          />
           <path // Anel Manometro
            {...gaugeBAR.getArcProps({
              offset: 95,
              startAngle: 0,
              endAngle: 360
            })}
            fill="none"
            //className="stroke-gray-200"
            className ="stroke-gray-700"
            strokeLinecap="round"
            strokeWidth={10}
          />
          <path
            {...gaugeBAR.getArcProps({
              offset: 25,
              startAngle: START_ANGLE,
              endAngle: gaugeBAR.valueToAngle(value)
            })}
            fill="none"
            className="stroke-green-400"
            strokeLinecap="round"
            strokeWidth={30}
          />
        </g>
        <g id="ticks">



        {gaugeBARline.ticks.map((angle) => {
            const asValueBl = gaugeBARline.angleToValue(angle);
            //const showText = asValue === 0 || asValue === 100 || asValue === 200 || asValue === 300 || asValue === 400;
            const showTextPl = asValueBl === 0 || asValueBl === 40 || asValueBl === 80 || asValueBl === 120 || asValueBl === 160 || asValueBl === 200 || asValueBl === 240 || asValueBl === 280 || asValueBl === 320 || asValueBl === 360 || asValueBl === 400;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className="stroke-gray-300"
                  strokeWidth={2}
                  {...gaugeBARline.getTickProps({ angle, length: showTextPl ? 12 : 6 })}
                 
                />
                
              </React.Fragment>
            );
          })}
          {gaugeBAR.ticks.map((angle) => {
            const asValue = gaugeBAR.angleToValue(angle);
            //const showText = asValue === 0 || asValue === 100 || asValue === 200 || asValue === 300 || asValue === 400;
            const showText = asValue === 0 || asValue === 40 || asValue === 80 || asValue === 120 || asValue === 160 || asValue === 200 || asValue === 240 || asValue === 280 || asValue === 320 || asValue === 360 || asValue === 400;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className="stroke-gray-300"
                  strokeWidth={2}
                  {...gaugeBAR.getTickProps({ angle, length: showText ? 12 : 6 })}
                 
                />
                {showText && (
                  
                  <text
                    className="text-sm fill-black-400 font-medium text-xl"
                    {...gaugeBAR.getLabelProps({ angle, offset: 20 })}
                  >
                    {asValue}
                    
                  </text>
                  
                )}
              </React.Fragment>
            );
          })}

          {gaugePSIline.ticks.map((angle) => {
            const asValuePl = gaugePSIline.angleToValue(angle);
            //const showText = asValue === 0 || asValue === 100 || asValue === 200 || asValue === 300 || asValue === 400;
            const showTextPl = asValuePl === 0 || asValuePl === 1000 || asValuePl === 2000 || asValuePl === 3000 || asValuePl === 4000 || asValuePl === 5000 || asValuePl === 6000;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className="stroke-red-300"
                  strokeWidth={2}
                  {...gaugePSIline.getTickProps({ angle, length: showTextPl ? 12 : 6 })}
                 
                />
                
              </React.Fragment>
            );
          })}


         {gaugePSI.ticks.map((angle) => {
            const asValueP = gaugePSI.angleToValue(angle);
            //const showText = asValue === 0 || asValue === 100 || asValue === 200 || asValue === 300 || asValue === 400;
            const showTextP =  asValueP === 1000 || asValueP === 2000 || asValueP === 3000 || asValueP === 4000 || asValueP === 5000 || asValueP === 6000;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className="stroke-red-300"
                  strokeWidth={2}
                  {...gaugePSI.getTickProps({ angle, length: showTextP ? 2 : 1 })}
                 
                />
                {showTextP && (
                  <text
                    className="text-sm fill-red-400 font-medium text-xl"
                    {...gaugePSI.getLabelProps({ angle, offset: 20 })}
                  >
                    {asValueP}
                  </text>
                )}
              </React.Fragment>
            );
          })}
        </g>
        <g id="needle">
          <circle className="fill-gray-300" {...needle.base} r={20} />
          <circle className="fill-gray-700" {...needle.base} />
          <circle className="fill-gray-700" {...needle.tip} />
          <polyline className="fill-gray-700" points={needle.points} />
          <circle className="fill-white" {...needle.base} r={4} />
        </g>

        <g id="needleAlarme">
          <circle className="fill-gray-300" {...needleAlarme.base} r={20} />
          <circle className="fill-gray-700" {...needleAlarme.base} />
          <circle className="fill-gray-700" {...needleAlarme.tip} />
          <polyline className="fill-purple-700" points={needleAlarme.points} />
          <circle className="fill-white" {...needleAlarme.base} r={4} />
        
        </g>

        
        <text x="20" y="60" >
        <tspan x="-60" y="-80" fontSize={36}>Helium</tspan>
        </text>

        <text x="20" y="60" >
        <tspan x="-60" y="120" fontSize={36}>{PatualHe1} bar</tspan> 
        </text>

        

        <text x="20" y="60" >
        <tspan x="-75" y="160" fontSize={36} fill="#FF0000">{PatualHe1_PSI} PSI</tspan> 
        </text>

        <text x="20" y="60" >
        <tspan x="-38" y="200" fontSize={36} fill= " #7d3c98 ">{AlarmeHe10} bar</tspan> 
        </text>

        

        <rect x="-70" y="290" width="140" height="120" fill =" #ebedef" stroke = " #34495e" stroke-width = "8" />

        
        <image href={bellHe} x="-80" y="170" width="40" height="40" />

        <image href={TariXLogo} x="-60" y="190" width="120" height="100" />

       

      

       
    </svg>
      
    </div>
  );
}

