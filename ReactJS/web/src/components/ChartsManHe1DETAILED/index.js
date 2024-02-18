import React, { useState, useEffect } from "react";

import * as S from "./styles";
import api from "../../service/api";
import { Line } from "react-chartjs-2";

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

function ChartsManHe1DETAILED(
  {
    PatualHe1,
    time_measurement_He1,
    PatualN21,

    PontemHe1,

    temp_hoje_1AM,
    temp_hoje_2AM,
    temp_hoje_3AM,
    temp_hoje_4AM,
    temp_hoje_5AM,
    temp_hoje_6AM,
    temp_hoje_7AM,
    temp_hoje_8AM,
    temp_hoje_9AM,
    temp_hoje_10AM,
    temp_hoje_11AM,
    temp_hoje_12AM,
    temp_hoje_01PM,

    temp_hoje_01_06PM,
    temp_hoje_01_12PM,
    temp_hoje_01_18PM,
    temp_hoje_01_24PM,
    temp_hoje_01_30PM,
    temp_hoje_01_36PM,
    temp_hoje_01_42PM,
    temp_hoje_01_48PM,
    temp_hoje_01_54PM,

    temp_hoje_02PM,
    temp_hoje_03PM,
    temp_hoje_04PM,
    temp_hoje_05PM,
    temp_hoje_06PM,
    temp_hoje_07PM,
    temp_hoje_08PM,
    temp_hoje_09PM,
    temp_hoje_10PM,
    temp_hoje_11PM,
    temp_hoje_12PM,

    temp_ontem_1AM,
    temp_ontem_2AM,
    temp_ontem_3AM,
    temp_ontem_4AM,
    temp_ontem_5AM,
    temp_ontem_6AM,
    temp_ontem_7AM,
    temp_ontem_8AM,
    temp_ontem_9AM,
    temp_ontem_10AM,
    temp_ontem_11AM,
    temp_ontem_12AM,
    temp_ontem_01PM,
    temp_ontem_02PM,
    temp_ontem_03PM,
    temp_ontem_04PM,
    temp_ontem_05PM,
    temp_ontem_06PM,
    temp_ontem_07PM,
    temp_ontem_08PM,
    temp_ontem_09PM,
    temp_ontem_10PM,
    temp_ontem_11PM,
    temp_ontem_12PM,

  

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
    PhojeHe1_01_06PM,
    PhojeHe1_01_12PM,
    PhojeHe1_01_18PM,
    PhojeHe1_01_24PM,
    PhojeHe1_01_30PM,
    PhojeHe1_01_36PM,
    PhojeHe1_01_42PM,
    PhojeHe1_01_48PM,
    PhojeHe1_01_54PM,


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
    PontemHe1_12PM,

    EID,

    P_60min_He1,
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

  const [valoresOntem_01_06PM, CilindrosOntem_01_06PM] = useState([0]); 




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

  const [valoresHoje_1_06PM, CilindrosHoje_1_06PM] = useState([0]); 
  const [valoresHoje_1_12PM, CilindrosHoje_1_12PM] = useState([0]); 
  const [valoresHoje_1_18PM, CilindrosHoje_1_18PM] = useState([0]); 
  const [valoresHoje_1_24PM, CilindrosHoje_1_24PM] = useState([0]); 
  const [valoresHoje_1_30PM, CilindrosHoje_1_30PM] = useState([0]); 
  const [valoresHoje_1_36PM, CilindrosHoje_1_36PM] = useState([0]); 
  const [valoresHoje_1_42PM, CilindrosHoje_1_42PM] = useState([0]); 
  const [valoresHoje_1_48PM, CilindrosHoje_1_48PM] = useState([0]); 
  const [valoresHoje_1_54PM, CilindrosHoje_1_54PM] = useState([0]); 


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

  const [last60min, setlast60min] = useState([]);

  async function getlast60min() {
    //await api.get("https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine")
    await api
      .get(
       // "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine"
        'https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine'
      )
      .then((response) => {
        setlast60min(response.data);

        //  console.log("valores de 60 minutos:", last60min);
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

    //console.log("P_60min_He1:", P_60min_He1);
  }

  async function loadCilindrosNow() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine"
      )
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
  //let helioNow = PatualHe1;
  // let helioNowTime = time_measurement_He1;

  // let vEID = EID;

  // console.log("vEID:", EID);
  // final da função que faz a requisição dos valores atuais

 

  // início da função que faz a requisição dos valores de hoje as 1 horas da manhã
  async function loadCilindrosHoje_1AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine')

    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1AM(response.data);

        // console.log("valores Hoje 1 AM:", valoresHoje_1AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1AM();
  }, [PhojeHe1_1AM, temp_hoje_1AM ]);

  {
    valoresHoje_1AM.map((t) => (PhojeHe1_1AM = t.He));
  }

  {
    valoresHoje_1AM.map((t) => (temp_hoje_1AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 1 horas da manhã

  // input para gráfico de consumo - Hélio as 1 horas da manhã de hoje

  //let helio1AM_Hoje = PhojeHe1_1AM;
  //console.log("helio1AM_Hoje:", helio1AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 2 horas da manhã
  async function loadCilindrosHoje_2AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje2am?deviceID=Aliine')

    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje2am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_2AM(response.data);

        // console.log("valores Hoje 2 AM:", valoresHoje_2AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_2AM();
  }, [PhojeHe1_2AM , temp_hoje_2AM]);

  {
    valoresHoje_2AM.map((t) => (PhojeHe1_2AM = t.He));
  }

  {
    valoresHoje_2AM.map((t) => (temp_hoje_2AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 2 horas da manhã

  // input para gráfico de consumo - Hélio as 2 horas da manhã de hoje

  // let helio2AM_Hoje = PhojeHe1_2AM;
  //console.log("helio2AM_Hoje:", helio2AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 3 horas da manhã
  async function loadCilindrosHoje_3AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje3am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje3am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_3AM(response.data);

        // console.log("valores Hoje 3 AM:", valoresHoje_3AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_3AM();
  }, [PhojeHe1_3AM, temp_hoje_3AM]);

  {
    valoresHoje_3AM.map((t) => (PhojeHe1_3AM = t.He));
  }

  {
    valoresHoje_3AM.map((t) => (temp_hoje_3AM = t.temp));
  }




  // final da função que faz a requisição dos valores de hoje as 3 horas da manhã

  // input para gráfico de consumo - Hélio as 3 horas da manhã de hoje

  //let helio3AM_Hoje = PhojeHe1_3AM;
  //console.log("helio3AM_Hoje:", helio3AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 4 horas da manhã
  async function loadCilindrosHoje_4AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje4am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje4am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_4AM(response.data);

        //console.log("valores Hoje 4 AM:", valoresHoje_4AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_4AM();
  }, [PhojeHe1_4AM, temp_hoje_4AM]);

  {
    valoresHoje_4AM.map((t) => (PhojeHe1_4AM = t.He));
  }

  {
    valoresHoje_4AM.map((t) => (temp_hoje_4AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 4 horas da manhã

  // input para gráfico de consumo - Hélio as 4 horas da manhã de hoje

  //let helio4AM_Hoje = PhojeHe1_4AM;
  //console.log("helio4AM_Hoje:", helio4AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 5 horas da manhã
  async function loadCilindrosHoje_5AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje5am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje5am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_5AM(response.data);

        //console.log("valores Hoje 5 AM:", valoresHoje_5AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_5AM();
  }, [PhojeHe1_05PM, temp_hoje_5AM]);

  {
    valoresHoje_5AM.map((t) => (PhojeHe1_5AM = t.He));
  }

  {
    valoresHoje_5AM.map((t) => (temp_hoje_5AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 5 horas da manhã

  // input para gráfico de consumo - Hélio as 5 horas da manhã de hoje

  //et helio5AM_Hoje = PhojeHe1_5AM;
  //console.log("helio5AM_Hoje:", helio5AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 6 horas da manhã
  async function loadCilindrosHoje_6AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine"
      )

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
  }, [PhojeHe1_06PM, temp_hoje_6AM]);

  {
    valoresHoje_6AM.map((t) => (PhojeHe1_6AM = t.He));
  }

  {
    valoresHoje_6AM.map((t) => (temp_hoje_6AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 6 horas da manhã

  // input para gráfico de consumo - Hélio as 6 horas da manhã de hoje

  //let helio6AM_Hoje = PhojeHe1_6AM;
  //console.log("helio6AM_Hoje:", helio6AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 7 horas da manhã
  async function loadCilindrosHoje_7AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje7am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje7am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_7AM(response.data);

        // console.log("valores Hoje 7 AM:", valoresHoje_7AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_7AM();
  }, [PhojeHe1_07PM, temp_hoje_7AM]);

  {
    valoresHoje_7AM.map((t) => (PhojeHe1_7AM = t.He));
  }

  {
    valoresHoje_7AM.map((t) => (temp_hoje_7AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 7 horas da manhã

  // input para gráfico de consumo - Hélio as 7 horas da manhã de hoje

  //let helio7AM_Hoje = PhojeHe1_7AM;
  //console.log("helio7AM_Hoje:", helio7AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 8 horas da manhã
  async function loadCilindrosHoje_8AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje8am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje8am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_8AM(response.data);

        // console.log("valores Hoje 8 AM:", valoresHoje_8AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_8AM();
  }, [PhojeHe1_8AM, temp_hoje_8AM]);

  {
    valoresHoje_8AM.map((t) => (PhojeHe1_8AM = t.He));
  }

  {
    valoresHoje_8AM.map((t) => (temp_hoje_8AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 8 horas da manhã

  // input para gráfico de consumo - Hélio as 8 horas da manhã de hoje

  //let helio8AM_Hoje = PhojeHe1_8AM;
  //console.log("helio8AM_Hoje:", helio8AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 9 horas da manhã
  async function loadCilindrosHoje_9AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje9am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje9am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_9AM(response.data);

        //console.log("valores Hoje 9 AM:", valoresHoje_9AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_9AM();
  }, [PhojeHe1_9AM, temp_hoje_9AM]);

  {
    valoresHoje_9AM.map((t) => (PhojeHe1_9AM = t.He));
  }

  {
    valoresHoje_9AM.map((t) => (temp_hoje_9AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 9 horas da manhã

  // input para gráfico de consumo - Hélio as 9 horas da manhã de hoje

  //let helio9AM_Hoje = PhojeHe1_9AM;
  //console.log("helio9AM_Hoje:", helio9AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 10 horas da manhã
  async function loadCilindrosHoje_10AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje10am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje10am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_10AM(response.data);

        //console.log("valores Hoje 10 AM:", valoresHoje_10AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_10AM();
  }, [PhojeHe1_10AM, temp_hoje_10AM]);

  {
    valoresHoje_10AM.map((t) => (PhojeHe1_10AM = t.He));
  }

  {
    valoresHoje_10AM.map((t) => (temp_hoje_10AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 10 horas da manhã

  // input para gráfico de consumo - Hélio as 10 horas da manhã de hoje

  //let helio10AM_Hoje = PhojeHe1_10AM;
  //console.log("helio10AM_Hoje:", helio10AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 11 horas da manhã
  async function loadCilindrosHoje_11AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje11am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje11am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_11AM(response.data);

        //console.log("valores Hoje 11 AM:", valoresHoje_11AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_11AM();
  }, [PhojeHe1_11AM, temp_hoje_11AM]);

  {
    valoresHoje_11AM.map((t) => (PhojeHe1_11AM = t.He));
  }

  {
    valoresHoje_11AM.map((t) => (temp_hoje_11AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 11 horas da manhã

  // input para gráfico de consumo - Hélio as 11 horas da manhã de hoje

  //let helio11AM_Hoje = PhojeHe1_11AM;
  // console.log("helio11AM_Hoje:", helio11AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 12 horas da manhã
  async function loadCilindrosHoje_12AM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje12am?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje12am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_12AM(response.data);

        // console.log("valores Hoje 12 AM:", valoresHoje_12AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_12AM();
  }, [PhojeHe1_12AM, temp_hoje_12AM]);

  {
    valoresHoje_12AM.map((t) => (PhojeHe1_12AM = t.He));
  }

  {
    valoresHoje_12AM.map((t) => (temp_hoje_12AM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 12 horas da manhã

  // input para gráfico de consumo - Hélio as 12 horas da manhã de hoje

  //let helio12AM_Hoje = PhojeHe1_12AM;
  //console.log("helio12AM_Hoje:", helio12AM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 13 horas
  async function loadCilindrosHoje_1PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje01pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje01pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1PM(response.data);

        //console.log("valores Hoje 01 PM:", valoresHoje_1PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1PM();
  }, [PhojeHe1_01PM, temp_hoje_01PM]);

  {
    valoresHoje_1PM.map((t) => (PhojeHe1_01PM = t.He));
  }

  {
    valoresHoje_1PM.map((t) => (temp_hoje_01PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 13 horas da tarde

  // input para gráfico de consumo - Hélio as 13 horas da tarde de hoje

  //let helio01PM_Hoje = PhojeHe1_01PM;
  //console.log("helio01PM_Hoje:", helio01PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
  async function loadCilindrosHoje_1_06PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_06pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_06PM(response.data);

        console.log("valores Hoje 01 06 PM:", valoresHoje_1_06PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_06PM();
  }, [PhojeHe1_01_06PM, temp_hoje_01_06PM]);

  {
    valoresHoje_1_06PM.map((t) => (PhojeHe1_01_06PM = t.He));
  }

  {
    valoresHoje_1_06PM.map((t) => (temp_hoje_01_06PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  async function loadCilindrosHoje_1_12PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_12pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_12PM(response.data);

        console.log("valores Hoje 01 12 PM:", valoresHoje_1_12PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_12PM();
  }, [PhojeHe1_01_12PM, temp_hoje_01_12PM]);

  {
    valoresHoje_1_12PM.map((t) => (PhojeHe1_01_12PM = t.He));
  }

  {
    valoresHoje_1_12PM.map((t) => (temp_hoje_01_12PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  async function loadCilindrosHoje_1_18PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_18pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_18PM(response.data);

        console.log("valores Hoje 01 18 PM:", valoresHoje_1_18PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_18PM();
  }, [PhojeHe1_01_18PM, temp_hoje_01_18PM]);

  {
    valoresHoje_1_18PM.map((t) => (PhojeHe1_01_18PM = t.He));
  }

  {
    valoresHoje_1_18PM.map((t) => (temp_hoje_01_18PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  async function loadCilindrosHoje_1_24PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_24pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_24PM(response.data);

        console.log("valores Hoje 01 24 PM:", valoresHoje_1_24PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_24PM();
  }, [PhojeHe1_01_24PM, temp_hoje_01_24PM]);

  {
    valoresHoje_1_24PM.map((t) => (PhojeHe1_01_24PM = t.He));
  }

  {
    valoresHoje_1_24PM.map((t) => (temp_hoje_01_24PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  async function loadCilindrosHoje_1_30PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_30pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_30PM(response.data);

        console.log("valores Hoje 01 30 PM:", valoresHoje_1_30PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_30PM();
  }, [PhojeHe1_01_30PM, temp_hoje_01_30PM]);

  {
    valoresHoje_1_30PM.map((t) => (PhojeHe1_01_30PM = t.He));
  }

  {
    valoresHoje_1_30PM.map((t) => (temp_hoje_01_30PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  async function loadCilindrosHoje_1_36PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_36pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_36PM(response.data);

        console.log("valores Hoje 01 36 PM:", valoresHoje_1_36PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_36PM();
  }, [PhojeHe1_01_36PM, temp_hoje_01_36PM]);

  {
    valoresHoje_1_36PM.map((t) => (PhojeHe1_01_36PM = t.He));
  }

  {
    valoresHoje_1_36PM.map((t) => (temp_hoje_01_36PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  async function loadCilindrosHoje_1_42PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_42pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_42PM(response.data);

        console.log("valores Hoje 01 42 PM:", valoresHoje_1_42PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_42PM();
  }, [PhojeHe1_01_42PM, temp_hoje_01_42PM]);

  {
    valoresHoje_1_42PM.map((t) => (PhojeHe1_01_42PM = t.He));
  }

  {
    valoresHoje_1_42PM.map((t) => (temp_hoje_01_42PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  async function loadCilindrosHoje_1_48PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_48pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_48PM(response.data);

        console.log("valores Hoje 01 48 PM:", valoresHoje_1_48PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_48PM();
  }, [PhojeHe1_01_48PM, temp_hoje_01_48PM]);

  {
    valoresHoje_1_48PM.map((t) => (PhojeHe1_01_48PM = t.He));
  }

  {
    valoresHoje_1_48PM.map((t) => (temp_hoje_01_48PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  async function loadCilindrosHoje_1_54PM() {
  
    await api
      .get(
        "https://966lussqv2.execute-api.sa-east-1.amazonaws.com/prod/hoje01_54pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_1_54PM(response.data);

        console.log("valores Hoje 01 54 PM:", valoresHoje_1_54PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1_54PM();
  }, [PhojeHe1_01_54PM, temp_hoje_01_54PM]);

  {
    valoresHoje_1_54PM.map((t) => (PhojeHe1_01_54PM = t.He));
  }

  {
    valoresHoje_1_54PM.map((t) => (temp_hoje_01_54PM = t.temp));
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
  // início da função que faz a requisição dos valores de hoje as 14 horas
  async function loadCilindrosHoje_2PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje02pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje02pm?deviceID=Aliine"
      )

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
  }, [PhojeHe1_02PM, temp_hoje_02PM]);

  {
    valoresHoje_2PM.map((t) => (PhojeHe1_02PM = t.He));
  }

  {
    valoresHoje_2PM.map((t) => (temp_hoje_02PM = t.temp));
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
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje03pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_3PM(response.data);

        //console.log("valores Hoje 03 PM:", valoresHoje_3PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_3PM();
  }, [PhojeHe1_03PM, temp_hoje_03PM]);

  {
    valoresHoje_3PM.map((t) => (PhojeHe1_03PM = t.He));
  }
  {
    valoresHoje_3PM.map((t) => (temp_hoje_03PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 15 horas da tarde

  // input para gráfico de consumo - Hélio as 15 horas da tarde de hoje

  //let helio03PM_Hoje = PhojeHe1_03PM;
  // console.log("helio03PM_Hoje:", helio03PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 14 horas
  async function loadCilindrosHoje_4PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje04pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje04pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_4PM(response.data);

        //console.log("valores Hoje 04 PM:", valoresHoje_4PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_4PM();
  }, [PhojeHe1_04PM, temp_hoje_04PM]);

  {
    valoresHoje_4PM.map((t) => (PhojeHe1_04PM = t.He));
  }

  {
    valoresHoje_4PM.map((t) => (temp_hoje_04PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 16 horas da tarde

  // input para gráfico de consumo - Hélio as 16 horas da tarde de hoje

  //let helio04PM_Hoje = PhojeHe1_04PM;
  //console.log("helio04PM_Hoje:", helio04PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 17 horas
  async function loadCilindrosHoje_5PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje05pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje05pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_5PM(response.data);

        //console.log("valores Hoje 05 PM:", valoresHoje_5PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_5PM();
  }, [PhojeHe1_05PM, temp_hoje_05PM]);

  {
    valoresHoje_5PM.map((t) => (PhojeHe1_05PM = t.He));
  }
  {
    valoresHoje_5PM.map((t) => (temp_hoje_05PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 17 horas da tarde

  // input para gráfico de consumo - Hélio as 17 horas da tarde de hoje

  //let helio05PM_Hoje = PhojeHe1_05PM;
  //console.log("helio05PM_Hoje:", helio05PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 18 horas
  async function loadCilindrosHoje_6PM() {
    // await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje06pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje06pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_6PM(response.data);

        //  console.log("valores Hoje 06 PM:", valoresHoje_6PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_6PM();
  }, [PhojeHe1_06PM, temp_hoje_06PM]);

  {
    valoresHoje_6PM.map((t) => (PhojeHe1_06PM = t.He));
  }

  {
    valoresHoje_6PM.map((t) => (temp_hoje_06PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 18 horas da tarde

  // input para gráfico de consumo - Hélio as 18 horas da tarde de hoje

  //let helio06PM_Hoje = PhojeHe1_06PM;
  // console.log("helio06PM_Hoje:", helio06PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 19 horas
  async function loadCilindrosHoje_7PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje07pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje07pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_7PM(response.data);

        // console.log("valores Hoje 07 PM:", valoresHoje_7PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_7PM();
  }, [PhojeHe1_07PM, temp_hoje_07PM]);

  {
    valoresHoje_7PM.map((t) => (PhojeHe1_07PM = t.He));
  }
  {
    valoresHoje_7PM.map((t) => (temp_hoje_07PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 19 horas da tarde

  // input para gráfico de consumo - Hélio as 19 horas da tarde de hoje

  //let helio07PM_Hoje = PhojeHe1_07PM;
  // console.log("helio07PM_Hoje:", helio07PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 20 horas
  async function loadCilindrosHoje_8PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje08pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje08pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_8PM(response.data);

        //  console.log("valores Hoje 08 PM:", valoresHoje_8PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_8PM();
  }, [PhojeHe1_08PM, temp_hoje_08PM]);

  {
    valoresHoje_8PM.map((t) => (PhojeHe1_08PM = t.He));
  }

  {
    valoresHoje_8PM.map((t) => (temp_hoje_08PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 18 horas da tarde

  // input para gráfico de consumo - Hélio as 18 horas da tarde de hoje

  //let helio08PM_Hoje = PhojeHe1_08PM;
  //console.log("helio08PM_Hoje:", helio08PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 21 horas
  async function loadCilindrosHoje_9PM() {
    // await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje09pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje09pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_9PM(response.data);

        //console.log("valores Hoje 09 PM:", valoresHoje_9PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_9PM();
  }, [PhojeHe1_09PM, temp_hoje_09PM]);

  {
    valoresHoje_9PM.map((t) => (PhojeHe1_09PM = t.He));
  }

  {
    valoresHoje_9PM.map((t) => (temp_hoje_09PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 21 horas da tarde

  // input para gráfico de consumo - Hélio as 21 horas da tarde de hoje

  //let helio09PM_Hoje = PhojeHe1_09PM;
  //console.log("helio09PM_Hoje:", helio09PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 22 horas
  async function loadCilindrosHoje_10PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje10pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje10pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_10PM(response.data);

        //console.log("valores Hoje 10 PM:", valoresHoje_10PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_10PM();
  }, [PhojeHe1_10PM, temp_hoje_10PM]);

  {
    valoresHoje_10PM.map((t) => (PhojeHe1_10PM = t.He));
  }


  {
    valoresHoje_10PM.map((t) => (temp_hoje_10PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 22 horas da tarde

  // input para gráfico de consumo - Hélio as 22 horas da tarde de hoje

  //let helio10PM_Hoje = PhojeHe1_10PM;
  //console.log("helio10PM_Hoje:", helio10PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 23 horas
  async function loadCilindrosHoje_11PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje11pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje11pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_11PM(response.data);

        // console.log("valores Hoje 11 PM:", valoresHoje_11PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_11PM();
  }, [PhojeHe1_11PM, temp_hoje_11PM]);

  {
    valoresHoje_11PM.map((t) => (PhojeHe1_11PM = t.He));
  }

  {
    valoresHoje_11PM.map((t) => (temp_hoje_11PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 23 horas da tarde

  // input para gráfico de consumo - Hélio as 23 horas da tarde de hoje

  //let helio11PM_Hoje = PhojeHe1_11PM;
  //console.log("helio11PM_Hoje:", helio11PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de hoje as 24 horas
  async function loadCilindrosHoje_12PM() {
    //await api.get('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/hoje12pm?deviceID=Aliine')
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje12pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosHoje_12PM(response.data);

        //console.log("valores Hoje 12 PM:", valoresHoje_12PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_12PM();
  }, [PhojeHe1_12PM, temp_hoje_12PM]);

  {
    valoresHoje_12PM.map((t) => (PhojeHe1_12PM = t.He));
  }

  {
    valoresHoje_12PM.map((t) => (temp_hoje_12PM = t.temp));
  }

  // final da função que faz a requisição dos valores de hoje as 24 horas da tarde

  // input para gráfico de consumo - Hélio as 24 horas da tarde de hoje

  let helio12PM_Hoje = PhojeHe1_12PM;
  //console.log("helio12PM_Hoje: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", helio12PM_Hoje);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 1 horas da manhã
  async function loadCilindrosOntem_1AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem1am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_1AM(response.data);

        // console.log("valores Ontem 1 AM:", valoresOntem_1AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_1AM();
  }, [PontemHe1_1AM, temp_ontem_1AM]);

  {
    valoresOntem_1AM.map((t) => (PontemHe1_1AM = t.He));
  }

  {

    valoresOntem_1AM.map((t) => (temp_ontem_1AM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 1 horas da manhã

  // input para gráfico de consumo - Hélio as 1 horas da manhã de ontem

  //let helio1AM_Ontem = PontemHe1_1AM;
  //console.log("helio1AM_Ontem:", helio1AM_Ontem);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 2 horas da manhã
  async function loadCilindrosOntem_2AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem2am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_2AM(response.data);

        //console.log("valores Ontem 2 AM:", valoresOntem_2AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_2AM();
  }, [PontemHe1_2AM, temp_ontem_2AM]);

  {
    valoresOntem_2AM.map((t) => (PontemHe1_2AM = t.He));
  }


  {

    valoresOntem_2AM.map((t) => (temp_ontem_2AM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 2 horas da manhã

  // input para gráfico de consumo - Hélio as 2 horas da manhã de ontem

  //let helio2AM_Ontem = PontemHe1_2AM;
  //console.log("helio2AM_Ontem:", helio2AM_Ontem);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 3 horas da manhã
  async function loadCilindrosOntem_3AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem3am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_3AM(response.data);

        //console.log("valores Ontem 3 AM:", valoresOntem_3AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_3AM();
  }, [PontemHe1_3AM, temp_ontem_3AM]);

  {
    valoresOntem_3AM.map((t) => (PontemHe1_3AM = t.He));
  }

  {

    valoresOntem_3AM.map((t) => (temp_ontem_3AM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 3 horas da manhã

  // input para gráfico de consumo - Hélio as 3 horas da manhã de ontem

  //let helio3AM_Ontem = PontemHe1_3AM;
  //console.log("helio3AM_Ontem:", helio3AM_Ontem);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 4 horas da manhã
  async function loadCilindrosOntem_4AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem4am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_4AM(response.data);

        //console.log("valores Ontem 4 AM:", valoresOntem_4AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_4AM();
  }, [PontemHe1_4AM, temp_ontem_4AM]);

  {
    valoresOntem_4AM.map((t) => (PontemHe1_4AM = t.He));
  }

  {

    valoresOntem_4AM.map((t) => (temp_ontem_4AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 4 horas da manhã

  // input para gráfico de consumo - Hélio as 4 horas da manhã de ontem

  //let helio4AM_Ontem = PontemHe1_4AM;
  //console.log("helio4AM_Ontem:", helio4AM_Ontem);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 5 horas da manhã
  async function loadCilindrosOntem_5AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem5am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_5AM(response.data);

        //console.log("valores Ontem 5 AM:", valoresOntem_5AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_5AM();
  }, [PontemHe1_5AM, temp_ontem_5AM]);

  {
    valoresOntem_5AM.map((t) => (PontemHe1_5AM = t.He));
  }

  {

    valoresOntem_5AM.map((t) => (temp_ontem_5AM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 5 horas da manhã

  // input para gráfico de consumo - Hélio as 5 horas da manhã de ontem

  //let helio5AM_Ontem = PontemHe1_5AM;
  //console.log("helio5AM_Ontem:", helio5AM_Ontem);

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // início da função que faz a requisição dos valores de ontem as 6 horas da manhã
  async function loadCilindrosOntem_6AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem6am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_6AM(response.data);

        //console.log("valores Ontem 6 AM:", valoresOntem_6AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_6AM();
  }, [PontemHe1_6AM, temp_ontem_6AM]);

  {
    valoresOntem_6AM.map((t) => (PontemHe1_6AM = t.He));
  }

  {

    valoresOntem_6AM.map((t) => (temp_ontem_6AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 6 horas da manhã

  // input para gráfico de consumo - Hélio as 6 horas da manhã de ontem

  //let helio6AM_Ontem = PontemHe1_6AM;
  //console.log("helio6AM_Ontem:", helio6AM_Ontem);

  // início da função que faz a requisição dos valores de ontem as 7 horas da manhã
  async function loadCilindrosOntem_7AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem7am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_7AM(response.data);

        //console.log("valores Ontem 7 AM:", valoresOntem_7AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_7AM();
  }, [PontemHe1_7AM, temp_ontem_7AM]);

  {
    valoresOntem_7AM.map((t) => (PontemHe1_7AM = t.He));
  }

  {

    valoresOntem_7AM.map((t) => (temp_ontem_7AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 7 horas da manhã

  // input para gráfico de consumo - Hélio as 7 horas da manhã de ontem

  //let helio7AM_Ontem = PontemHe1_7AM;
  //console.log("helio7AM_Ontem :", helio7AM_Ontem);

  // início da função que faz a requisição dos valores de ontem as 8 horas da manhã
  async function loadCilindrosOntem_8AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem8am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_8AM(response.data);

        //console.log("valores Ontem 8 AM:", valoresOntem_8AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_8AM();
  }, [PontemHe1_8AM, temp_ontem_8AM]);

  {
    valoresOntem_8AM.map((t) => (PontemHe1_8AM = t.He));
  }

  {

    valoresOntem_8AM.map((t) => (temp_ontem_8AM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 9 horas da manhã

  // input para gráfico de consumo - Hélio as 9 horas da manhã de ontem

  //let helio8AM_Ontem = PontemHe1_8AM;
  // console.log("helio8AM_Ontem:", helio8AM_Ontem);

  // início da função que faz a requisição dos valores de ontem as 9 horas da manhã
  async function loadCilindrosOntem_9AM() {
    //await api
    // .get(
    //   "https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/ontem9am?deviceID=Aliine"
    // )

    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem9am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_9AM(response.data);

        //console.log("valores Ontem 9 AM:", valoresOntem_9AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_9AM();
  }, [PontemHe1_9AM, temp_ontem_9AM]);

  {
    valoresOntem_9AM.map((t) => (PontemHe1_9AM = t.He));
  }

  {

    valoresOntem_9AM.map((t) => (temp_ontem_9AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 9 horas da manhã

  // input para gráfico de consumo - Hélio as 9 horas da manhã de ontem

  //let helio9AM_Ontem = PontemHe1_9AM;
  //console.log("helio9AM_Ontem:", helio9AM_Ontem);

  // início da função que faz a requisição dos valores de ontem as 10 horas da manhã
  async function loadCilindrosOntem_10AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem10am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_10AM(response.data);

        //  console.log("valores Ontem 10 AM:", valoresOntem_10AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_10AM();
  }, [PontemHe1_10AM, temp_ontem_10AM]);

  {
    valoresOntem_10AM.map((t) => (PontemHe1_10AM = t.He));
  }

  {

    valoresOntem_10AM.map((t) => (temp_ontem_10AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 10 horas da manhã

  // input para gráfico de consumo - Hélio as 10 horas da manhã de ontem

  //let helio10AM_Ontem = PontemHe1_10AM;

  // início da função que faz a requisição dos valores de ontem as 11 horas da manhã
  async function loadCilindrosOntem_11AM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem11am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_11AM(response.data);

        // console.log("valores Ontem 11 AM:", valoresOntem_11AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_11AM();
  }, [PontemHe1_11AM, temp_ontem_11AM]);

  {
    valoresOntem_11AM.map((t) => (PontemHe1_11AM = t.He));
  }

  {

    valoresOntem_11AM.map((t) => (temp_ontem_11AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 11 horas da manhã

  // input para gráfico de consumo - Hélio as 11 horas da manhã de ontem

  //let helio11AM_Ontem = PontemHe1_11AM;

  // início da função que faz a requisição dos valores de ontem as 12 horas da manhã
  async function loadCilindrosOntem_12AM() {
    await api
      .get(
        //"https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem12am?deviceID=Aliine"
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/ontem12am?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_12AM(response.data);

        //console.log("valores Ontem 12 AM:", valoresOntem_12AM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_12AM();
  }, [PontemHe1_12AM, temp_ontem_12AM]);

  {
    valoresOntem_12AM.map((t) => (PontemHe1_12AM = t.He));
  }

  {

    valoresOntem_12AM.map((t) => (temp_ontem_12AM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 11 horas da manhã

  // input para gráfico de consumo - Hélio as 11 horas da manhã de ontem

  //let helio12AM_Ontem = PontemHe1_12AM;

  // início da função que faz a requisição dos valores de ontem as 13 horas da tarde
  async function loadCilindrosOntem_01PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem1pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_01PM(response.data);

        //console.log("valores Ontem 01 PM:", valoresOntem_01PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_01PM();
  }, [PontemHe1_01PM, temp_ontem_01PM ]);

  {
    valoresOntem_01PM.map((t) => (PontemHe1_01PM = t.He));
  }

  {

    valoresOntem_01PM.map((t) => (temp_ontem_01PM = t.temp)); 
  }


  // final da função que faz a requisição dos valores de ontem as 13 horas da tarde

  // input para gráfico de consumo - Hélio as 13 horas da tarde de ontem

  //let helio01PM_Ontem = PontemHe1_01PM;

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  // início da função que faz a requisição dos valores de ontem as 02 hora da tarde
  async function loadCilindrosOntem_02PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem2pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_02PM(response.data);

        // console.log("valores Ontem 02 PM:", valoresOntem_02PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_02PM();
  }, [PontemHe1_02PM, temp_ontem_02PM]);

  {
    valoresOntem_02PM.map((t) => (PontemHe1_02PM = t.He));
  }

  {

    valoresOntem_02PM.map((t) => (temp_ontem_02PM = t.temp)); 
  }
  // final da função que faz a requisição dos valores de ontem as 11 horas da mtarde

  // input para gráfico de consumo - Hélio as 14 horas da tarde ontem

  //let helio02PM_Ontem = PontemHe1_02PM;

  // início da função que faz a requisição dos valores de ontem as 03 horas da tarde
  async function loadCilindrosOntem_03PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem3pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_03PM(response.data);

        //console.log("valores Ontem 03 PM:", valoresOntem_03PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_03PM();
  }, [PontemHe1_03PM, temp_ontem_03PM]);

  {
    valoresOntem_03PM.map((t) => (PontemHe1_03PM = t.He));
  }

  {

    valoresOntem_03PM.map((t) => (temp_ontem_03PM = t.temp)); 
  }
 


  // final da função que faz a requisição dos valores de ontem as 15 horas da tarde

  // input para gráfico de consumo - Hélio as 03 horas da tarde de ontem

  //let helio03PM_Ontem = PontemHe1_03PM;

  // início da função que faz a requisição dos valores de ontem as 04 horas da tarde
  async function loadCilindrosOntem_04PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem4pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_04PM(response.data);

        //console.log("valores Ontem 04 PM:", valoresOntem_04PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_04PM();
  }, [PontemHe1_04PM, temp_ontem_04PM]);

  {
    valoresOntem_04PM.map((t) => (PontemHe1_04PM = t.He));
  }


  {

    valoresOntem_04PM.map((t) => (temp_ontem_04PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 16 horas da tarde

  // input para gráfico de consumo - Hélio as 16 horas da tarde de ontem

  //let helio04PM_Ontem = PontemHe1_04PM;

  // início da função que faz a requisição dos valores de ontem as 05 hora da tarde
  async function loadCilindrosOntem_05PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem5pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_05PM(response.data);

        //console.log("valores Ontem 05 PM:", valoresOntem_05PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_05PM();
  }, [PontemHe1_05PM, temp_ontem_05PM]);

  {
    valoresOntem_05PM.map((t) => (PontemHe1_05PM = t.He));
  }


  {

    valoresOntem_05PM.map((t) => (temp_ontem_05PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 17 horas da tarde

  // input para gráfico de consumo - Hélio as 17 horas da tarde de ontem

  //let helio05PM_Ontem = PontemHe1_05PM;

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // início da função que faz a requisição dos valores de ontem as 06 horas da tarde
  async function loadCilindrosOntem_06PM() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/ontem6pm?deviceID=Aliine"
      )

      .then((response) => {
        CilindrosOntem_06PM(response.data);

        // console.log("valores Ontem 06 PM:", valoresOntem_06PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_06PM();
  }, [PontemHe1_06PM, temp_ontem_06PM]);

  {
    valoresOntem_06PM.map((t) => (PontemHe1_06PM = t.He));
  }


  {

    valoresOntem_06PM.map((t) => (temp_ontem_06PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 18 horas da tarde

  // input para gráfico de consumo - Hélio as 18 horas da tarde de ontem

  //let helio06PM_Ontem = PontemHe1_06PM;

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

        //console.log("valores Ontem 07 PM:", valoresOntem_07PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_07PM();
  }, [PontemHe1_07PM, temp_ontem_07PM]);

  {
    valoresOntem_07PM.map((t) => (PontemHe1_07PM = t.He));
  }


  {

    valoresOntem_07PM.map((t) => (temp_ontem_07PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 19 horas da tarde

  // input para gráfico de consumo - Hélio as 19 horas da tarde de ontem

  //let helio07PM_Ontem = PontemHe1_07PM;

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

        //console.log("valores Ontem 08 PM:", valoresOntem_08PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_08PM();
  }, [PontemHe1_08PM, temp_ontem_08PM]);

  {
    valoresOntem_08PM.map((t) => (PontemHe1_08PM = t.He));
  }


  {

    valoresOntem_08PM.map((t) => (temp_ontem_08PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 20 horas da tarde

  // input para gráfico de consumo - Hélio as 20 horas da tarde de ontem

  //let helio08PM_Ontem = PontemHe1_08PM;

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

        //console.log("valores Ontem 09 PM:", valoresOntem_09PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_09PM();
  }, [PontemHe1_09PM, temp_ontem_09PM]);

  {
    valoresOntem_09PM.map((t) => (PontemHe1_09PM = t.He));
  }


  {

    valoresOntem_09PM.map((t) => (temp_ontem_09PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 21 horas da tarde

  // input para gráfico de consumo - Hélio as 21 horas da tarde de ontem

  //let helio09PM_Ontem = PontemHe1_09PM;

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

        //console.log("valores Ontem 10 PM:", valoresOntem_10PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_10PM();
  }, [PontemHe1_10PM, temp_ontem_10PM]);

  {
    valoresOntem_10PM.map((t) => (PontemHe1_10PM = t.He));
  }


  {

    valoresOntem_10PM.map((t) => (temp_ontem_10PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 22 horas da tarde

  // input para gráfico de consumo - Hélio as 22 horas da tarde de ontem

  //let helio10PM_Ontem = PontemHe1_10PM;

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

        //console.log("valores Ontem 11 PM:", valoresOntem_11PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_11PM();
  }, [PontemHe1_11PM, temp_ontem_11PM]);

  {
    valoresOntem_11PM.map((t) => (PontemHe1_11PM = t.He));
  }


  {

    valoresOntem_11PM.map((t) => (temp_ontem_11PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 23 horas da tarde

  // input para gráfico de consumo - Hélio as 23 horas da tarde de ontem

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

        //console.log("valores Ontem 12 PM:", valoresOntem_12PM);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosOntem_12PM();
  }, [PontemHe1_12PM, temp_ontem_12PM]);

  {
    valoresOntem_12PM.map((t) => (PontemHe1_12PM = t.He));
  }


  {

    valoresOntem_12PM.map((t) => (temp_ontem_12PM = t.temp)); 
  }

  // final da função que faz a requisição dos valores de ontem as 24 horas da tarde

  // input para gráfico de consumo - Hélio as 24 horas da tarde de ontem

  // final da função que faz a requisição dos valores de ontem as 24 horas da tarde
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // rotina para teste de estanqueidade

  // gráfico comparativo consumo ontem Hélio e Nitrogênio
  const options_press = {
    tension: 0.5,
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    height: "80%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Manômetro de Alta Pressão Hélio (bar) - Ontem x Hoje",
      },
      scales: {
       
        y: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
          x: {
            type: 'time',
            display: true,
            position: 'bottom',
            TickOptions: {
              autoSkip: true,
              maxTicksLimit:24,
            }
          },
    },
  },
};


  const options_temp = {
    tension: 0.5,
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    height: "80%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperatura Local (Celsius) - Ontem x Hoje",
      },
      scales: {
       
        y: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
         
     
      },
    },
  },
};

  const labels0 = [
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

  /*
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "1306",
    "1312",
    "1318",
    "1324",
    "1330",
    "1336",
    "1342",
    "1348",
    "1354",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
*/

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];

  const data_pressure = {
    labels,
    datasets: [
      {
        label: "Manômetro Hélio Ontem",

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
          PontemHe1_12PM,
        ],
       //backgroundColor: "rgba(255, 99, 132, 0.2)",
        //borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(179, 206, 229, 0.2)",
        borderColor: "rgba(179, 206, 229, 1)",
        borderDash: [10, 5],
        yAxisID: 'y',

      },
      {
        label: "Manômetro Hélio Hoje",
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
          PhojeHe1_12PM,
        ],
        //backgroundColor: "rgba(54, 162, 235, 0.2)",
        //borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(25, 25, 112, 0.2)",
        borderColor: "rgba(25, 25, 112, 1)",
        yAxisID: 'y',
        pointRadius: '0'

      },
      /*
      {
        label: "Manômetro Hélio Hoje",
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
          PhojeHe1_01_06PM,
          PhojeHe1_01_12PM,
          PhojeHe1_01_18PM,
          PhojeHe1_01_24PM,
          PhojeHe1_01_30PM,
          PhojeHe1_01_36PM,
          PhojeHe1_01_42PM,
          PhojeHe1_01_48PM,
          PhojeHe1_01_54PM,
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
        ],
        //backgroundColor: "rgba(54, 162, 235, 0.2)",
        //borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(25, 25, 112, 0.2)",
        borderColor: "rgba(25, 25, 112, 1)",
        yAxisID: 'y',
        pointRadius: '0'

      },
      */
      
]}


const data_temp = {
  labels,
  datasets: [
    {
      label: "Temperatura (C) Local Ontem",
      data: [

        temp_ontem_1AM / 10,
        temp_ontem_2AM / 10,
        temp_ontem_3AM / 10,
        temp_ontem_4AM / 10,
        temp_ontem_5AM / 10,
        temp_ontem_6AM / 10,
        temp_ontem_7AM / 10,
        temp_ontem_8AM / 10,
        temp_ontem_9AM / 10,
        temp_ontem_10AM / 10,
        temp_ontem_11AM / 10,
        temp_ontem_12AM / 10,
        temp_ontem_01PM / 10,
        temp_ontem_02PM / 10,
        temp_ontem_03PM / 10,
        temp_ontem_04PM / 10,
        temp_ontem_05PM / 10,
        temp_ontem_06PM / 10,
        temp_ontem_07PM / 10,
        temp_ontem_08PM / 10,
        temp_ontem_09PM / 10,
        temp_ontem_10PM / 10,
        temp_ontem_11PM / 10,
        temp_ontem_12PM / 10,


      ],
      //backgroundColor: "rgba(160 32, 240, 0.2)",
      //borderColor: "rgba(160,32, 240, 1)",
      backgroundColor: "rgba(179, 206, 229, 0.2)",
      borderColor: "rgba(179, 206, 229, 1)",
      borderDash: [10, 5],
      yAxisID: 'y',
    },

    {
      label: "Temperatura (C)Local Hoje",
      data: [
        temp_hoje_1AM / 10,
        temp_hoje_2AM / 10,
        temp_hoje_3AM / 10,
        temp_hoje_4AM / 10,
        temp_hoje_5AM / 10,
        temp_hoje_6AM / 10,
        temp_hoje_7AM / 10,
        temp_hoje_8AM / 10,
        temp_hoje_9AM / 10,
        temp_hoje_10AM / 10,
        temp_hoje_11AM / 10,
        temp_hoje_12AM / 10,
        temp_hoje_01PM / 10,
        temp_hoje_02PM / 10,
        temp_hoje_03PM / 10,
        temp_hoje_04PM / 10,
        temp_hoje_05PM / 10,
        temp_hoje_06PM / 10,
        temp_hoje_07PM / 10,
        temp_hoje_08PM / 10,
        temp_hoje_09PM / 10,
        temp_hoje_10PM / 10,
        temp_hoje_11PM / 10,
        temp_hoje_12PM / 10,
  ],
  //backgroundColor: "rgba(235, 222, 52, 0.2)",
  //borderColor: "rgba(235, 222, 52, 1)",
  backgroundColor: "rgba(25, 25, 112, 0.2)",
  borderColor: "rgba(25, 25, 112, 1)",
  yAxisID: 'y',

    },

   /*
    {
      label: "Temperatura (C)Local Hoje",
      data: [
        temp_hoje_1AM / 10,
        temp_hoje_2AM / 10,
        temp_hoje_3AM / 10,
        temp_hoje_4AM / 10,
        temp_hoje_5AM / 10,
        temp_hoje_6AM / 10,
        temp_hoje_7AM / 10,
        temp_hoje_8AM / 10,
        temp_hoje_9AM / 10,
        temp_hoje_10AM / 10,
        temp_hoje_11AM / 10,
        temp_hoje_12AM / 10,
        temp_hoje_01PM / 10,
        temp_hoje_01_06PM / 10,
        temp_hoje_01_12PM / 10,
        temp_hoje_01_18PM / 10,
        temp_hoje_01_24PM / 10,
        temp_hoje_01_30PM / 10,
        temp_hoje_01_36PM / 10,
        temp_hoje_01_42PM / 10,
        temp_hoje_01_48PM / 10,
        temp_hoje_01_54PM / 10,
        temp_hoje_02PM / 10,
        temp_hoje_03PM / 10,
        temp_hoje_04PM / 10,
        temp_hoje_05PM / 10,
        temp_hoje_06PM / 10,
        temp_hoje_07PM / 10,
        temp_hoje_08PM / 10,
        temp_hoje_09PM / 10,
        temp_hoje_10PM / 10,
        temp_hoje_11PM / 10,
        temp_hoje_12PM / 10,
  ],
  //backgroundColor: "rgba(235, 222, 52, 0.2)",
  //borderColor: "rgba(235, 222, 52, 1)",
  backgroundColor: "rgba(25, 25, 112, 0.2)",
  borderColor: "rgba(25, 25, 112, 1)",
  yAxisID: 'y',

    },
    */

    
]}


  return (
    <S.Container>
      <S.charts2>
        <Line options={options_press} data={data_pressure} />
      </S.charts2>

      <S.charts3>
        <Line options={options_temp} data={data_temp} />
      </S.charts3>

      <S.Lembrete>
      <h3>Pizza chart - financials of all gases</h3>
      <h1>botão de $ somente com gráficos financeiros</h1>

      </S.Lembrete>
    </S.Container>
  );
}

export default ChartsManHe1DETAILED;
