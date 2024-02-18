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

function AlarmeManHe1(
  {
    PhojeHe1_1AM,
   
    PhojeHe1_6AM,
    leak,
    leak_test,

    PatualHe1,
    time_measurement_He1,
    PatualN21,
    PatualARS1,
    PatualARG1,
    PontemHe1,
    PontemN21,
    PontemARS1,
    PontemARG1,
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
    average_Consuption_bar,
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
  const [valoresOntem_9AM, CilindrosOntem_9AM] = useState([0]); // useState dos valores de ontem as 9 horas
  const [valoresOntem_10AM, CilindrosOntem_10AM] = useState([0]); // useState dos valores de ontem as 10 horas
  const [valoresOntem_11AM, CilindrosOntem_11AM] = useState([0]); // useState dos valores de ontem as 11 horas
  const [valoresOntem_12AM, CilindrosOntem_12AM] = useState([0]); // useState dos valores de ontem as 12 horas
  const [valoresOntem_01PM, CilindrosOntem_01PM] = useState([0]); // useState dos valores de ontem as 13 horas
  const [valoresOntem_02PM, CilindrosOntem_02PM] = useState([0]); // useState dos valores de ontem as 14 horas
  const [valoresOntem_03PM, CilindrosOntem_03PM] = useState([0]); // useState dos valores de ontem as 15 horas
  const [valoresOntem_04PM, CilindrosOntem_04PM] = useState([0]); // useState dos valores de ontem as 16 horas
  const [valoresOntem_05PM, CilindrosOntem_05PM] = useState([0]); // useState dos valores de ontem as 17 horas


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

  async function getlast60min() {
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine")
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine')

    await api.get('https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine')
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
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem12am?deviceID=Aliine"
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

  average_Consuption_bar = Number(PatualHe1- P_60min_He1);

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

  leak = PhojeHe1_1AM-PhojeHe1_6AM;

  if (leak > 0.5) {
    leak_test = false
  } else {
    leak_test = true
  }

  

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
       
        
        


        <S.CAIXA_CONECTADO>
          <S.PressaoAtual>
            <TextField
              label="Pressão Atual :"
              variant="outlined"
              value={String(PatualHe1)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <h2>bar</h2>
                  </InputAdornment>
                ),
              }}
            />
          </S.PressaoAtual>

          <S.O_NOVO_Pressao_Alarme_Atual>
            <TextField
              id="label-alarme"
              type="number"
              label="Pressão de Alarme: "
              InputLabelProps={{ shrink: true }}
              placeholder={AlarmeHe1}
              inputProps={{
                type: "number",
                min: 1,
                max: PatualHe1,
                step: 0.25,
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
              color="success"
              onClick={() => alarme2(requestConfig, requestBody)}
            >
              <strong>salvar</strong>
            </Button>
            </S.ALARME_SAVE_BUTTON>
          
            <S.TROCAPREVISTA>
            <TextField
              label="Previsão de Troca : "
              variant="outlined"
              value={String(10.7)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <h2>dias</h2>
                  </InputAdornment>
                ),
              }}
            />
          </S.TROCAPREVISTA>



          <S.CONSUMOMEDIO>
            <TextField
              label="Consumo : "
              variant="outlined"
              value={average_Consuption_bar}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <h2>bar/hora</h2>
                  </InputAdornment>
                ),
              }}
            />
          </S.CONSUMOMEDIO>

          <S.CUSTOMEDIO>
            <TextField
              label="Custo por Hora: "
              variant="outlined"
              value={custoHora}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <h2>R$/hora</h2>
                  </InputAdornment>
                ),
              }}
            />
          </S.CUSTOMEDIO>

         

         

         
          <S.RESULTADO_ESTANQUEIDADE>
            <TextField
              label="Estanqueidade:"
              variant="outlined"
              value={leak}
              //InputProps={{
               // endAdornment: (
                 // <InputAdornment position="end">
                   // <h2>Okay</h2>
                  //</InputAdornment>
                //),
              //}}
            
            />
          </S.RESULTADO_ESTANQUEIDADE>


      <S.LeftSide>


      {(leak_test === true  ) ?
      (
        <S.Warning_1> <h1>ATENÇÃO : POTENCIAL VAZAMENTO OU USO DO GÁS FORA DO HORÁRIO COMERCIAL </h1></S.Warning_1> 
        ): ( 

        <S.Warning_2><h1> TESTE DE ESTANQUEIDADE FOI REALIZADO COM SUCESSO </h1></S.Warning_2>
        )}


</S.LeftSide>


         

         
        </S.CAIXA_CONECTADO>
      </S.RightSide>



     


    </S.Container>
  );
}

export default AlarmeManHe1;
