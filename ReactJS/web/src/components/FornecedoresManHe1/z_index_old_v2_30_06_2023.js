import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";

import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";

import { ArrowUpward } from '@mui/icons-material';

import * as S from "./styles";
import api from "../../service/api";

import RED_WARNING from "../../assets/RED_WARNING.png";
import YELLOW_WARNING from "../../assets/YELLOW_WARNING.png";
import SAVE from "../../assets/save.png";
import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";



let hoje = new Date();

function FornecedorManHe1(
  {

    fornecedor_antigo,
    email_antigo,
    cel_antigo,
    Lote_Antigo,
    custo_cilindro_antigo,
    checkbox_antigo,
    check_value,

    volume_antigo,
    data_antigo,
    hora_antigo,

    Ux_conectado,
  
  },
  { match }
) {

  const [FORNECEDOR_ANTIGO, setFORNECEDOR_ANTIGO] = useState([]);
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

  const [CHECKBOX_FORNECEDOR_GASES, setCHECKBOX_FORNECEDOR_GASES] = useState(
    []
  );

  


  const requestConfig = {
    headers: {
      "x-api-key": "okz9F4RqjGLRbIpYfnS190JZBOt51Av2SwK5Xjw5",
      //'Content-Type': 'application/json',
      //"Access-Control-Allow-Headers" : "Content-Type",
      //"Access-Control-Allow-Origin": "*",
      //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  };

  
 

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

  };

  async function fornecedor(requestBodyF, requestConfig) {
    // await api.post(registerUrl, requestBody, requestConfig)

    await api
      .post(
        //"https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/fornecedor?",
        "https://qpxac2sy5d.execute-api.sa-east-1.amazonaws.com/prod/postfornecedor?",
        requestConfig,
        requestBodyF
      )

      .then((response) => {
        console.log(
          "Informações relacionadas ao seu FORNECEDOR DE GASES GRAVADAS com sucesso!"
        );
        alert(
          "Informações relacionadas ao seu FORNECEDOR DE GASES GRAVADAS com sucesso!"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    console.log("checkbox_antigo :", checkbox_antigo);

  }

  

  return (
    <S.Container>

      <S.FeaturedContainer>
            
            <S.FeaturedItem> 
            <S.FeaturedTitle>Fornecedor de Gases em aviso:</S.FeaturedTitle>
            <S.FeaturedMoneyContainer> 

                <span className= "featuredMoney">{(checkbox_antigo ?(<h1>"sim"</h1>):(<h1>"no"</h1>))}</span>
                <span className="featuredMoneyRate"> <ArrowUpward className="featuredIcon positive"/> 2.4 </span> 
            </S.FeaturedMoneyContainer>
            <S.FeaturedSub>ref. semana passada</S.FeaturedSub>
            
            </S.FeaturedItem>
      </S.FeaturedContainer>

  



      <S.LeftSide>
        {checkbox_antigo ? (
          <S.Warning_1>
            <h1>
              DADOS SENDO COMPARTILHADOS COM SEU FORNECEDOR DE GASES
              CADASTRADO
            </h1>

            <img src={ok} alt="ok" />
            
          </S.Warning_1>
        ) : (
          <S.Warning_2>
            <h1>
              
              DADOS NÃO COMPARTILHADOS COM SEU FORNECEDOR DE GASES
              CADASTRADO
            </h1>

            <img src={no_ok} alt="no_ok" />
          </S.Warning_2>
        )}
      </S.LeftSide>
    </S.Container>
  );
}

export default FornecedorManHe1;
