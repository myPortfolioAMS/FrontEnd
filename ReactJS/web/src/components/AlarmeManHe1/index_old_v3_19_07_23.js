import React, { useState, useEffect } from "react";
import { useRef } from 'react';

import { TextField } from "@mui/material";


import InputAdornment from "@mui/material/InputAdornment";

import Button from "@mui/material/Button";

import { ArrowUpward } from '@mui/icons-material';

import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';



import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

// icons para indicar estabilidade de pressão

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// icon para representar pressão do cilindro / linha

import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import NetworkCheckOutlinedIcon from '@mui/icons-material/NetworkCheckOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

// icon para indicar pressão de alarme

import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

// icon para representar troca de cilindro

import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';

// icon para representar consumo
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

// icon para representar custo diário

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

// icon para representar teste de estanqueidade

import manometer_verde from '../../assets/manometer-verde.png';






import * as S from "./styles";
import api from "../../service/api";
import { is } from "date-fns/locale";

import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";




let hoje = new Date();

function AlarmeManHe1(
  {
    PhojeHe1_1AM,
   
    PhojeHe1_6AM,
    leak,
    leak_test,
    loss,
    LimiteMaxLeak,

    PatualHe1,
    time_measurement_He1,
    PatualN21,

    PontemHe1,
    
    AlarmeHe1,
    
    EID,
    Eid,

    custo_cilindro_antigo,
    checkbox_antigo,
    volume_antigo,
    data_antigo,
    hora_antigo,
 
    time_lapse,
    P_60min_He1,
    previsao_de_troca,
    average_Consuption_m3,
    average_Consuption_bar,
    custoHora,
    bs,

    DataConectado_He1, 
    HoraConectado_He1,
    h2,
    h1,
    HH,
    hm,
    OldData,
    dd,
    mm,
    yyyy
  },
  { match }
) {
  const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais
  const [valoresOntem, CilindrosOntem] = useState([0]); // useState dos valores de ontem



  const [valoresHoje_1AM, CilindrosHoje_1AM] = useState([0]); // useState dos valores de hoje as 1 horas
  const [valoresHoje_6AM, CilindrosHoje_6AM] = useState([0]); // useState dos valores de hoje as 6 horas

  const [PRESSAO_ALARME_He1_gravado, setPA_gravado] = useState([]); // PRESSÃO DE ALARME GRAVADA NO BANCO DE DADOS

  const [PRESSAO_ALARME_He1, setPA] = useState([]);

  const [FORNECEDOR_ANTIGO, setFORNECEDOR_ANTIGO] = useState(["cold"]);
  const [FORNECEDOR_NOVO, setFORNECEDOR_NOVO] = useState([]);

 
  const [EMAIL_ANTIGO, setEMAIL_ANTIGO] = useState([]);
  const [EMAIL_NOVO, setEMAIL_NOVO] = useState([]);

  const [CEL_ANTIGO, setCEL_ANTIGO] = useState([]);
  const [CEL_NOVO, setCEL_NOVO] = useState([]);

  const [CUSTO_CILINDRO_ANTIGO, setCUSTO_CILINDRO_ANTIGO] = useState([]);
  const [CUSTO_CILINDRO_NOVO, setCUSTO_CILINDRO_NOVO] = useState([]);

  const [lote_antigo, setlote_antigo] = useState([]);
  const [lote_novo, setlote_novo] = useState([]);

  const [VOLUME_ANTIGO, setVOLUME_ANTIGO] = useState([]);
  const [VOLUME_NOVO, setVOLUME_NOVO] = useState([]);

  const [DATA_ANTIGA, setDATA_ANTIGA] = useState([]);
  const [DATA_NOVA, setDATA_NOVA] = useState([]);

  const [HORA_ANTIGA, setHORA_ANTIGA] = useState([]);
  const [HORA_NOVA, setHORA_NOVA] = useState([]);

  

  const [FORNECEDOR_ANTIGO_INST, setFORNECEDOR_ANTIGO_INST] = useState([]);
  const [FORNECEDOR_NOVO_INST, setFORNECEDOR_NOVO_INST] = useState([]);

  const [EMAIL_ANTIGO_INST, setEMAIL_ANTIGO_INST] = useState([]);
  const [EMAIL_NOVO_INST, setEMAIL_NOVO_INST] = useState([]);

  const [CEL_ANTIGO_INST, setCEL_ANTIGO_INST] = useState([]);
  const [CEL_NOVO_INST, setCEL_NOVO_INST] = useState([]);


  const [last60min, setlast60min] = useState([]);

  const [botaoSave, setBotaoSave] = useState("salvu");

  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);


  const windowSize = useRef([window.innerWidth, window.innerHeight]);


   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 1 horas da manhã
       async function loadCilindrosHoje_1AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine')
  
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_1AM(response.data);
  
          //console.log("valores Hoje 1 AM:", valoresHoje_1AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_1AM();
    }, []);
  
    {
      valoresHoje_1AM.map((t) => (PhojeHe1_1AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 1 horas da manhã
  
    // input para gráfico de consumo - Hélio as 1 horas da manhã de hoje
  
    let helio1AM_Hoje = PhojeHe1_1AM;
    //console.log("helio1AM_Hoje:", helio1AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 6 horas da manhã
       async function loadCilindrosHoje_6AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_6AM(response.data);
  
          //console.log("valores Hoje 6 AM:", valoresHoje_6AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_6AM();
    }, []);
  
    {
      valoresHoje_6AM.map((t) => (PhojeHe1_6AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 6 horas da manhã
  
    // input para gráfico de consumo - Hélio as 6 horas da manhã de hoje
  
    let helio6AM_Hoje = PhojeHe1_6AM;
    //console.log("helio6AM_Hoje:", helio6AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

  async function getlast60min() {
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine")
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine')

    await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine')
      .then((response) => {
        setlast60min(response.data);

       // console.log("valores de 60 minutos:", last60min);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getlast60min();
  }, [P_60min_He1]);

  {
    last60min.map((t) => (P_60min_He1 = t.He));

   // console.log("P_60min_He1:", P_60min_He1);
  }

  async function loadCilindrosNow() {

    await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine')
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine")

      .then((response) => {
        CilindrosNow(response.data);

        //console.log("valores Agora:", valoresNow);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosNow();
  }, [PatualHe1, time_measurement_He1, PatualN21, EID]);

  {
    valoresNow.map((t) => (PatualHe1 = t.He));
  }



  {
    valoresNow.map((t) => (EID = t.id));
  }

  {

    valoresNow.map((t) => (time_measurement_He1 = t.timestamp));
  }
  // Variavéis que aramazenam valores atuais das pressões dos gases
  let helioNow = PatualHe1;
  let helioNowTime = time_measurement_He1;


  let vEID = EID;

  console.log("vEID:", EID);
  // final da função que faz a requisição dos valores atuais

  

  // função para retornar o valor do alarme do He, cilindro 1,  gravado no banco de dados

  async function loadAlarmesNow() {
    //await api
      //.get(
        //"https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine"
     // )

      await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine')

      .then((response) => {
        setPA_gravado(response.data);

        //console.log("Alarmes Agora:", PRESSAO_ALARME_He1_gravado);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadAlarmesNow();
  }, [AlarmeHe1, DataConectado_He1, HoraConectado_He1]);

  {
    PRESSAO_ALARME_He1_gravado.map((t) => (AlarmeHe1 = t.AlarmeHe1));

    PRESSAO_ALARME_He1_gravado.map((t) => (DataConectado_He1 = t.DataConectado));

    PRESSAO_ALARME_He1_gravado.map((t) => (HoraConectado_He1= t.HoraConectado));

    //console.log("AlarmeHe1:", AlarmeHe1);
    let z = Number(AlarmeHe1);

    //console.log("Data Conectado:", DataConectado_He1);
    //console.log("Hora Conectado:", HoraConectado_He1);

    let stringHm = String(HoraConectado_He1);
   
    //console.log ("stringHm:", stringHm);
    //console.log ("typeof:",typeof stringHm);
    
   HH = stringHm.substring(0,2);
   hm = stringHm.substring(3,5);

   let stringData = String(DataConectado_He1);

  dd = stringData.substring(8,10);
    mm = stringData.substring(5,7);
     yyyy = stringData.substring(0,4);

   // console.log("DD:", dd);
    //console.log("MM:", mm);
    //console.log("YYYY:", yyyy);

OldData = +dd+'/'+mm+'/'+yyyy;

//console.log("OldData:", OldData);

    

   // console.log("HH:", HH);
   // console.log("hm:", hm);
    //console.log("HH:hm:", HH + ":" + hm);

    //console.log("z:", z);
    //console.log("type of z:", typeof z);

    //console.log("Eid:", Eid);
  }

  // final da função que busca o valor do alarme do He cilindro 1 gravado no banco de dados

  const registerUrl =
    "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/alarme2";

  const requestConfig = {
    headers: {
      "x-api-key": "okz9F4RqjGLRbIpYfnS190JZBOt51Av2SwK5Xjw5",
      //'Content-Type': 'application/json',
      //"Access-Control-Allow-Headers" : "Content-Type",
      //"Access-Control-Allow-Origin": "*",
      //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  };

  const requestBody = {
    id: (Date.now() / 1000).toFixed(0),
    deviceID: "Aliine",
    Ux: Date.now() / 1000,
    idGas: "He1",
    DataConectado: DATA_NOVA,
    HoraConectado: HORA_NOVA,
    Pressao_He1: PatualHe1,
    //"N2": nitrogenioNow,
    //"ARS": arsNow,
    //"ARG": argonioNow,
    //"AlarmeHe1": alarme_He1,
    AlarmeHe1: PRESSAO_ALARME_He1,
    Track_AlarmeHe1: "Track_AlarmeHe1",
  };

  // função para setar e gravar a pressão de alarme

  async function alarme2(requestBody, requestConfig) {
    // await api.post(registerUrl, requestBody, requestConfig)

    await api
      .post(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/alarme2?",
        requestConfig,
        requestBody
      )

      .then((response) => {
        //console.log("Registro gravado com sucesso!");
        alert("Novo valor de alarme do Hélio gravado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

///  console.log("AlarmeHe1:", AlarmeHe1);
  //console.log("type of AlarmeHe1:", typeof AlarmeHe1);
  let z = Number(AlarmeHe1);
  //console.log("z:", z);
  //console.log("type of z:", typeof z);

  //console.log("PRESSAO_ALARME_He1:", PRESSAO_ALARME_He1);
  //console.log(
   // "PRESSAO_ALARME_He1_gravado:",
    //Number(PRESSAO_ALARME_He1_gravado.map((t) => (AlarmeHe1 = t.AlarmeHe1)))
  //);

  console.log("type of PRESSAO_ALARME_He1:", typeof PRESSAO_ALARME_He1);
  let y = Number(PRESSAO_ALARME_He1);
  console.log("y:", y);

 
  let vol = VOLUME_NOVO;
  let ddata = DATA_NOVA;
  let hora = HORA_NOVA;
  let Ux_DT = ddata + "T" + hora + ":" + 0 + 0 + ".000Z";
  let Ux_DTc = new Date(Ux_DT).valueOf();
  let back_in_Time = new Date(Ux_DTc);
  let P_He1_max = PatualHe1;



  async function getfornecedor() {
    await api
      .get(
       // "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getfornecedor?deviceID=Aliine"
        "https://qpxac2sy5d.execute-api.sa-east-1.amazonaws.com/prod/getfornecedor?deviceID=Aliine"
      )

      .then((response) => {
        setFORNECEDOR_ANTIGO(response.data);

        console.log("FORNECEDOR_ANTIGO:", FORNECEDOR_ANTIGO);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getfornecedor();
  }, [

    custo_cilindro_antigo,
    checkbox_antigo,
    volume_antigo,
    data_antigo,
    hora_antigo,
  ]);

  {
    
    FORNECEDOR_ANTIGO.map((t) => (custo_cilindro_antigo = t.CUSTO_CILINDRO));
    FORNECEDOR_ANTIGO.map((t) => (checkbox_antigo = t.POSITION_CHECKBOX));
    FORNECEDOR_ANTIGO.map((t) => (volume_antigo = t.VOLUME));
    FORNECEDOR_ANTIGO.map((t) => (data_antigo = t.DATA));
    FORNECEDOR_ANTIGO.map((t) => (hora_antigo = t.HORA));
    

    console.log("volume_antigo:", volume_antigo);
   // console.log("data antiga:", data_antigo);
    //console.log("hora antiga:", hora_antigo);
  }




  time_lapse =
    Math.round(
      10 * ((Math.round(Date.now()) ) / 1000 / 60 / 60)
    ) / 10;
  console.log("time_lapse:", time_lapse);

  average_Consuption_bar = Number(P_60min_He1 - PatualHe1) ;

  // 200 precisa ser substituido para o valor da varíavel P_He1_max - assim que ajustar os sensores
  average_Consuption_m3 = (
    24 * Number((average_Consuption_bar * volume_antigo) / (200 - AlarmeHe1))
  ).toFixed(2);

  previsao_de_troca = ((PatualHe1-AlarmeHe1) / average_Consuption_bar).toFixed(1);

  console.log("previsao de troca:", previsao_de_troca);
  console.log("average_Consuption_m3:", average_Consuption_m3);

  // cálculo custo hora

  console.log("Custo Cilindro:", custo_cilindro_antigo);

  custoHora =
    "R$" +
    (
      (custo_cilindro_antigo / 24 / volume_antigo) *
      average_Consuption_m3
    ).toFixed(2);

  console.log("Custo Hora:", custoHora);

  // rotina para teste de estanqueidade

  LimiteMaxLeak = 0.5; // limite máximo de vazamento em bar por 6 horas

  leak = PhojeHe1_1AM-PhojeHe1_6AM;
  console.log("leak:", leak);

  const [IsItLeaking, setIsItLeaking] = useState (false); // useState para comparar o valor atual com o valor de alarme

  useEffect(() => {
    if (leak > LimiteMaxLeak) {
      setIsItLeaking(true);
    } else {
      setIsItLeaking(false);
    }
    },[setIsItLeaking, leak, LimiteMaxLeak]);


  {/* 
    if (IsItLeaking === true ){
    
    leak_test = Math.round((leak * custo_cilindro_antigo/200))}
    
    
    else{

      leak_test = "ok"

    }

     loss = Math.round(Number((leak/ average_Consuption_bar)*100))
  

  */}

 

  return (
    

    
    <S.Container>

<S.FeaturedContainer>
            
            <S.FeaturedItem> 
            <S.FeaturedTitle>Manômetro (bar):   </S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                 <span className= "featuredMoney">{String(PatualHe1)}</span>
                <span className="featuredMoneyRate"> <ArrowDownwardOutlinedIcon className="featuredIconManometer"/> 6.9 </span> 
                <img src={manometer_verde} alt="manometer" />
               {/* <span className="featuredMoneyRate"> <SpeedOutlinedIcon className="featuredIconLogoMan"/></span> */}
            </S.FeaturedMoneyContainer>
             {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            
            </S.FeaturedItem>

            <S.FeaturedItem> 
            <S.FeaturedTitle>Alarme (bar):</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                 <span className= "featuredMoney">{String(AlarmeHe1)}</span>
             
                <span className="featuredMoneyRate"> <NotificationsActiveOutlinedIcon className="featuredIconLogoAlarme"/></span> 
            </S.FeaturedMoneyContainer>
            {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            </S.FeaturedItem>

            <S.FeaturedItem> 
            <S.FeaturedTitle>Troca Prevista (dias):</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                 <span className= "featuredMoney">{String(previsao_de_troca)}</span>
                <span className="featuredMoneyRate"> <ArrowUpward className="featuredIcon positive"/> 2.4 </span> 
                <span className="featuredMoneyRate"> <EventRepeatOutlinedIcon className="featuredIconLogoTroca"/></span> 
            </S.FeaturedMoneyContainer>
             {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            </S.FeaturedItem>
</S.FeaturedContainer>

<S.FeaturedContainer2>
            
            <S.FeaturedItemConsumo> 
            <S.FeaturedTitle>Consumo(bar/dia):</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                 <span className= "featuredMoney">{String(average_Consuption_bar)}</span>
                <span className="featuredMoneyRate"> <ArrowUpwardOutlinedIcon className="featuredIconConsumo"/> 6.9 </span> 
                <span className="featuredMoneyRate"> <BarChartOutlinedIcon className="featuredIconLogo"/></span> 
            </S.FeaturedMoneyContainer>
             {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            
            </S.FeaturedItemConsumo>

            <S.FeaturedItem> 
            <S.FeaturedTitle>Custo/Dia (R$):</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                 <span className= "featuredMoney">{String(custoHora)}</span>
                
                <span className="featuredMoneyRate"> <AttachMoneyOutlinedIcon className="featuredIconLogo"/></span>
            </S.FeaturedMoneyContainer>
             {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            </S.FeaturedItem>

            <S.FeaturedItem> 
            <S.FeaturedTitle>Estanqueidade:</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

            <span className= "featuredResultEstanqueidade">{IsItLeaking ?
            
            (<h1>{"R$"+String(leak_test)+"/"+String(loss)+"%"}
             <span className="featuredMoneyRate"> <ThumbDownOutlinedIcon className="featuredIconLogoNegative"/></span>
            </h1>)
            :
            (<h1>ok
             <span className="featuredMoneyRate"> <ThumbUpOutlinedIcon className="featuredIconLogoPositive"/></span>
             </h1>
             )}
             </span>
               {/*  
               <span className= "featuredResultEstanqueidade">{"R$"+String(leak_test)+"/"+String(loss)+"%"}</span>
            
                <span className="featuredMoneyRate"> <ThumbDownOutlinedIcon className="featuredIconLogoNegative"/></span>
             */}
                </S.FeaturedMoneyContainer>

           {/*<S.FeaturedSub>Em relação a semana passada</S.FeaturedSub>*/}
            </S.FeaturedItem>
</S.FeaturedContainer2>
<S.LeftSide>

<S.ScreenSize_1>


<h2>Width: {windowSize.current[0]}</h2>
</S.ScreenSize_1>

<S.ScreenSize_2>

<h2>Height: {windowSize.current[1]}</h2>

</S.ScreenSize_2>


</S.LeftSide>
   

{/*
      <S.LeftSide>
      
     
      {IsItLeaking ?
      (
        <S.Warning_1> <h1>POTENCIAL VAZAMENTO DETECTADO OU USO DO GÁS FORA DO HORÁRIO COMERCIAL  </h1>
        
        <img src={no_ok} alt="not ok" />
        </S.Warning_1> 
        ): ( 

        <S.Warning_2> <h1>TESTE DE ESTANQUEIDADE FOI REALIZADO COM SUCESSO</h1>
        <img src={ok} alt="ok" />
        </S.Warning_2>
        )}

        <S.Warning_3> <h1>AUMENTO DO CONSUMO DE GASES DETECTADO NO PERÍODO ANALISADO</h1>
        <img src={no_ok} alt="not ok" />
        </S.Warning_3>

        <S.ScreenSize_1>


        <h2>Width: {windowSize.current[0]}</h2>
        </S.ScreenSize_1>

        <S.ScreenSize_2>

        <h2>Height: {windowSize.current[1]}</h2>

        </S.ScreenSize_2>

       


</S.LeftSide>


         

 */}

     


    </S.Container>

  );
}

export default AlarmeManHe1;
