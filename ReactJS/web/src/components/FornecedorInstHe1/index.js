import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";

import * as S from "./styles";
import api from "../../service/api";

import { ArrowUpward } from '@mui/icons-material';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";

let hoje = new Date();

function FornecedorInstHe1(
  {
   

    fornecedor_antigo_inst,
    email_antigo_inst,
    cel_antigo_inst,
    checkbox_antigo_inst,
    check_value_INST,

  },
  { match }
) {


  const [CHECKBOX_FORNECEDOR_INST, setCHECKBOX_FORNECEDOR_INST] = useState([false]);

  const [FORNECEDOR_ANTIGO_INST, setFORNECEDOR_ANTIGO_INST] = useState([]);
  const [FORNECEDOR_NOVO_INST, setFORNECEDOR_NOVO_INST] = useState([]);

  const [EMAIL_ANTIGO_INST, setEMAIL_ANTIGO_INST] = useState([]);
  const [EMAIL_NOVO_INST, setEMAIL_NOVO_INST] = useState([]);

  const [CEL_ANTIGO_INST, setCEL_ANTIGO_INST] = useState([]);
  const [CEL_NOVO_INST, setCEL_NOVO_INST] = useState([]);

  const [last60min, setlast60min] = useState([]);





  const requestConfig = {
    headers: {
      "x-api-key": "okz9F4RqjGLRbIpYfnS190JZBOt51Av2SwK5Xjw5",
      //'Content-Type': 'application/json',
      //"Access-Control-Allow-Headers" : "Content-Type",
      //"Access-Control-Allow-Origin": "*",
      //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  };


  


  let newSupplierInstalacao = FORNECEDOR_NOVO_INST;
  let EMAIL_INST = EMAIL_NOVO_INST;
  let CEL_INST = CEL_NOVO_INST;
  let position_CHECKBOX_INST = CHECKBOX_FORNECEDOR_INST;

  const requestBodyFORN_INST = {
    FORNECEDOR_INSTALACAO: newSupplierInstalacao,
    id: "He1",
    deviceID: "Aliine",
    Ux: Math.round(Date.now()),
    EMAIL_INST: EMAIL_INST,
    CELULAR_INST: CEL_INST,
    POSITION_CHECKBOX_INST: position_CHECKBOX_INST,
  };

  // função para setar e gravar a pressão de FORNECEDOR

  async function instalacao(requestBodyFORN_INST, requestConfig) {
    // await api.post(registerUrl, requestBody, requestConfig)

    await api
      .post(
        //"https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/instalacao?",
        "https://qpxac2sy5d.execute-api.sa-east-1.amazonaws.com/prod/postinstalacao?",
        requestConfig,
        requestBodyFORN_INST
      )

      .then((response) => {
        console.log(
          "Informações do responsável pela Instalação de Gases  GRAVADAS com sucesso!"
        );
        alert(
          "Informações relacionadas ao seu fornecedor responsável pela Instalação de Gases GRAVADAS com sucesso!"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getinstalacao() {
    await api
      .get(
        //"https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getinstalacao?deviceID=Aliine"
        "https://qpxac2sy5d.execute-api.sa-east-1.amazonaws.com/prod/getinstalacao?deviceID=Aliine"
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
    FORNECEDOR_ANTIGO_INST.map(
      (t) => (fornecedor_antigo_inst = t.FORNECEDOR_INSTALACAO)
    );
    FORNECEDOR_ANTIGO_INST.map((t) => (email_antigo_inst = t.EMAIL_INST));
    FORNECEDOR_ANTIGO_INST.map((t) => (cel_antigo_inst = t.CELULAR_INST));
    FORNECEDOR_ANTIGO_INST.map(
      (t) => (checkbox_antigo_inst = t.POSITION_CHECKBOX_INST)
    );

    console.log("fornecedor_inst_antigo:", fornecedor_antigo_inst);
    console.log("cel INST ANTIGO:", cel_antigo_inst);
    console.log("email INST ANTIGO:", email_antigo_inst);
    console.log("checkbox INST ANTIGO:", checkbox_antigo_inst);
  }

  console.log("fornecedor_inst_antigo:", fornecedor_antigo_inst);
  console.log("check_value_INST:", checkbox_antigo_inst);

  return (
    <S.Container>
       <S.FeaturedContainer>
            
            <S.FeaturedItem> 
            <S.FeaturedTitle><h2>Instalação de Gases em aviso:</h2>
           
            </S.FeaturedTitle>
            
            
            </S.FeaturedItem>
      </S.FeaturedContainer>

      <S.FeaturedContainer2>
            
            <S.FeaturedItem2> 
        
            <S.FeaturedMoneyContainer> 

                <span className= "featuredMoney">{(checkbox_antigo_inst ?
                  
                  (<h1>sim
                  <span className="featuredMoneyRate"> <ThumbUpOutlinedIcon className="featuredIconPositive"/></span> 
                  </h1>)
                  :
                  (<h1>não
                <span className="featuredMoneyRate"> <ThumbDownOutlinedIcon className="featuredIconNegative"/></span> 
                
                </h1>))}
                
                </span>
           
            </S.FeaturedMoneyContainer>
         
   
            
            </S.FeaturedItem2>
      </S.FeaturedContainer2>
     
{/*
      <S.LeftSide>
        {checkbox_antigo_inst ? (
          <S.Warning_1>
            
            <h1>
              DADOS SENDO COMPARTILHADOS COM O RESPONSÁVEL PELA
              INSTALAÇÃO DE GASES CADASTRADO
            </h1>
            <img src={ok} alt="ok" />
          </S.Warning_1>
        ) : (
          <S.Warning_2>
            <h1>
              DADOS NÃO COMPARTILHADOS COM O RESPONSÁVEL PELA
              INSTALAÇÃO DE GASES CADASTRADO
            </h1>
            <img src={no_ok} alt="no_ok" />
          </S.Warning_2>
        )}
      </S.LeftSide>
        */}
    </S.Container>
  );
}

export default FornecedorInstHe1;
