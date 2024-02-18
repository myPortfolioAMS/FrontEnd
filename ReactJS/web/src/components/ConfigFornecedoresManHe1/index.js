import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";

import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";

import * as S from "./styles";
import api from "../../service/api";

import RED_WARNING from "../../assets/RED_WARNING.png";
import YELLOW_WARNING from "../../assets/YELLOW_WARNING.png";
import SAVE from "../../assets/save.png";
import ok from "../../assets/ok_green.png";
import no_ok from "../../assets/no_ok_red.png";

import DatePicker from "react-datepicker";



let hoje = new Date();

function ConfigFornecedorManHe1(
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

  const [startDate, setStartDate] = useState(new Date());

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

  
// DATA_NOVA = new Date().toLocaleString()

  let newSupplier = FORNECEDOR_NOVO;
  let EMAILN = EMAIL_NOVO;
  let CELN = CEL_NOVO;
  let LOTEN = lote_novo;
  let CCILINDRON = CUSTO_CILINDRO_NOVO;
  let position_CHECKBOX = CHECKBOX_FORNECEDOR_GASES;
  let vol = VOLUME_NOVO;
  //let ddata = DATA_NOVA;
  let ddata = new Date().toLocaleDateString();
  let hora = new Date().toLocaleTimeString();
  //let ddata = rightNow.getDate() + "/" + (rightNow.getMonth() + 1) + "/" + rightNow.getFullYear();
  //let hora = rightNow.getHours() + ":" + rightNow.getMinutes() + ":" + rightNow.getSeconds();
  //let Ux_DT = ddata + "T" + hora + ":" + 0 + 0 + ".000Z";
  //let Ux_DTc = new Date(Ux_DT).valueOf();
  let UnixTime = Math.round((Date.now())/1000);
  //let back_in_Time = new Date(Ux_DTc);

  let IDX = idx;
  let NOME= nome;
  let LOGRA = logradouro;
  let NUMERO = numero;
  let BAIRRO = bairro;
  let CIDADE = cidade;
  let UF = uf;
  let CEP = cep;
  let DATAX = datax;

 

  const requestBodyF = {
    FORNECEDOR_GASES: newSupplier,
    id: Number((Date.now() / 1000).toFixed(0)),
    idGas: "He1",
    deviceID: "Aliine",
    Ux: Math.round(Number((Date.now() / 1000).toFixed(0))),
    EMAIL: EMAILN,
    CELULAR: CELN,
    LOTE: LOTEN,
    CUSTO_CILINDRO: CCILINDRON,
    POSITION_CHECKBOX: position_CHECKBOX,
    VOLUME: vol,
   // DATA: ddata,
    HORA: hora,
    ddata: ddata,
 
    //Ux_DT: Ux_DT,
    //Ux_DTc: Ux_DTc,
    //back_in_Time: back_in_Time,
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
    Track_Fornecedor_Gases: "Track_Fornecedor_Gases_He1",

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
    FORNECEDOR_ANTIGO.map((t) => (idx_antigo= t.IDX));

    FORNECEDOR_ANTIGO.map((t) => (nome_antigo= t.NOME));
    FORNECEDOR_ANTIGO.map((t) => (logradouro_antigo= t.LOGRA));
    FORNECEDOR_ANTIGO.map((t) => (numero_antigo= t.NUMERO));
    FORNECEDOR_ANTIGO.map((t) => (bairro_antigo= t.BAIRRO));
    FORNECEDOR_ANTIGO.map((t) => (cidade_antigo= t.CIDADE));
    FORNECEDOR_ANTIGO.map((t) => (uf_antigo= t.UF));
    FORNECEDOR_ANTIGO.map((t) => (cep_antigo= t.CEP));
    FORNECEDOR_ANTIGO.map((t) => (datax_antigo= t.DATAX));


   
 

    console.log("fornecedor_antigo:", fornecedor_antigo);
    console.log("checkbox_antigo :", checkbox_antigo);

  }

const checkCEP = (e) => {
  const cep = e.target.value.replace(/\D/g, "");
  console.log("CEP:", cep);
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
        'content-type': 'application/json;charset=utf-8',
    }
}
  fetch(url, options)
    .then(res => res.json()).then(data => {
      console.log("data:", data);
}
  )
} 

  
  

  return (
    <S.Container>
      <S.RightSide>

     
        <S.CAIXA_FORNECEDOR_GASES>

        <S.FORNECEDOR_GASES_CHECK_BOX>
            <Checkbox
              type="checkbox"
              defaultChecked={checkbox_antigo}
              //checked = {checkbox_antigo}
              onChange={(e) => setCHECKBOX_FORNECEDOR_GASES(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              value = {CHECKBOX_FORNECEDOR_GASES}
            />
          </S.FORNECEDOR_GASES_CHECK_BOX>

          <S.ID_FORNECEDOR_GASES>
          <TextField
              id="label-ID-fornecedor-gases"
              type="text"
              label="ID: "
              InputLabelProps={{ shrink: true }}
              placeholder={idx_antigo}
              onChange={(e) => setIdx(e.target.value)}
              value={idx}
            />

          </S.ID_FORNECEDOR_GASES>

          <S.FORNECEDOR_GASES>
            <TextField
              id="label-fornecedor-gases"
              type="text"
              label="Fornecedor Gases: "
              InputLabelProps={{ shrink: true }}
              placeholder={fornecedor_antigo}
              onChange={(e) => setFORNECEDOR_NOVO(e.target.value)}
              value={FORNECEDOR_NOVO}
            />
          </S.FORNECEDOR_GASES>

          <S.VALOR_CONTATO_FORNECEDOR>
          <TextField
              id="label-nome-contato-fornecedor"
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
              id="label-celular"
              type="text"
              pattern="[0-9]{2}[0-9]{9}"
              label="Celular Fornecedor:"
              placeholder={cel_antigo}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setCEL_NOVO(e.target.value)}
              value={CEL_NOVO}
            />
          </S.VALOR_CELULAR>

          <S.VALOR_EMAIL>
            <TextField
              id="label-email"
              type="text"
              label="Email Fornecedor:"
              InputLabelProps={{ shrink: true }}
              placeholder={email_antigo}
              onChange={(e) => setEMAIL_NOVO(e.target.value)}
              value={EMAIL_NOVO}
            />
          </S.VALOR_EMAIL>

          <S.LOGRADOURO>
            <TextField
              id="label-logradouro"
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
              id="label-numero-rua"
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
              id="label-bairro"
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
              id="label-cidade"
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
              id="label-uf"
              type="text"
              label="UF:"
              pattern="[A-Za-z]{2}"
           
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endornment: (
                  <InputAdornment position="start">
                    <h2>m3</h2>
                  </InputAdornment>
    ),

  }}
              placeholder={uf_antigo}
              onChange={(e) => setUf(e.target.value)}
              value={uf}
            />
          </S.UF>

          <S.CEP>
            <TextField
              id="label-cep"
              type="text"
              pattern="[0-9]{2}[0-9]{9}"
              label="CEP:"
              placeholder={cep_antigo}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setCep(e.target.value)}
              //onBlur={checkCEP}
              value={cep}
            />
          </S.CEP>


          <S.VALOR_CUSTO_CILINDRO>
            <TextField
              id="label-custo-cilindro"
              type="text"
              label="Custo Carga:"
              pattern="[A-Za-z]{3}"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <h2>R$</h2>
                  </InputAdornment>
                ),
              }}
              placeholder={custo_cilindro_antigo}
              onChange={(e) => setCUSTO_CILINDRO_NOVO(e.target.value)}
              value={CUSTO_CILINDRO_NOVO}
            />
          </S.VALOR_CUSTO_CILINDRO>

          <S.VALOR_VOLUME>
            <TextField
              id="label-volume"
              type="text"
              label="Vol (m3):"
              pattern="[A-Za-z]{2}"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endornment: (
                  <InputAdornment position="start">
                    <h2>m3</h2>
                  </InputAdornment>
                ),
              }}
              placeholder={volume_antigo}
              onChange={(e) => setVOLUME_NOVO(e.target.value)}
              value={VOLUME_NOVO}
            />
          </S.VALOR_VOLUME>

          <S.VALOR_DATA>
            <TextField
             id="label-data"
             type="text"
             label="Data (d-m-a):"
             pattern="[A-Za-z]{9}"
             InputLabelProps={{ shrink: true }}
             placeholder={datax_antigo}
             onChange={(e) => setDatax(e.target.value)}
             value={datax}
             />
          </S.VALOR_DATA>


          <S.FORNECEDOR_GASES_SAVE_BUTTON>
            <Button
              variant="contained"
              size="small"
              //color="success"
              onClick={() => fornecedor(requestConfig, requestBodyF)}
            >
              <strong>salvar</strong>
            </Button>
          </S.FORNECEDOR_GASES_SAVE_BUTTON>

        </S.CAIXA_FORNECEDOR_GASES>
      </S.RightSide>

      
    </S.Container>
  );
}

export default ConfigFornecedorManHe1;
