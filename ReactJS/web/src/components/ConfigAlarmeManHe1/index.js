import React, { useState, useEffect } from "react";
import { useRef } from 'react';

import { TextField } from "@mui/material";


import InputAdornment from "@mui/material/InputAdornment";

import Button from "@mui/material/Button";
import Clock from "../../assets/clock.png";



//import timePicker from "../../components/TimePicker/index.js";



import * as S from "./styles";
import api from "../../service/api";
import { is } from "date-fns/locale";

import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";





let hoje = new Date();

function ConfigAlarmeManHe1(
  {
    PhojeHe1_1AM,
   
    PhojeHe1_6AM,
    leak,
    leak_test,
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
    yyyy,
  
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

  average_Consuption_bar = Number(P_60min_He1 - PatualHe1) ;
  console.log("P_60min_He1 :", P_60min_He1)
  console.log("PatualHe1 :", PatualHe1)
  console.log("Average Consumption:", average_Consuption_bar);

  previsao_de_troca = ((PatualHe1-AlarmeHe1) / average_Consuption_bar).toFixed(1);

  console.log ("previsao_de_troca:", previsao_de_troca);

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


  let ddata = new Date().toLocaleDateString();
  let hora = new Date().toLocaleTimeString();

     // HORA: hora,
   // ddata: ddata,

  const requestBody = {
    id: (Date.now() / 1000).toFixed(0),
    deviceID: "Aliine",
    Ux: Math.round((Date.now() / 1000)),
    idGas: "He1",
    DataConectado: ddata,
    HoraConectado: hora,
    Pressao_He1: PatualHe1,
    AlarmeHe1: PRESSAO_ALARME_He1,
    Track_AlarmeHe1: "Track_AlarmeHe1",
  };

  // função para setar e gravar a pressão de alarme

  async function alarme2( requestBody,requestConfig ) {
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
  




  

 

  return (

    
    <S.Container>
      <S.RightSide>
        <S.CAIXA_CONECTADO>

          <S.Titulo><h1>Configuração :</h1></S.Titulo>

          <S.GAS_SENDO_UTILIZADO>

          <h2>HÉLIO 5.0</h2>

          </S.GAS_SENDO_UTILIZADO>

          <S.INICIO>

         

          
          </S.INICIO>
         

          <S.O_NOVO_Pressao_Alarme_Atual>
            <TextField
              id="label-alarme"
              type="number"
              label="Pressão de Alarme  (bar): "
              InputLabelProps={{ shrink: true }}
              placeholder={AlarmeHe1}
              inputProps={{
                type: "number",
                min: 1,
                max: PatualHe1,
                step: 0.25,
                endAdornment: (
                  <InputAdornment position="start">
                    <h2>bar</h2>
                  </InputAdornment>
                )
              }}
              onChange={(e) => setPA(e.target.value)}
              value={PRESSAO_ALARME_He1}
             // InputProps={{
               // endAdornment: (
                 // <InputAdornment position="end">
                   // <h2>bar</h2>
                 // </InputAdornment>
                //),
              //}}
            />



            </S.O_NOVO_Pressao_Alarme_Atual>

            <S.ALARME_SAVE_BUTTON>
            <Button
              variant="contained"
              size="small"
              //color="success"
              onClick={() => alarme2(requestConfig, requestBody )}
            >
              <strong>salvar</strong>
            </Button>
            </S.ALARME_SAVE_BUTTON>

        
        <S.ScreenSize_1>


        <h2>Width: {windowSize.current[0]}</h2>
        </S.ScreenSize_1>

        <S.ScreenSize_2>

        <h2>Height: {windowSize.current[1]}</h2>

        </S.ScreenSize_2>







         

         
        </S.CAIXA_CONECTADO>
      </S.RightSide>



     


    </S.Container>

  );
}

export default ConfigAlarmeManHe1;
