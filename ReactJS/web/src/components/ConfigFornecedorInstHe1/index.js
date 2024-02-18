import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";

import * as S from "./styles";
import api from "../../service/api";

import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";

let hoje = new Date();

function ConfigFornecedorInstHe1(
  {
   

    fornecedor_antigo_inst,
    email_antigo_inst,
    cel_antigo_inst,
    checkbox_antigo_inst,
    check_value_INST,

    data_antigo,
    hora_antigo,
    Ux_conectado,


    idx_antigo,
    nome_antigo,
    logradouro_antigo,
    numero_antigo,
    bairro_antigo,
    cidade_antigo,
    uf_antigo,
    cep_antigo,
    datax_antigo,
   

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

  const [Idx_antigo, setIdx_antigo] = useState([]);
  const [idx, setIdx] = useState([]);


  const [Nome_antigo, setNome_antigo] = useState([]);
  const [nome, setNome] = useState([]);

  const [Logradouro_antigo, setLogradouro_antigo]= useState([]);
  const [logradouro, setLogradouro]= useState([]);


  const [Numero_antigo, setNumero_antigo]= useState([]);
  const [numero, setNumero]= useState([]);


  const [Bairro_antigo, setBairro_antigo]= useState([]);
  const [bairro, setBairro]= useState([]);


  const [Cidade_antigo, setCidade_antigo]= useState([]);
  const [cidade, setCidade]= useState([]);


  const [Uf_antigo, setUf_antigo]= useState([]);
  const [uf, setUf]= useState([]);


  const [Cep_antigo, setCep_antigo]= useState([]);
  const [cep, setCep]= useState([]);


  const [Datax_antigo, setDatax_antigo]= useState([]);
  const [datax, setDatax]= useState([]);







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
  let ddata = new Date().toLocaleDateString();
  let hora = new Date().toLocaleTimeString();
  let UnixTime = Math.round((Date.now())/1000);

  let IDX = idx;
  let NOME= nome;
  let LOGRA = logradouro;
  let NUMERO = numero;
  let BAIRRO = bairro;
  let CIDADE = cidade;
  let UF = uf;
  let CEP = cep;
  let DATAX = datax;
  
 

  const requestBodyFORN_INST = {
    FORNECEDOR_INSTALACAO: newSupplierInstalacao,
    id: Number((Date.now() / 1000).toFixed(0)),
    idGas: "He1",
    deviceID: "Aliine",
    Ux: Math.round(Number((Date.now() / 1000).toFixed(0))),
    EMAIL_INST: EMAIL_INST,
    CELULAR_INST: CEL_INST,
    POSITION_CHECKBOX_INST: position_CHECKBOX_INST,
    DATA: ddata,
    HORA: hora,
    Ux: UnixTime,

    IDX : IDX,
    NOME : NOME,
    LOGRA : LOGRA,
    NUMERO : NUMERO,
    BAIRRO : BAIRRO,
    CIDADE : CIDADE,
    UF : UF,
    CEP : CEP,
    DATAX : DATAX,
    hoje: hoje,
    Track_Fornecedor_Inst: "Track_Fornecedor_Inst_He1", 


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

    data_antigo,
    hora_antigo,
    Ux_conectado,

    idx_antigo,
    nome_antigo,
    logradouro_antigo,
    numero_antigo,
    bairro_antigo,
    cidade_antigo,
    uf_antigo,
    cep_antigo,
    datax_antigo,
  ]);

  {
    FORNECEDOR_ANTIGO_INST.map((t) => (fornecedor_antigo_inst = t.FORNECEDOR_INSTALACAO));
    FORNECEDOR_ANTIGO_INST.map((t) => (email_antigo_inst = t.EMAIL_INST));
    FORNECEDOR_ANTIGO_INST.map((t) => (cel_antigo_inst = t.CELULAR_INST));
    FORNECEDOR_ANTIGO_INST.map((t) => (checkbox_antigo_inst = t.POSITION_CHECKBOX_INST));

    FORNECEDOR_ANTIGO_INST.map((t) => (data_antigo = t.DATA));
    FORNECEDOR_ANTIGO_INST.map((t) => (hora_antigo = t.HORA));
    FORNECEDOR_ANTIGO_INST.map((t) => (Ux_conectado = t.Ux));

    FORNECEDOR_ANTIGO_INST.map((t) => (idx_antigo= t.IDX));

    FORNECEDOR_ANTIGO_INST.map((t) => (nome_antigo= t.NOME));
    FORNECEDOR_ANTIGO_INST.map((t) => (logradouro_antigo= t.LOGRA));
    FORNECEDOR_ANTIGO_INST.map((t) => (numero_antigo= t.NUMERO));
    FORNECEDOR_ANTIGO_INST.map((t) => (bairro_antigo= t.BAIRRO));
    FORNECEDOR_ANTIGO_INST.map((t) => (cidade_antigo= t.CIDADE));
    FORNECEDOR_ANTIGO_INST.map((t) => (uf_antigo= t.UF));
    FORNECEDOR_ANTIGO_INST.map((t) => (cep_antigo= t.CEP));
    FORNECEDOR_ANTIGO_INST.map((t) => (datax_antigo= t.DATAX));

    console.log("fornecedor_inst_antigo:", fornecedor_antigo_inst);
    console.log("cel INST ANTIGO:", cel_antigo_inst);
    console.log("email INST ANTIGO:", email_antigo_inst);
    console.log("checkbox INST ANTIGO:", checkbox_antigo_inst);
  }

  console.log("fornecedor_inst_antigo:", fornecedor_antigo_inst);
  console.log("check_value_INST:", checkbox_antigo_inst);

  return (
    <S.Container>
      <S.RightSide>
        <S.CAIXA_INSTALACAO_GASES>

        <S.INSTALADOR_GASES_CHECK_BOX>
            <Checkbox
              //checked={CHECKBOX_FORNECEDOR_INST}
              // placeholder={checkbox_antigo_inst}
              defaultChecked={checkbox_antigo_inst}
              onChange={(e) => setCHECKBOX_FORNECEDOR_INST(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </S.INSTALADOR_GASES_CHECK_BOX>

          <S.ID_FORNECEDOR_GASES>
          <TextField
              id="label-ID-fornecedor-inst"
              type="text"
              label="ID: "
              InputLabelProps={{ shrink: true }}
              placeholder={idx_antigo}
              onChange={(e) => setIdx(e.target.value)}
              value={idx}
            />

          </S.ID_FORNECEDOR_GASES>
          
          <S.INSTALADOR_GASES>
            <TextField
              id="label-instalador-gases"
              type="text"
              label="Fornecedor Instalação de Gases: "
              InputLabelProps={{ shrink: true }}
              placeholder={fornecedor_antigo_inst}
              onChange={(e) => setFORNECEDOR_NOVO_INST(e.target.value)}
              value={FORNECEDOR_NOVO_INST}
            />
          </S.INSTALADOR_GASES>

          <S.VALOR_CONTATO_FORNECEDOR>
          <TextField
              id="label-nome-contato-fornecedor-inst"
              type="text"
              label="Nome / Contato: "
              InputLabelProps={{ shrink: true }}
              placeholder={nome_antigo}
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </S.VALOR_CONTATO_FORNECEDOR>

          <S.VALOR_CELULAR>
            <TextField
              id="label-celular-inst"
              type="text"
              pattern="[0-9]{2}[0-9]{9}"
              label="Celular Fornecedor:"
              placeholder={cel_antigo_inst}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setCEL_NOVO_INST(e.target.value)}
              value={CEL_NOVO_INST}
            />
          </S.VALOR_CELULAR>

         

 
          <S.INSTALADOR_EMAIL>
            <TextField
              id="label-email-inst"
              type="text"
              label="Email Fornecedor:"
              InputLabelProps={{ shrink: true }}
              placeholder={email_antigo_inst}
              onChange={(e) => setEMAIL_NOVO_INST(e.target.value)}
              value={EMAIL_NOVO_INST}

              
            />
          </S.INSTALADOR_EMAIL>

          <S.LOGRADOURO>
            <TextField
              id="label-logradouro-inst"
              type="text"
              label="Endereço / Rua / Logradouro: "
              InputLabelProps={{ shrink: true }}
              placeholder={logradouro_antigo}
              onChange={(e) => setLogradouro(e.target.value)}
              value={logradouro}
            />
          </S.LOGRADOURO>
          

          <S.NUMERO_RUA>
          <TextField
              id="label-numero-rua-inst"
              type="text"
              label="Núm: "
              pattern="[0-9]{4}"
              InputLabelProps={{ shrink: true }}
              placeholder={numero_antigo}
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
            />

          </S.NUMERO_RUA>

          <S.BAIRRO>
          <TextField
              id="label-bairro-inst"
              type="text"
              label="Bairro: "
              InputLabelProps={{ shrink: true }}
              placeholder={bairro_antigo}
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
            />
          </S.BAIRRO>

          <S.CIDADE>
          <TextField
              id="label-cidade-inst"
              type="text"
              label="Cidade: "
              InputLabelProps={{ shrink: true }}
              placeholder={cidade_antigo}
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />




          </S.CIDADE>

          <S.UF>
            <TextField
              id="label-uf-inst"
              type="text"
              label="UF:"
              pattern="[A-Za-z]{2}"
           
              InputLabelProps={{ shrink: true }}
              
              placeholder={uf_antigo}
              onChange={(e) => setUf(e.target.value)}
              value={uf}
            />
          </S.UF>

          <S.CEP>
            <TextField
              id="label-cep-inst"
              type="text"
              pattern="[0-9]{2}[0-9]{9}"
              label="CEP:"
              placeholder={cep_antigo}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setCep(e.target.value)}
              value={cep}
            />
          </S.CEP>

          <S.VALOR_DATA>
            <TextField
             id="label-data-inst"
             type="text"
             label="Data (d-m-a):"
             pattern="[A-Za-z]{9}"
             InputLabelProps={{ shrink: true }}
             placeholder={datax_antigo}
             onChange={(e) => setDatax(e.target.value)}
             value={datax}
             />
          </S.VALOR_DATA>



          <S.INSTALADOR_SAVE_BUTTON>
            <Button
              variant="contained"
              size="small"
              //color="success"
              onClick={() => instalacao(requestConfig, requestBodyFORN_INST)}
            >
              <strong>salvar</strong>
            </Button>
          </S.INSTALADOR_SAVE_BUTTON>
        </S.CAIXA_INSTALACAO_GASES>
      </S.RightSide>


    </S.Container>
  );
}

export default ConfigFornecedorInstHe1;
