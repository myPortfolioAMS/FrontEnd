
import React, { useState, useEffect, Component, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import Checkbox from '@mui/material/Checkbox';



import * as S from "./styles";
import api from "../../service/api";
import { Line } from "react-chartjs-2";

import cilindroHe from "../../assets/cilindro-grande_revisado_V1_HE.png";

import CylinderHe from "../../assets/cilindro-grande_revisado_V1_HE.png";
import CylinderRED from "../../assets/CILINDRO5-TELA3-RED-V1.png";
import save_orange from "../../assets/save.png";

import bateria from "../../assets/bateria.png";

import HE05 from "../../assets/HE05.png";
import HE10 from "../../assets/HE10.png";
import HE15 from "../../assets/HE15.png";
import HE20 from "../../assets/HE20.png";
import HE25 from "../../assets/HE25.png";
import HE30 from "../../assets/HE30.png";
import HE35 from "../../assets/HE35.png";
import HE40 from "../../assets/HE40.png";
import HE45 from "../../assets/HE45.png";
import HE50 from "../../assets/HE50.png";
import HE55 from "../../assets/HE55.png";
import HE60 from "../../assets/HE60.png";
import HE65 from "../../assets/HE65.png";
import HE70 from "../../assets/HE70.png";
import HE75 from "../../assets/HE75.png";
import HE80 from "../../assets/HE80.png";
import HE85 from "../../assets/HE85.png";
import HE90 from "../../assets/HE90.png";
import HE95 from "../../assets/HE95.png";
import HE100 from "../../assets/HE100.png";

import left from "../../assets/left.png";

import config from "../../assets/study.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { blue } from "@mui/material/colors";
import { TextFields } from "@mui/icons-material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let hoje = new Date();

function ChartsManHe1(
  {
    PatualHe1,
    time_measurement_He1,
    PatualN21,
    PatualARS1,
    PatualARG1,
    PontemHe1,
    PontemN21,
    PontemARS1,
    PontemARG1,
    PhojeHe1_1AM,
    PhojeHe1_2AM,
    PhojeHe1_3AM,
    PhojeHe1_4AM,
    PhojeHe1_5AM,
    PhojeHe1_6AM,

    PhojeHe1_7AM,
    PhojeHe1_8AM,
    PhojeHe1_9AM,
    PhojeHe1_10AM,
    PhojeHe1_11AM,
    PhojeHe1_12AM,

    PhojeHe1_01PM,
    PhojeHe1_02PM,
    PhojeHe1_03PM,
    PhojeHe1_04PM,
    PhojeHe1_05PM,
    PhojeHe1_06PM,

    PhojeHe1_07PM,
    PhojeHe1_08PM,
    PhojeHe1_09PM,
    PhojeHe1_10PM,
    PhojeHe1_11PM,
    PhojeHe1_12PM,



    PontemHe1_1AM,
    PontemHe1_2AM,
    PontemHe1_3AM,
    PontemHe1_4AM,
    PontemHe1_5AM,
    PontemHe1_6AM,
    PontemN21_6AM,
    PontemARS1_6AM,
    PontemARG1_6AM,
    PontemHe1_7AM,
    PontemN21_7AM,
    PontemARS1_7AM,
    PontemARG1_7AM,
    PontemHe1_8AM,
    PontemN21_8AM,
    PontemARS1_8AM,
    PontemARG1_8AM,
    PontemHe1_9AM,
    PontemN21_9AM,
    PontemARS1_9AM,
    PontemARG1_9AM,
    PontemHe1_10AM,
    PontemN21_10AM,
    PontemARS1_10AM,
    PontemARG1_10AM,
    PontemHe1_11AM,
    PontemN21_11AM,
    PontemARS1_11AM,
    PontemARG1_11AM,
    PontemHe1_12AM,
    PontemN21_12AM,
    PontemARS1_12AM,
    PontemARG1_12AM,
    PontemHe1_01PM,
    PontemN21_01PM,
    PontemARS1_01PM,
    PontemARG1_01PM,
    PontemHe1_02PM,
    PontemN21_02PM,
    PontemARS1_02PM,
    PontemARG1_02PM,
    PontemHe1_03PM,
    PontemN21_03PM,
    PontemARS1_03PM,
    PontemARG1_03PM,
    PontemHe1_04PM,
    PontemN21_04PM,
    PontemARS1_04PM,
    PontemARG1_04PM,
    PontemHe1_05PM,
    PontemN21_05PM,
    PontemARS1_05PM,
    PontemARG1_05PM,
   
    PontemHe1_06PM,
    PontemHe1_07PM,
    PontemHe1_08PM,  
    PontemHe1_09PM,
    PontemHe1_10PM,
    PontemHe1_11PM,
    PontemHe1_12PM,
    AlarmeHe1,
    Lote_He1,
    EID,
    Eid,
    fornecedor_antigo,
    email_antigo,
    cel_antigo,
    Lote_Antigo,
    custo_cilindro_antigo,
    checkbox_antigo,
    volume_antigo,
    data_antigo,
    hora_antigo,
    datum,
    conectado,
    conectadoData,
    conectadoHora,
    Ux_conectado,
    time_lapse,
    P_60min_He1,
    previsao_de_troca,
    average_Consuption_m3,
    custoHora,
    bs,

    fornecedor_antigo_inst,
    email_antigo_inst,
    cel_antigo_inst,
    checkbox_antigo_inst,
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
  const [valoresOntem_1AM, CilindrosOntem_1AM] = useState([0]); // useState dos valores de ontem as 1 horas
  const [valoresOntem_2AM, CilindrosOntem_2AM] = useState([0]); // useState dos valores de ontem as 2 horas
  const [valoresOntem_3AM, CilindrosOntem_3AM] = useState([0]); // useState dos valores de ontem as 3 horas
  const [valoresOntem_4AM, CilindrosOntem_4AM] = useState([0]); // useState dos valores de ontem as 4 horas
  const [valoresOntem_5AM, CilindrosOntem_5AM] = useState([0]); // useState dos valores de ontem as 5 horas
  const [valoresOntem_6AM, CilindrosOntem_6AM] = useState([0]); // useState dos valores de ontem as 6 horas
  const [valoresOntem_7AM, CilindrosOntem_7AM] = useState([0]); // useState dos valores de ontem as 7 horas
  const [valoresOntem_8AM, CilindrosOntem_8AM] = useState([0]); // useState dos valores de ontem as 8 horas
  const [valoresOntem_9AM, CilindrosOntem_9AM] = useState([0]); // useState dos valores de ontem as 9 horas
  const [valoresOntem_10AM, CilindrosOntem_10AM] = useState([0]); // useState dos valores de ontem as 10 horas
  const [valoresOntem_11AM, CilindrosOntem_11AM] = useState([0]); // useState dos valores de ontem as 11 horas
  const [valoresOntem_12AM, CilindrosOntem_12AM] = useState([0]); // useState dos valores de ontem as 12 horas
  const [valoresOntem_01PM, CilindrosOntem_01PM] = useState([0]); // useState dos valores de ontem as 13 horas
  const [valoresOntem_02PM, CilindrosOntem_02PM] = useState([0]); // useState dos valores de ontem as 14 horas
  const [valoresOntem_03PM, CilindrosOntem_03PM] = useState([0]); // useState dos valores de ontem as 15 horas
  const [valoresOntem_04PM, CilindrosOntem_04PM] = useState([0]); // useState dos valores de ontem as 16 horas
  const [valoresOntem_05PM, CilindrosOntem_05PM] = useState([0]); // useState dos valores de ontem as 17 horas

  const [valoresOntem_06PM, CilindrosOntem_06PM] = useState([0]); // useState dos valores de ontem as 18 horas
  const [valoresOntem_07PM, CilindrosOntem_07PM] = useState([0]); // useState dos valores de ontem as 19 horas
  const [valoresOntem_08PM, CilindrosOntem_08PM] = useState([0]); // useState dos valores de ontem as 20 horas
  const [valoresOntem_09PM, CilindrosOntem_09PM] = useState([0]); // useState dos valores de ontem as 21 horas
  const [valoresOntem_10PM, CilindrosOntem_10PM] = useState([0]); // useState dos valores de ontem as 22 horas
  const [valoresOntem_11PM, CilindrosOntem_11PM] = useState([0]); // useState dos valores de ontem as 23 horas
  const [valoresOntem_12PM, CilindrosOntem_12PM] = useState([0]); // useState dos valores de ontem as 24 horas

  const [valoresHoje_1AM, CilindrosHoje_1AM] = useState([0]); // useState dos valores de hoje as 1 horas
  const [valoresHoje_2AM, CilindrosHoje_2AM] = useState([0]); // useState dos valores de hoje as 2 horas
  const [valoresHoje_3AM, CilindrosHoje_3AM] = useState([0]); // useState dos valores de hoje as 3 horas
  const [valoresHoje_4AM, CilindrosHoje_4AM] = useState([0]); // useState dos valores de hoje as 4 horas
  const [valoresHoje_5AM, CilindrosHoje_5AM] = useState([0]); // useState dos valores de hoje as 5 horas
  const [valoresHoje_6AM, CilindrosHoje_6AM] = useState([0]); // useState dos valores de hoje as 6 horas

  const [valoresHoje_7AM, CilindrosHoje_7AM] = useState([0]); // useState dos valores de hoje as 7 horas
  const [valoresHoje_8AM, CilindrosHoje_8AM] = useState([0]); // useState dos valores de hoje as 8 horas
  const [valoresHoje_9AM, CilindrosHoje_9AM] = useState([0]); // useState dos valores de hoje as 9 horas
  const [valoresHoje_10AM, CilindrosHoje_10AM] = useState([0]); // useState dos valores de hoje as 10 horas
  const [valoresHoje_11AM, CilindrosHoje_11AM] = useState([0]); // useState dos valores de hoje as 11 horas
  const [valoresHoje_12AM, CilindrosHoje_12AM] = useState([0]); // useState dos valores de hoje as 12 horas

  const [valoresHoje_1PM, CilindrosHoje_1PM] = useState([0]); // useState dos valores de hoje as 13 horas
  const [valoresHoje_2PM, CilindrosHoje_2PM] = useState([0]); // useState dos valores de hoje as 14 horas
  const [valoresHoje_3PM, CilindrosHoje_3PM] = useState([0]); // useState dos valores de hoje as 15 horas
  const [valoresHoje_4PM, CilindrosHoje_4PM] = useState([0]); // useState dos valores de hoje as 16 horas
  const [valoresHoje_5PM, CilindrosHoje_5PM] = useState([0]); // useState dos valores de hoje as 17 horas
  const [valoresHoje_6PM, CilindrosHoje_6PM] = useState([0]); // useState dos valores de hoje as 18 horas

  const [valoresHoje_7PM, CilindrosHoje_7PM] = useState([0]); // useState dos valores de hoje as 19 horas
  const [valoresHoje_8PM, CilindrosHoje_8PM] = useState([0]); // useState dos valores de hoje as 20 horas
  const [valoresHoje_9PM, CilindrosHoje_9PM] = useState([0]); // useState dos valores de hoje as 21 horas
  const [valoresHoje_10PM, CilindrosHoje_10PM] = useState([0]); // useState dos valores de hoje as 22 horas
  const [valoresHoje_11PM, CilindrosHoje_11PM] = useState([0]); // useState dos valores de hoje as 22 horas
  const [valoresHoje_12PM, CilindrosHoje_12PM] = useState([0]); // useState dos valores de hoje as 22 horas


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

  const [CHECKBOX_FORNECEDOR_GASES, setCHECKBOX_FORNECEDOR_GASES] = useState([false]);
  const [CHECKBOX_FORNECEDOR_INST, setCHECKBOX_FORNECEDOR_INST] = useState([false]);

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

  async function getlast60min() {
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine")
    await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine')
      .then((response) => {
        setlast60min(response.data);

        console.log("valores de 60 minutos:", last60min);
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

    console.log("P_60min_He1:", P_60min_He1);
  }

  async function loadCilindrosNow() {

    await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine')
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine")

      .then((response) => {
        CilindrosNow(response.data);

        console.log("valores Agora:", valoresNow);
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
    valoresNow.map((t) => (PatualN21 = t.N2));
  }

  {
    valoresNow.map((t) => (PatualARS1 = t.ARS));
  }

  {
    valoresNow.map((t) => (PatualARG1 = t.ARG));
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
  let nitrogenioNow = PatualN21;
  let arsNow = PatualARS1;
  let argonioNow = PatualARG1;

  let vEID = EID;

  console.log("vEID:", EID);
  // final da função que faz a requisição dos valores atuais

  // início da função que faz a requisição dos valores de ontem
  async function loadCilindrosOntem() {

  //  await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/yesterday?deviceID=Aliine")
    await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/yesterday?deviceID=Aliine')
      .then((response) => {
        CilindrosOntem(response.data);

        console.log("valores Ontem:", valoresOntem);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem();
  }, []);

  {
    valoresOntem.map((t) => (PontemHe1 = t.He));
  }

  {
    valoresOntem.map((t) => (PontemN21 = t.N2));
  }

  {
    valoresOntem.map((t) => (PontemARS1 = t.ARS));
  }

  {
    valoresOntem.map((t) => (PontemARG1 = t.ARG));
  }

  // final da função que faz a requisição dos valores de ontem

  // indices de Consumo de N2 e He comparando hoje com ontem
  let indiceConsumoN2 = 100 * ((PontemN21 - PatualN21) / 200).toFixed(2);
  let indiceConsumoHe = 100 * ((PontemHe1 - PatualHe1) / 200).toFixed(2);
  let indiceConsumoARS = 100 * ((PontemARS1 - PatualARS1) / 200).toFixed(2);
  let indiceConsumoARG = 100 * ((PontemARG1 - PatualARG1) / 200).toFixed(2);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 1 horas da manhã
       async function loadCilindrosHoje_1AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine')
  
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_1AM(response.data);
  
          console.log("valores Hoje 1 AM:", valoresHoje_1AM);
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
    console.log("helio1AM_Hoje:", helio1AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 2 horas da manhã
       async function loadCilindrosHoje_2AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje2am?deviceID=Aliine')
  
          await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje2am?deviceID=Aliine')
        
        .then((response) => {
          CilindrosHoje_2AM(response.data);
  
          console.log("valores Hoje 2 AM:", valoresHoje_2AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_2AM();
    }, []);
  
    {
      valoresHoje_2AM.map((t) => (PhojeHe1_2AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 2 horas da manhã
  
    // input para gráfico de consumo - Hélio as 2 horas da manhã de hoje
  
    let helio2AM_Hoje = PhojeHe1_2AM;
    console.log("helio2AM_Hoje:", helio2AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 3 horas da manhã
       async function loadCilindrosHoje_3AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje3am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje3am?deviceID=Aliine')

        
        .then((response) => {
          CilindrosHoje_3AM(response.data);
  
          console.log("valores Hoje 3 AM:", valoresHoje_3AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_3AM();
    }, []);
  
    {
      valoresHoje_3AM.map((t) => (PhojeHe1_3AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 3 horas da manhã
  
    // input para gráfico de consumo - Hélio as 3 horas da manhã de hoje
  
    let helio3AM_Hoje = PhojeHe1_3AM;
    console.log("helio3AM_Hoje:", helio3AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 4 horas da manhã
       async function loadCilindrosHoje_4AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje4am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje4am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_4AM(response.data);
  
          console.log("valores Hoje 4 AM:", valoresHoje_4AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_4AM();
    }, []);
  
    {
      valoresHoje_4AM.map((t) => (PhojeHe1_4AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 4 horas da manhã
  
    // input para gráfico de consumo - Hélio as 4 horas da manhã de hoje
  
    let helio4AM_Hoje = PhojeHe1_4AM;
    console.log("helio4AM_Hoje:", helio4AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 5 horas da manhã
       async function loadCilindrosHoje_5AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje5am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje5am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_5AM(response.data);
  
          console.log("valores Hoje 5 AM:", valoresHoje_5AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_5AM();
    }, []);
  
    {
      valoresHoje_5AM.map((t) => (PhojeHe1_5AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 5 horas da manhã
  
    // input para gráfico de consumo - Hélio as 5 horas da manhã de hoje
  
    let helio5AM_Hoje = PhojeHe1_5AM;
    console.log("helio5AM_Hoje:", helio5AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 6 horas da manhã
       async function loadCilindrosHoje_6AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_6AM(response.data);
  
          console.log("valores Hoje 6 AM:", valoresHoje_6AM);
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
    console.log("helio6AM_Hoje:", helio6AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 7 horas da manhã
       async function loadCilindrosHoje_7AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje7am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje7am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_7AM(response.data);
  
          console.log("valores Hoje 7 AM:", valoresHoje_7AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_7AM();
    }, []);
  
    {
      valoresHoje_7AM.map((t) => (PhojeHe1_7AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 7 horas da manhã
  
    // input para gráfico de consumo - Hélio as 7 horas da manhã de hoje
  
    let helio7AM_Hoje = PhojeHe1_7AM;
    console.log("helio7AM_Hoje:", helio7AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 8 horas da manhã
       async function loadCilindrosHoje_8AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje8am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje8am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_8AM(response.data);
  
          console.log("valores Hoje 8 AM:", valoresHoje_8AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_8AM();
    }, []);
  
    {
      valoresHoje_8AM.map((t) => (PhojeHe1_8AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 8 horas da manhã
  
    // input para gráfico de consumo - Hélio as 8 horas da manhã de hoje
  
    let helio8AM_Hoje = PhojeHe1_8AM;
    console.log("helio8AM_Hoje:", helio8AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 9 horas da manhã
       async function loadCilindrosHoje_9AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje9am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje9am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_9AM(response.data);
  
          console.log("valores Hoje 9 AM:", valoresHoje_9AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_9AM();
    }, []);
  
    {
      valoresHoje_9AM.map((t) => (PhojeHe1_9AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 9 horas da manhã
  
    // input para gráfico de consumo - Hélio as 9 horas da manhã de hoje
  
    let helio9AM_Hoje = PhojeHe1_9AM;
    console.log("helio9AM_Hoje:", helio9AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 10 horas da manhã
       async function loadCilindrosHoje_10AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje10am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje10am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_10AM(response.data);
  
          console.log("valores Hoje 10 AM:", valoresHoje_10AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_10AM();
    }, []);
  
    {
      valoresHoje_10AM.map((t) => (PhojeHe1_10AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 10 horas da manhã
  
    // input para gráfico de consumo - Hélio as 10 horas da manhã de hoje
  
    let helio10AM_Hoje = PhojeHe1_10AM;
    console.log("helio10AM_Hoje:", helio10AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 11 horas da manhã
       async function loadCilindrosHoje_11AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje11am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje11am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_11AM(response.data);
  
          console.log("valores Hoje 11 AM:", valoresHoje_11AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_11AM();
    }, []);
  
    {
      valoresHoje_11AM.map((t) => (PhojeHe1_11AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 11 horas da manhã
  
    // input para gráfico de consumo - Hélio as 11 horas da manhã de hoje
  
    let helio11AM_Hoje = PhojeHe1_11AM;
    console.log("helio11AM_Hoje:", helio11AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

         // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 12 horas da manhã
       async function loadCilindrosHoje_12AM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje12am?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje12am?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_12AM(response.data);
  
          console.log("valores Hoje 12 AM:", valoresHoje_12AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_12AM();
    }, []);
  
    {
      valoresHoje_12AM.map((t) => (PhojeHe1_12AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 12 horas da manhã
  
    // input para gráfico de consumo - Hélio as 12 horas da manhã de hoje
  
    let helio12AM_Hoje = PhojeHe1_12AM;
    console.log("helio12AM_Hoje:", helio12AM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

         // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 13 horas 
       async function loadCilindrosHoje_1PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje01pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje01pm?deviceID=Aliine')

  
        
        .then((response) => {
          CilindrosHoje_1PM(response.data);
  
          console.log("valores Hoje 01 PM:", valoresHoje_1PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_1PM();
    }, []);
  
    {
      valoresHoje_1PM.map((t) => (PhojeHe1_01PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 13 horas da tarde
  
    // input para gráfico de consumo - Hélio as 13 horas da tarde de hoje
  
    let helio01PM_Hoje = PhojeHe1_01PM;
    console.log("helio01PM_Hoje:", helio01PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 14 horas 
       async function loadCilindrosHoje_2PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje02pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje02pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_2PM(response.data);
  
          console.log("valores Hoje 02 PM:", valoresHoje_2PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_2PM();
    }, []);
  
    {
      valoresHoje_2PM.map((t) => (PhojeHe1_02PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 14 horas da tarde
  
    // input para gráfico de consumo - Hélio as 14 horas da tarde de hoje
  
    let helio02PM_Hoje = PhojeHe1_02PM;
    console.log("helio02PM_Hoje:", helio02PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 15 horas 
       async function loadCilindrosHoje_3PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje03pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje03pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_3PM(response.data);
  
          console.log("valores Hoje 03 PM:", valoresHoje_3PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_3PM();
    }, []);
  
    {
      valoresHoje_3PM.map((t) => (PhojeHe1_03PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 15 horas da tarde
  
    // input para gráfico de consumo - Hélio as 15 horas da tarde de hoje
  
    let helio03PM_Hoje = PhojeHe1_03PM;
    console.log("helio03PM_Hoje:", helio03PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 14 horas 
       async function loadCilindrosHoje_4PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje04pm?deviceID=Aliine')
          await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje04pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_4PM(response.data);
  
          console.log("valores Hoje 04 PM:", valoresHoje_4PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_4PM();
    }, []);
  
    {
      valoresHoje_4PM.map((t) => (PhojeHe1_04PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 16 horas da tarde
  
    // input para gráfico de consumo - Hélio as 16 horas da tarde de hoje
  
    let helio04PM_Hoje = PhojeHe1_04PM;
    console.log("helio04PM_Hoje:", helio04PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  
     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 17 horas 
       async function loadCilindrosHoje_5PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje05pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje05pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_5PM(response.data);
  
          console.log("valores Hoje 05 PM:", valoresHoje_5PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_5PM();
    }, []);
  
    {
      valoresHoje_5PM.map((t) => (PhojeHe1_05PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 17 horas da tarde
  
    // input para gráfico de consumo - Hélio as 17 horas da tarde de hoje
  
    let helio05PM_Hoje = PhojeHe1_05PM;
    console.log("helio05PM_Hoje:", helio05PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 18 horas 
       async function loadCilindrosHoje_6PM() {


       // await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje06pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje06pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_6PM(response.data);
  
          console.log("valores Hoje 06 PM:", valoresHoje_6PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_6PM();
    }, []);
  
    {
      valoresHoje_6PM.map((t) => (PhojeHe1_06PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 18 horas da tarde
  
    // input para gráfico de consumo - Hélio as 18 horas da tarde de hoje
  
    let helio06PM_Hoje = PhojeHe1_06PM;
    console.log("helio06PM_Hoje:", helio06PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 19 horas 
       async function loadCilindrosHoje_7PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje07pm?deviceID=Aliine')
                await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje07pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_7PM(response.data);
  
          console.log("valores Hoje 07 PM:", valoresHoje_7PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_7PM();
    }, []);
  
    {
      valoresHoje_7PM.map((t) => (PhojeHe1_07PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 19 horas da tarde
  
    // input para gráfico de consumo - Hélio as 19 horas da tarde de hoje
  
    let helio07PM_Hoje = PhojeHe1_07PM;
    console.log("helio07PM_Hoje:", helio07PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  
     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 20 horas 
       async function loadCilindrosHoje_8PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje08pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje08pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_8PM(response.data);
  
          console.log("valores Hoje 08 PM:", valoresHoje_8PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_8PM();
    }, []);
  
    {
      valoresHoje_8PM.map((t) => (PhojeHe1_08PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 18 horas da tarde
  
    // input para gráfico de consumo - Hélio as 18 horas da tarde de hoje
  
    let helio08PM_Hoje = PhojeHe1_08PM;
    console.log("helio08PM_Hoje:", helio08PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 21 horas 
       async function loadCilindrosHoje_9PM() {


       // await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje09pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje09pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_9PM(response.data);
  
          console.log("valores Hoje 09 PM:", valoresHoje_9PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_9PM();
    }, []);
  
    {
      valoresHoje_9PM.map((t) => (PhojeHe1_09PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 21 horas da tarde
  
    // input para gráfico de consumo - Hélio as 21 horas da tarde de hoje
  
    let helio09PM_Hoje = PhojeHe1_09PM;
    console.log("helio09PM_Hoje:", helio09PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 22 horas 
       async function loadCilindrosHoje_10PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje10pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje10pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_10PM(response.data);
  
          console.log("valores Hoje 10 PM:", valoresHoje_10PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_10PM();
    }, []);
  
    {
      valoresHoje_10PM.map((t) => (PhojeHe1_10PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 22 horas da tarde
  
    // input para gráfico de consumo - Hélio as 22 horas da tarde de hoje
  
    let helio10PM_Hoje = PhojeHe1_10PM;
    console.log("helio10PM_Hoje:", helio10PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 23 horas 
       async function loadCilindrosHoje_11PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje11pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje11pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_11PM(response.data);
  
          console.log("valores Hoje 11 PM:", valoresHoje_11PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_11PM();
    }, []);
  
    {
      valoresHoje_11PM.map((t) => (PhojeHe1_11PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 23 horas da tarde
  
    // input para gráfico de consumo - Hélio as 23 horas da tarde de hoje
  
    let helio11PM_Hoje = PhojeHe1_11PM;
    console.log("helio11PM_Hoje:", helio11PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de hoje as 24 horas 
       async function loadCilindrosHoje_12PM() {


        //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje12pm?deviceID=Aliine')
        await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje12pm?deviceID=Aliine')
  
        
        .then((response) => {
          CilindrosHoje_12PM(response.data);
  
          console.log("valores Hoje 12 PM:", valoresHoje_12PM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosHoje_12PM();
    }, []);
  
    {
      valoresHoje_12PM.map((t) => (PhojeHe1_12PM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de hoje as 24 horas da tarde
  
    // input para gráfico de consumo - Hélio as 24 horas da tarde de hoje
  
    let helio12PM_Hoje = PhojeHe1_12PM;
    console.log("helio12PM_Hoje:", helio12PM_Hoje);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de ontem as 1 horas da manhã
       async function loadCilindrosOntem_1AM() {


        await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem1am?deviceID=Aliine')
  
  
        
        .then((response) => {
          CilindrosOntem_1AM(response.data);
  
          console.log("valores Ontem 1 AM:", valoresOntem_1AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosOntem_1AM();
    }, []);
  
    {
      valoresOntem_1AM.map((t) => (PontemHe1_1AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de ontem as 1 horas da manhã
  
    // input para gráfico de consumo - Hélio as 1 horas da manhã de ontem
  
    let helio1AM_Ontem = PontemHe1_1AM;
    console.log("helio1AM_Ontem:", helio1AM_Ontem);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de ontem as 2 horas da manhã
       async function loadCilindrosOntem_2AM() {


        await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem2am?deviceID=Aliine')
  
  
        
        .then((response) => {
          CilindrosOntem_2AM(response.data);
  
          console.log("valores Ontem 2 AM:", valoresOntem_2AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosOntem_2AM();
    }, []);
  
    {
      valoresOntem_2AM.map((t) => (PontemHe1_2AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de ontem as 2 horas da manhã
  
    // input para gráfico de consumo - Hélio as 2 horas da manhã de ontem
  
    let helio2AM_Ontem = PontemHe1_2AM;
    console.log("helio2AM_Ontem:", helio2AM_Ontem);
  



      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de ontem as 3 horas da manhã
       async function loadCilindrosOntem_3AM() {


        await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem3am?deviceID=Aliine')
  
  
        
        .then((response) => {
          CilindrosOntem_3AM(response.data);
  
          console.log("valores Ontem 3 AM:", valoresOntem_3AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosOntem_3AM();
    }, []);
  
    {
      valoresOntem_3AM.map((t) => (PontemHe1_3AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de ontem as 3 horas da manhã
  
    // input para gráfico de consumo - Hélio as 3 horas da manhã de ontem
  
    let helio3AM_Ontem = PontemHe1_3AM;
    console.log("helio3AM_Ontem:", helio3AM_Ontem);
  

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de ontem as 4 horas da manhã
       async function loadCilindrosOntem_4AM() {


        await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem4am?deviceID=Aliine')
  
  
        
        .then((response) => {
          CilindrosOntem_4AM(response.data);
  
          console.log("valores Ontem 4 AM:", valoresOntem_4AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosOntem_4AM();
    }, []);
  
    {
      valoresOntem_4AM.map((t) => (PontemHe1_4AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de ontem as 4 horas da manhã
  
    // input para gráfico de consumo - Hélio as 4 horas da manhã de ontem
  
    let helio4AM_Ontem = PontemHe1_4AM;
    console.log("helio4AM_Ontem:", helio4AM_Ontem);
  
  



  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

       // início da função que faz a requisição dos valores de ontem as 5 horas da manhã
       async function loadCilindrosOntem_5AM() {


        await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem5am?deviceID=Aliine')
  
  
        
        .then((response) => {
          CilindrosOntem_5AM(response.data);
  
          console.log("valores Ontem 5 AM:", valoresOntem_5AM);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      loadCilindrosOntem_5AM();
    }, []);
  
    {
      valoresOntem_5AM.map((t) => (PontemHe1_5AM = t.He));
    }
  
    
    
  
    // final da função que faz a requisição dos valores de ontem as 5 horas da manhã
  
    // input para gráfico de consumo - Hélio as 5 horas da manhã de ontem
  
    let helio5AM_Ontem = PontemHe1_5AM;
    console.log("helio5AM_Ontem:", helio5AM_Ontem);
  
  


  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

     // início da função que faz a requisição dos valores de ontem as 6 horas da manhã
     async function loadCilindrosOntem_6AM() {


      await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem6am?deviceID=Aliine')


      
      .then((response) => {
        CilindrosOntem_6AM(response.data);

        console.log("valores Ontem 6 AM:", valoresOntem_6AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_6AM();
  }, []);

  {
    valoresOntem_6AM.map((t) => (PontemHe1_6AM = t.He));
  }

  {
    valoresOntem_6AM.map((t) => (PontemN21_6AM = t.He));
  }

  {
    valoresOntem_6AM.map((t) => (PontemARS1_6AM = t.He));
  }

  {
    valoresOntem_6AM.map((t) => (PontemARG1_6AM = t.He));
  }

  // final da função que faz a requisição dos valores de ontem as 6 horas da manhã

  // input para gráfico de consumo - Hélio as 6 horas da manhã de ontem

  let helio6AM_Ontem = PontemHe1_6AM;
  console.log("helio6AM_Ontem:", helio6AM_Ontem);


  // início da função que faz a requisição dos valores de ontem as 7 horas da manhã
  async function loadCilindrosOntem_7AM() {


    await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem7am?deviceID=Aliine')


    
    .then((response) => {
      CilindrosOntem_7AM(response.data);

      console.log("valores Ontem 7 AM:", valoresOntem_7AM);
    })
    .catch((error) => {
      console.log(error);
    });
}

useEffect(() => {
  loadCilindrosOntem_7AM();
}, []);

{
  valoresOntem_7AM.map((t) => (PontemHe1_7AM = t.He));
}
/*
{
  valoresOntem_7AM.map((t) => (PontemN21_7AM = t.He));
}

{
  valoresOntem_7AM.map((t) => (PontemARS1_7AM = t.He));
}

{
  valoresOntem_7AM.map((t) => (PontemARG1_7AM = t.He));
}
*/

// final da função que faz a requisição dos valores de ontem as 7 horas da manhã

// input para gráfico de consumo - Hélio as 7 horas da manhã de ontem

let helio7AM_Ontem = PontemHe1_7AM;
console.log("helio7AM_Ontem OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO:", helio7AM_Ontem);   



   // início da função que faz a requisição dos valores de ontem as 8 horas da manhã
   async function loadCilindrosOntem_8AM() {


      await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem8am?deviceID=Aliine')


      
      .then((response) => {
        CilindrosOntem_8AM(response.data);

        console.log("valores Ontem 8 AM:", valoresOntem_8AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_8AM();
  }, []);

  {
    valoresOntem_8AM.map((t) => (PontemHe1_8AM = t.He));
  }

  {
    valoresOntem_8AM.map((t) => (PontemN21_8AM = t.He));
  }

  {
    valoresOntem_8AM.map((t) => (PontemARS1_8AM = t.He));
  }

  {
    valoresOntem_8AM.map((t) => (PontemARG1_8AM = t.He));
  }

  // final da função que faz a requisição dos valores de ontem as 9 horas da manhã

  // input para gráfico de consumo - Hélio as 9 horas da manhã de ontem

  let helio8AM_Ontem = PontemHe1_8AM;
  console.log("helio8AM_Ontem:", helio8AM_Ontem);

  // início da função que faz a requisição dos valores de ontem as 9 horas da manhã
  async function loadCilindrosOntem_9AM() {
    //await api
     // .get(
     //   "https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/ontem9am?deviceID=Aliine"
     // )



      await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem9am?deviceID=Aliine')


      
      .then((response) => {
        CilindrosOntem_9AM(response.data);

        console.log("valores Ontem 9 AM:", valoresOntem_9AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_9AM();
  }, []);

  {
    valoresOntem_9AM.map((t) => (PontemHe1_9AM = t.He));
  }

  {
    valoresOntem_9AM.map((t) => (PontemN21_9AM = t.He));
  }

  {
    valoresOntem_9AM.map((t) => (PontemARS1_9AM = t.He));
  }

  {
    valoresOntem_9AM.map((t) => (PontemARG1_9AM = t.He));
  }

  // final da função que faz a requisição dos valores de ontem as 9 horas da manhã

  // input para gráfico de consumo - Hélio as 9 horas da manhã de ontem

  let helio9AM_Ontem = PontemHe1_9AM;
  console.log("helio9AM_Ontem:", helio9AM_Ontem);

  // input para gráfico de consumo - Hélio as 9 horas da manhã de ontem

  let nitrogenio9AM_Ontem = PontemN21_9AM;

  let ars9AM_Ontem = PontemARS1_9AM;
  let argonio9AM_Ontem = PontemARG1_9AM;

  // início da função que faz a requisição dos valores de ontem as 10 horas da manhã
  async function loadCilindrosOntem_10AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem10am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_10AM(response.data);

        console.log("valores Ontem 10 AM:", valoresOntem_10AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_10AM();
  }, []);

  {
    valoresOntem_10AM.map((t) => (PontemHe1_10AM = t.He));
  }

  {
    valoresOntem_10AM.map((t) => (PontemN21_10AM = t.N2));
  }

  {
    valoresOntem_10AM.map((t) => (PontemARS1_10AM = t.ARS));
  }

  {
    valoresOntem_10AM.map((t) => (PontemARG1_10AM = t.ARG));
  }
  // final da função que faz a requisição dos valores de ontem as 10 horas da manhã

  // input para gráfico de consumo - Hélio as 10 horas da manhã de ontem

  let helio10AM_Ontem = PontemHe1_10AM;

  // input para gráfico de consumo - Hélio as 10 horas da manhã de ontem

  let nitrogenio10AM_Ontem = PontemN21_10AM;

  let ars10AM_Ontem = PontemARS1_10AM;
  let argonio10AM_Ontem = PontemARG1_10AM;

  // início da função que faz a requisição dos valores de ontem as 11 horas da manhã
  async function loadCilindrosOntem_11AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem11am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_11AM(response.data);

        console.log("valores Ontem 11 AM:", valoresOntem_11AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_11AM();
  }, []);

  {
    valoresOntem_11AM.map((t) => (PontemHe1_11AM = t.He));
  }

  {
    valoresOntem_11AM.map((t) => (PontemN21_11AM = t.N2));
  }

  {
    valoresOntem_11AM.map((t) => (PontemARS1_11AM = t.ARS));
  }

  {
    valoresOntem_11AM.map((t) => (PontemARG1_11AM = t.ARG));
  }
  // final da função que faz a requisição dos valores de ontem as 11 horas da manhã

  // input para gráfico de consumo - Hélio as 11 horas da manhã de ontem

  let helio11AM_Ontem = PontemHe1_11AM;

  // input para gráfico de consumo - Hélio as 11 horas da manhã de ontem

  let nitrogenio11AM_Ontem = PontemN21_11AM;

  let ars11AM_Ontem = PontemARS1_11AM;
  let argonio11AM_Ontem = PontemARG1_11AM;

  // início da função que faz a requisição dos valores de ontem as 12 horas da manhã
  async function loadCilindrosOntem_12AM() {
    await api
      .get(
        //"https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem12am?deviceID=Aliine"
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/ontem12am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_12AM(response.data);

        console.log("valores Ontem 12 AM:", valoresOntem_12AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_12AM();
  }, []);

  {
    valoresOntem_12AM.map((t) => (PontemHe1_12AM = t.He));
  }

  {
    valoresOntem_12AM.map((t) => (PontemN21_12AM = t.N2));
  }

  {
    valoresOntem_12AM.map((t) => (PontemARG1_12AM = t.ARG));
  }

  {
    valoresOntem_12AM.map((t) => (PontemARS1_12AM = t.ARS));
  }

  // final da função que faz a requisição dos valores de ontem as 11 horas da manhã

  // input para gráfico de consumo - Hélio as 11 horas da manhã de ontem

  let helio12AM_Ontem = PontemHe1_12AM;

  // input para gráfico de consumo - N2 as 11 horas da manhã de ontem

  let nitrogenio12AM_Ontem = PontemN21_12AM;

  let ars12AM_Ontem = PontemARS1_12AM;
  let argonio12AM_Ontem = PontemARG1_12AM;

  // início da função que faz a requisição dos valores de ontem as 13 horas da tarde
  async function loadCilindrosOntem_01PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem1pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_01PM(response.data);

        console.log("valores Ontem 01 PM:", valoresOntem_01PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_01PM();
  }, []);

  {
    valoresOntem_01PM.map((t) => (PontemHe1_01PM = t.He));
  }

  {
    valoresOntem_01PM.map((t) => (PontemN21_01PM = t.N2));
  }

  {
    valoresOntem_01PM.map((t) => (PontemARS1_01PM = t.ARS));
  }

  {
    valoresOntem_01PM.map((t) => (PontemARG1_01PM = t.ARG));
  }

  // final da função que faz a requisição dos valores de ontem as 13 horas da tarde

  // input para gráfico de consumo - Hélio as 13 horas da tarde de ontem

  let helio01PM_Ontem = PontemHe1_01PM;

  // input para gráfico de consumo - N2 as 13 horas da tarde de ontem

  let nitrogenio01PM_Ontem = PontemN21_01PM;
  let ars01PM_Ontem = PontemARS1_01PM;
  let argonio01PM_Ontem = PontemARG1_01PM;

  // início da função que faz a requisição dos valores de ontem as 02 hora da tarde
  async function loadCilindrosOntem_02PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem2pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_02PM(response.data);

        console.log("valores Ontem 02 PM:", valoresOntem_02PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_02PM();
  }, []);

  {
    valoresOntem_02PM.map((t) => (PontemHe1_02PM = t.He));
  }

  {
    valoresOntem_02PM.map((t) => (PontemN21_02PM = t.N2));
  }

  {
    valoresOntem_02PM.map((t) => (PontemARG1_02PM = t.ARG));
  }

  {
    valoresOntem_02PM.map((t) => (PontemARS1_02PM = t.ARS));
  }

  // final da função que faz a requisição dos valores de ontem as 11 horas da mtarde

  // input para gráfico de consumo - Hélio as 14 horas da tarde ontem

  let helio02PM_Ontem = PontemHe1_02PM;

  // input para gráfico de consumo - N2 as 14 horas da tarde de ontem

  let nitrogenio02PM_Ontem = PontemN21_02PM;

  let ars02PM_Ontem = PontemARS1_02PM;
  let argonio02PM_Ontem = PontemARG1_02PM;

  // início da função que faz a requisição dos valores de ontem as 03 horas da tarde
  async function loadCilindrosOntem_03PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem3pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_03PM(response.data);

        console.log("valores Ontem 03 PM:", valoresOntem_03PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_03PM();
  }, []);

  {
    valoresOntem_03PM.map((t) => (PontemHe1_03PM = t.He));
  }

  {
    valoresOntem_03PM.map((t) => (PontemN21_03PM = t.N2));
  }

  {
    valoresOntem_03PM.map((t) => (PontemARS1_03PM = t.ARS));
  }

  {
    valoresOntem_03PM.map((t) => (PontemARG1_03PM = t.ARG));
  }

  // final da função que faz a requisição dos valores de ontem as 15 horas da tarde

  // input para gráfico de consumo - Hélio as 03 horas da tarde de ontem

  let helio03PM_Ontem = PontemHe1_03PM;

  // input para gráfico de consumo - N2 as 03 horas da tarde de ontem

  let nitrogenio03PM_Ontem = PontemN21_03PM;

  let ars03PM_Ontem = PontemARS1_03PM;
  let argonio03PM_Ontem = PontemARG1_03PM;

  // início da função que faz a requisição dos valores de ontem as 04 horas da tarde
  async function loadCilindrosOntem_04PM() {
    await api
      .get("https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem4pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_04PM(response.data);

        console.log("valores Ontem 04 PM:", valoresOntem_04PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_04PM();
  }, []);

  {
    valoresOntem_04PM.map((t) => (PontemHe1_04PM = t.He));
  }

  {
    valoresOntem_04PM.map((t) => (PontemN21_04PM = t.N2));
  }

  {
    valoresOntem_04PM.map((t) => (PontemARS1_04PM = t.ARS));
  }

  {
    valoresOntem_04PM.map((t) => (PontemARG1_04PM = t.ARG));
  }

  // final da função que faz a requisição dos valores de ontem as 16 horas da tarde

  // input para gráfico de consumo - Hélio as 16 horas da tarde de ontem

  let helio04PM_Ontem = PontemHe1_04PM;

  // input para gráfico de consumo - Hélio as 16 horas da tarde de ontem

  let nitrogenio04PM_Ontem = PontemN21_04PM;

  let ars04PM_Ontem = PontemARS1_04PM;

  let argonio04PM_Ontem = PontemARG1_04PM;

  // início da função que faz a requisição dos valores de ontem as 05 hora da tarde
  async function loadCilindrosOntem_05PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem5pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_05PM(response.data);

        console.log("valores Ontem 05 PM:", valoresOntem_05PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_05PM();
  }, []);

  {
    valoresOntem_05PM.map((t) => (PontemHe1_05PM = t.He));
  }

  {
    valoresOntem_05PM.map((t) => (PontemN21_05PM = t.N2));
  }

  {
    valoresOntem_05PM.map((t) => (PontemARS1_05PM = t.ARS));
  }

  {
    valoresOntem_05PM.map((t) => (PontemARG1_05PM = t.ARG));
  }

  // final da função que faz a requisição dos valores de ontem as 17 horas da tarde

  // input para gráfico de consumo - Hélio as 17 horas da tarde de ontem

  let helio05PM_Ontem = PontemHe1_05PM;

  // input para gráfico de consumo - N2 as 17 horas da tarde de ontem

  let nitrogenio05PM_Ontem = PontemN21_05PM;

  let ars05PM_Ontem = PontemARS1_05PM;
  let argonio05PM_Ontem = PontemARG1_05PM;

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 06 horas da tarde
  async function loadCilindrosOntem_06PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem6pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_06PM(response.data);

        console.log("valores Ontem 06 PM:", valoresOntem_06PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_06PM();
  }, []);

  {
    valoresOntem_06PM.map((t) => (PontemHe1_06PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 18 horas da tarde

  // input para gráfico de consumo - Hélio as 18 horas da tarde de ontem

  let helio06PM_Ontem = PontemHe1_06PM;


  // final da função que faz a requisição dos valores de ontem as 06 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 07 horas da tarde
  async function loadCilindrosOntem_07PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem7pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_07PM(response.data);

        console.log("valores Ontem 07 PM:", valoresOntem_07PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_07PM();
  }, []);

  {
    valoresOntem_07PM.map((t) => (PontemHe1_07PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 19 horas da tarde

  // input para gráfico de consumo - Hélio as 19 horas da tarde de ontem

  let helio07PM_Ontem = PontemHe1_07PM;


  // final da função que faz a requisição dos valores de ontem as 07 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 08 horas da tarde
  async function loadCilindrosOntem_08PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem8pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_08PM(response.data);

        console.log("valores Ontem 08 PM:", valoresOntem_08PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_08PM();
  }, []);

  {
    valoresOntem_08PM.map((t) => (PontemHe1_08PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 20 horas da tarde

  // input para gráfico de consumo - Hélio as 20 horas da tarde de ontem

  let helio08PM_Ontem = PontemHe1_08PM;


  // final da função que faz a requisição dos valores de ontem as 08 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 09 horas da tarde
  async function loadCilindrosOntem_09PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem9pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_09PM(response.data);

        console.log("valores Ontem 09 PM:", valoresOntem_09PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_09PM();
  }, []);

  {
    valoresOntem_09PM.map((t) => (PontemHe1_09PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 21 horas da tarde

  // input para gráfico de consumo - Hélio as 21 horas da tarde de ontem

  let helio09PM_Ontem = PontemHe1_09PM;


  // final da função que faz a requisição dos valores de ontem as 09 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 10 horas da tarde
  async function loadCilindrosOntem_10PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem10pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_10PM(response.data);

        console.log("valores Ontem 10 PM:", valoresOntem_10PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_10PM();
  }, []);

  {
    valoresOntem_10PM.map((t) => (PontemHe1_10PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 22 horas da tarde

  // input para gráfico de consumo - Hélio as 22 horas da tarde de ontem

  let helio10PM_Ontem = PontemHe1_10PM;


  // final da função que faz a requisição dos valores de ontem as 10 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 11 horas da tarde
  async function loadCilindrosOntem_11PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem11pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_11PM(response.data);

        console.log("valores Ontem 11 PM:", valoresOntem_11PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_11PM();
  }, []);

  {
    valoresOntem_11PM.map((t) => (PontemHe1_11PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 23 horas da tarde

  // input para gráfico de consumo - Hélio as 23 horas da tarde de ontem

  let helio11PM_Ontem = PontemHe1_11PM;


  // final da função que faz a requisição dos valores de ontem as 23 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 24 horas da tarde
  async function loadCilindrosOntem_12PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem12pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_12PM(response.data);

        console.log("valores Ontem 12 PM:", valoresOntem_12PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_12PM();
  }, []);

  {
    valoresOntem_12PM.map((t) => (PontemHe1_12PM = t.He));
  }

  

  // final da função que faz a requisição dos valores de ontem as 24 horas da tarde

  // input para gráfico de consumo - Hélio as 24 horas da tarde de ontem

  let helio12PM_Ontem = PontemHe1_12PM;


  // final da função que faz a requisição dos valores de ontem as 24 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



  // função para retornar o valor do alarme do He, cilindro 1,  gravado no banco de dados

  async function loadAlarmesNow() {
    //await api
      //.get(
        //"https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine"
     // )

      await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine')

      .then((response) => {
        setPA_gravado(response.data);

        console.log("Alarmes Agora:", PRESSAO_ALARME_He1_gravado);
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

    console.log("AlarmeHe1:", AlarmeHe1);
    let z = Number(AlarmeHe1);

    console.log("Data Conectado:", DataConectado_He1);
    console.log("Hora Conectado:", HoraConectado_He1);

    let stringHm = String(HoraConectado_He1);
   
    console.log ("stringHm:", stringHm);
    console.log ("typeof:",typeof stringHm);
    
   HH = stringHm.substring(0,2);
   hm = stringHm.substring(3,5);

   let stringData = String(DataConectado_He1);

  dd = stringData.substring(8,10);
    mm = stringData.substring(5,7);
     yyyy = stringData.substring(0,4);

    console.log("DD:", dd);
    console.log("MM:", mm);
    console.log("YYYY:", yyyy);

OldData = +dd+'/'+mm+'/'+yyyy;

console.log("OldData:", OldData);

    

    console.log("HH:", HH);
    console.log("hm:", hm);
    console.log("HH:hm:", HH + ":" + hm);

    console.log("z:", z);
    console.log("type of z:", typeof z);

    console.log("Eid:", Eid);
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
    Pressao_He1: helioNow,
    //"N2": nitrogenioNow,
    //"ARS": arsNow,
    //"ARG": argonioNow,
    //"AlarmeHe1": alarme_He1,
    AlarmeHe1: PRESSAO_ALARME_He1,
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
        console.log("Registro gravado com sucesso!");
        alert("Novo valor de alarme do Hélio gravado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("AlarmeHe1:", AlarmeHe1);
  console.log("type of AlarmeHe1:", typeof AlarmeHe1);
  let z = Number(AlarmeHe1);
  console.log("z:", z);
  console.log("type of z:", typeof z);

  console.log("PRESSAO_ALARME_He1:", PRESSAO_ALARME_He1);
  console.log(
    "PRESSAO_ALARME_He1_gravado:",
    Number(PRESSAO_ALARME_He1_gravado.map((t) => (AlarmeHe1 = t.AlarmeHe1)))
  );

  console.log("type of PRESSAO_ALARME_He1:", typeof PRESSAO_ALARME_He1);
  let y = Number(PRESSAO_ALARME_He1);
  console.log("y:", y);

  let newSupplier = FORNECEDOR_NOVO;
  let EMAILN = EMAIL_NOVO;
  let CELN = CEL_NOVO;
  let LOTEN = lote_novo;
  let CCILINDRON = CUSTO_CILINDRO_NOVO;
  let position_CHECKBOX = CHECKBOX_FORNECEDOR_GASES;
  let vol = VOLUME_NOVO;
  let ddata = DATA_NOVA;
  let hora = HORA_NOVA;
  let Ux_DT = ddata + "T" + hora + ":" + 0 + 0 + ".000Z";
  let Ux_DTc = new Date(Ux_DT).valueOf();
  let back_in_Time = new Date(Ux_DTc);
  let P_He1_max = PatualHe1;

  const requestBodyF = {
    FORNECEDOR_GASES: newSupplier,
    id: "He1",
    deviceID: "Aliine",
    Ux: Math.round(Date.now()),
    EMAIL: EMAILN,
    CELULAR: CELN,
    LOTE: LOTEN,
    CUSTO_CILINDRO: CCILINDRON,
    POSITION_CHECKBOX: position_CHECKBOX,
    VOLUME: vol,
    DATA: ddata,
    HORA: hora,
    Ux_DT: Ux_DT,
    Ux_DTc: Ux_DTc,
    back_in_Time: back_in_Time,
    "P_He1_max:": P_He1_max,

    //"He": helioNow,
    //"N2": nitrogenioNow,
    //"ARS": arsNow,
    //"ARG": argonioNow,

    //"AlarmeHe1": PRESSAO_ALARME_He1,
  };

  let newSupplierInstalacao = FORNECEDOR_NOVO_INST;
  let EMAIL_INST = EMAIL_NOVO_INST;
  let CEL_INST = CEL_NOVO_INST;
  let position_CHECKBOX_INST = CHECKBOX_FORNECEDOR_INST;

  const requestBodyFI = {
  

    FORNECEDOR_INSTALACAO: newSupplierInstalacao,
    id: "He1",
    deviceID: "Aliine",
    Ux: Math.round(Date.now()),
    EMAIL_INST: EMAIL_INST,
    CELULAR_INST: CEL_INST,
    POSITION_CHECKBOX_INST: position_CHECKBOX_INST,

  };

  // função para setar e gravar a pressão de FORNECEDOR

  async function instalacao(requestBodyFI, requestConfig) {
    // await api.post(registerUrl, requestBody, requestConfig)

    await api
      .post(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/instalacao?",
        requestConfig,
        requestBodyFI
      )

      .then((response) => {
        console.log("Informações do responsável pela Instalação de Gases (HÉLIO) GRAVADAS com sucesso!");
        alert(
          "Informações relacionadas ao seu fornecedor da responsável pela Instalação de Gases (HÉLIO) registradas com sucesso!"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  async function getinstalacao() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getinstalacao?deviceID=Aliine"
      )

      .then((response) => {
        setFORNECEDOR_ANTIGO_INST(response.data);

        console.log("FORNECEDOR_ANTIGO_INST:", FORNECEDOR_ANTIGO_INST);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getinstalacao();
  }, [
    fornecedor_antigo_inst,
    email_antigo_inst,
    cel_antigo_inst,
    checkbox_antigo_inst,
   
  ]);

  {
    FORNECEDOR_ANTIGO_INST.map((t) => (fornecedor_antigo_inst = t.FORNECEDOR_INSTALACAO));
    FORNECEDOR_ANTIGO_INST.map((t) => (email_antigo_inst = t.EMAIL_INST));
    FORNECEDOR_ANTIGO_INST.map((t) => (cel_antigo_inst = t.CELULAR_INST));
    FORNECEDOR_ANTIGO_INST.map((t) => (checkbox_antigo_inst = t.POSITION_CHECKBOX_INST));
  

    console.log("fornecedor_inst_antigo:", fornecedor_antigo_inst);
    console.log("cel INST ANTIGO:", cel_antigo_inst);
    console.log("email INST ANTIGO:", email_antigo_inst);
    console.log("checkbox INST ANTIGO:", checkbox_antigo_inst);
  }


  // função para setar e gravar a pressão de FORNECEDOR

  async function fornecedor(requestBodyF, requestConfig) {
    // await api.post(registerUrl, requestBody, requestConfig)

    await api
      .post(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/fornecedor?",
        requestConfig,
        requestBodyF
      )

      .then((response) => {
        console.log("Informações do FORNECEDOR DE HÉLIO GRAVADAS com sucesso!");
        alert(
          "Informações relacionadas ao seu fornecedor de Hélio registradas com sucesso!"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getfornecedor() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getfornecedor?deviceID=Aliine"
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
    fornecedor_antigo,
    email_antigo,
    cel_antigo,
    Lote_Antigo,
    custo_cilindro_antigo,
    checkbox_antigo,
    volume_antigo,
    data_antigo,
    hora_antigo,
  ]);

  {
    FORNECEDOR_ANTIGO.map((t) => (fornecedor_antigo = t.FORNECEDOR_GASES));
    FORNECEDOR_ANTIGO.map((t) => (email_antigo = t.EMAIL));
    FORNECEDOR_ANTIGO.map((t) => (cel_antigo = t.CELULAR));
    FORNECEDOR_ANTIGO.map((t) => (Lote_Antigo = t.LOTE));
    FORNECEDOR_ANTIGO.map((t) => (custo_cilindro_antigo = t.CUSTO_CILINDRO));
    FORNECEDOR_ANTIGO.map((t) => (checkbox_antigo = t.POSITION_CHECKBOX));
    FORNECEDOR_ANTIGO.map((t) => (volume_antigo = t.VOLUME));
    FORNECEDOR_ANTIGO.map((t) => (data_antigo = t.DATA));
    FORNECEDOR_ANTIGO.map((t) => (hora_antigo = t.HORA));
    FORNECEDOR_ANTIGO.map((t) => (Ux_conectado = t.Ux));

    console.log("fornecedor_antigo:", fornecedor_antigo);
    console.log("data antiga:", data_antigo);
    console.log("hora antiga:", hora_antigo);
  }

 h1  = HoraConectado_He1;
 h2 = DataConectado_He1;

 console.log ("Hora Conectado:", HoraConectado_He1);
 console.log ("Data Conectado:", DataConectado_He1);
 


 // conectado = data_antigo + " " + hora_antigo;

 conectado = OldData + "T" + HH+":"+hm;

  conectadoData = data_antigo;

  conectadoHora = hora_antigo;

  datum = dd + "/" + mm + "/" + yyyy;
  console.log("datum:", datum);

  console.log ("Hora Conectado:", conectadoHora);
  console.log ("Data Conectado:", conectadoData);
  console.log("conectado:", conectado);

  let check_value = String(checkbox_antigo);
  console.log("check_value:", check_value);

  time_lapse =
    Math.round(
      10 * ((Math.round(Date.now()) - Ux_conectado) / 1000 / 60 / 60)
    ) / 10;
  console.log("time_lapse:", time_lapse);

  let average_Consuption_bar = Number(P_60min_He1 - PatualHe1);

  // 200 precisa ser substituido para o valor da varíavel P_He1_max - assim que ajustar os sensores
  average_Consuption_m3 = (
    24 * Number((average_Consuption_bar * volume_antigo) / (200 - AlarmeHe1))
  ).toFixed(2);

  previsao_de_troca = (volume_antigo / average_Consuption_m3).toFixed(1);

  console.log("average_Consuption_bar:", average_Consuption_bar);
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

  // gráfico comparativo consumo ontem Hélio e Nitrogênio
  const options = {
    responsive: true,
    height: "80%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Consumo Atual Hélio e Nitrogênio",
      },
    },
  };

  const labels = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Hélio Ontem",

        data: [
          PontemHe1_1AM,
          PontemHe1_2AM,
          PontemHe1_3AM,
          PontemHe1_4AM,
          PontemHe1_5AM,
          PontemHe1_6AM,
          PontemHe1_7AM,
          PontemHe1_8AM,
          PontemHe1_9AM,
          PontemHe1_10AM,
          PontemHe1_11AM,
          PontemHe1_12AM,
          PontemHe1_01PM,
          PontemHe1_02PM,
          PontemHe1_03PM,
          PontemHe1_04PM,
          PontemHe1_05PM,
          PontemHe1_06PM,
          PontemHe1_07PM,
          PontemHe1_08PM,
          PontemHe1_09PM,
          PontemHe1_10PM,
          PontemHe1_11PM,
          PontemHe1_12PM
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Hélio Hoje",
        data: [
          PhojeHe1_1AM,
          PhojeHe1_2AM,
          PhojeHe1_3AM,
          PhojeHe1_4AM,
          PhojeHe1_5AM,
          PhojeHe1_6AM,
          PhojeHe1_7AM,
          PhojeHe1_8AM,
          PhojeHe1_9AM,
          PhojeHe1_10AM,
          PhojeHe1_11AM,
          PhojeHe1_12AM,
          PhojeHe1_01PM,
          PhojeHe1_02PM,
          PhojeHe1_03PM,
          PhojeHe1_04PM,
          PhojeHe1_05PM,
          PhojeHe1_06PM,
          PhojeHe1_07PM,
          PhojeHe1_08PM,
          PhojeHe1_09PM,
          PhojeHe1_10PM,
          PhojeHe1_11PM,
          PhojeHe1_12PM
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },

      

      
    ],
  };

  const estadoBotao = () => {
    if (PRESSAO_ALARME_He1_gravado === PRESSAO_ALARME_He1) return;

    if (PRESSAO_ALARME_He1_gravado !== PRESSAO_ALARME_He1) {
      const newTEXTO = "SALVAR";
      setBotaoSave(newTEXTO);

      bs = botaoSave;

      // botaoSave.style.backgroundColor = '#00ff00';
    }

    console.log("botaoSave:", botaoSave);
  };

  return (
    <S.Container>
      <S.RightSide>

      </S.RightSide>



     

      <S.charts3>
        <Line options={options} data={data} />
      </S.charts3>
        


    </S.Container>
  );
}

export default ChartsManHe1;
