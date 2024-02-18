import React, { useState, useEffect } from "react";
import { useRef } from "react";

import * as S from "./styles";
import api from "../../service/api";

// icon para indicar tendência da pressão

import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

// icon para indicar pressão de alarme

import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

// icon para representar teste de estanqueidade

import manometer_verde from "../../assets/manometer-verde.png";



function AlarmeManHe1() {
  const [valoresNow, setCilindrosNow] = useState([0]); // armazena valores atuais
  const [valoresHoje_1AM, setCilindrosHoje_1AM] = useState([0]); // armazena dos valores de hoje as 1AM
  const [valoresHoje_6AM, setCilindrosHoje_6AM] = useState([0]); // useState dos valores de hoje as 6AM
  const [PRESSAO_ALARME_He1_gravado, setPA_gravado] = useState([]); // PRESSÃO DE ALARME GRAVADA NO BANCO DE DADOS
  const [last60min, setLast60min] = useState([]); // armazena valores de 60 minutos atrás

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // início da função que faz a requisição dos valores de hoje as 1 horas da manhã
  async function loadCilindrosHoje_1AM() {
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje1am?deviceID=Aliine"
      )
      .then((response) => {
        setCilindrosHoje_1AM(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_1AM();
  }, [valoresHoje_1AM]);


  // início da função que faz a requisição dos valores de hoje as 6 horas da manhã
  async function loadCilindrosHoje_6AM() {
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/hoje6am?deviceID=Aliine"
      )
      .then((response) => {
        setCilindrosHoje_6AM(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosHoje_6AM();
  }, [valoresHoje_6AM]);


 // início da função que faz a requisição dos valores de hoje - 60 minutos atrás
  async function getlast60min() {
    await api
      .get(
        "https://mdzyvk6l0a.execute-api.sa-east-1.amazonaws.com/prod/get60min?deviceID=Aliine"
      )
      .then((response) => {
        setLast60min(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getlast60min();
  }, [last60min]);

   // início da função que faz a requisição dos valores de hoje - neste momento

  async function loadCilindrosNow() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine"
      )

      .then((response) => {
        setCilindrosNow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCilindrosNow();
  }, [valoresNow]);


  // função para retornar o valor do alarme setado para He, cilindro 1,  gravado no banco de dados
  async function loadAlarmesNow() {
    await api
      .get(
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/getalarme?deviceID=Aliine"
      )

      .then((response) => {
        setPA_gravado(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadAlarmesNow();
  }, [PRESSAO_ALARME_He1_gravado]);

  

  return (
    <S.Container>
      <S.FeaturedContainer>
        <S.FeaturedItem>
          <S.FeaturedTitle>Manômetro (bar): </S.FeaturedTitle>
          <S.FeaturedValueContainer>
            {valoresNow.map((valor) => (
              <span className="featuredMoney" key={valor.id}>
                {valor.He}
              </span>
            ))}
            <span className="featuredMoneyRate">
              <ArrowDownwardOutlinedIcon className="featuredIconManometer" />
              6.9
            </span>
            <img src={manometer_verde} alt="manometer" />
          </S.FeaturedValueContainer>
        </S.FeaturedItem>

        <S.FeaturedItem>
          <S.FeaturedTitle>Alarme (bar):</S.FeaturedTitle>
          <S.FeaturedValueContainer>
            {PRESSAO_ALARME_He1_gravado.map((valorPA) => (
              <span className="featuredMoney" key={valorPA.id}>
                {valorPA.AlarmeHe1}
              </span>
            ))}
            <span className="featuredMoneyRate">
              {" "}
              <NotificationsActiveOutlinedIcon className="featuredIconLogoAlarme" />
            </span>
          </S.FeaturedValueContainer>
        </S.FeaturedItem>
      </S.FeaturedContainer>

      <S.LeftSide>
        <S.ScreenSize_1>
          <h2>Width: {windowSize.current[0]}</h2>
        </S.ScreenSize_1>

        <S.ScreenSize_2>
          <h2>Height: {windowSize.current[1]}</h2>
        </S.ScreenSize_2>
      </S.LeftSide>
    </S.Container>
  );
}

export default AlarmeManHe1;
