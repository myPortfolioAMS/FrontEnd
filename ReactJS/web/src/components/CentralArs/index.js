import React, { useState, useEffect, Component } from "react";
import * as S from "./styles";
import api from "../../service/api";

import centralDuplaVaziaARS from "../../assets/CENTRAL_DUPLA_VAZIA_ARS.png";
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

import ARS05 from "../../assets/ARS_05.png";
import ARS10 from "../../assets/ARS_10.png";
import ARS15 from "../../assets/ARS_15.png";
import ARS20 from "../../assets/ARS_20.png";
import ARS25 from "../../assets/ARS_25.png";
import ARS30 from "../../assets/ARS_30.png";
import ARS35 from "../../assets/ARS_35.png";
import ARS40 from "../../assets/ARS_40.png";
import ARS45 from "../../assets/ARS_45.png";
import ARS50 from "../../assets/ARS_50.png";
import ARS55 from "../../assets/ARS_55.png";
import ARS60 from "../../assets/ARS_60.png";
import ARS65 from "../../assets/ARS_65.png";
import ARS70 from "../../assets/ARS_70.png";
import ARS75 from "../../assets/ARS_75.png";
import ARS80 from "../../assets/ARS_80.png";
import ARS85 from "../../assets/ARS_85.png";
import ARS90 from "../../assets/ARS_90.png";
import ARS95 from "../../assets/ARS_95.png";
import ARS100 from "../../assets/ARS_100.png";

import bellARS from "../../assets/bell_ARS.png";
import manometer_azul from '../../assets/manometer_azul.png';
import manometer_vermelho from '../../assets/manometer_vermelho.png';

function CentralArs(PatualARS1, PatualARS2) {
  const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais

  async function loadCilindrosNow() {
    await api
      .get(
        //"https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod/today2?deviceID=Aliine"
        "https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?devideID=Aliine"
      
        )

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
  }, [PatualARS1, PatualARS2]);

  {
    valoresNow.map((t) => (PatualARS1 = Number(t.He).toFixed(0)));
  }

  {
    valoresNow.map((t) => (PatualARS2 = Number(t.He2).toFixed(0)));

    // Variavéis que aramazenam valores atuais das pressões dos gases
    let arsNow_1 = PatualARS1;
    let arsNow_2 = PatualARS2;
    // final da função que faz a requisição dos valores atuais
  }

  PatualARS1 = Math.round((1.8*Number(PatualARS1)));
  PatualARS2=195;

  return (
    <S.ContainerArs>
      <S.CENTRALARS>
        <img src={centralDuplaVaziaARS} alt="Central Dupla Ar Sintético" />

        {PatualARS1 >= 190 && (
          <S.ARS1001>
            <img src={ARS100} alt="ARS100_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 180 && (
          <S.ARS1001>
            <img src={ARS95} alt="ARS95_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 170 && (
          <S.ARS1001>
            <img src={ARS90} alt="ARS90_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 160 && (
          <S.ARS1001>
            <img src={ARS85} alt="ARS85_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 150 && (
          <S.ARS1001>
            <img src={ARS80} alt="ARS80_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 140 && (
          <S.ARS1001>
            <img src={ARS75} alt="ARS75_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 130 && (
          <S.ARS1001>
            <img src={ARS70} alt="ARS70_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 120 && (
          <S.ARS1001>
            <img src={ARS65} alt="ARS65_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 110 && (
          <S.ARS1001>
            <img src={ARS60} alt="ARS60_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 100 && (
          <S.ARS1001>
            <img src={ARS55} alt="ARS55_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 90 && (
          <S.ARS1001>
            <img src={ARS50} alt="ARS50_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 80 && (
          <S.ARS1001>
            <img src={ARS45} alt="ARS45_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 70 && (
          <S.ARS1001>
            <img src={ARS40} alt="ARS40_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 60 && (
          <S.ARS1001>
            <img src={ARS35} alt="ARS35_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 50 && (
          <S.ARS1001>
            <img src={ARS30} alt="ARS30_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 40 && (
          <S.ARS1001>
            <img src={ARS25} alt="ARS25_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 30 && (
          <S.ARS1001>
            <img src={ARS20} alt="ARS20_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 20 && (
          <S.ARS1001>
            <img src={ARS15} alt="ARS15_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 10 && (
          <S.ARS1001>
            <img src={ARS10} alt="ARS10_1" />{" "}
          </S.ARS1001>
        )}
        {PatualARS1 >= 1 && (
          <S.ARS1001>
            <img src={ARS05} alt="ARS05_1" />{" "}
          </S.ARS1001>
        )}

        {PatualARS2 >= 190 && (
          <S.ARS1002>
            <img src={ARS100} alt="ARS100_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 180 && (
          <S.ARS1002>
            <img src={ARS95} alt="ARS95_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 170 && (
          <S.ARS1002>
            <img src={ARS90} alt="ARS90_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 160 && (
          <S.ARS1002>
            <img src={ARS85} alt="ARS85_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 150 && (
          <S.ARS1002>
            <img src={ARS80} alt="ARS80_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 140 && (
          <S.ARS1002>
            <img src={ARS75} alt="ARS75_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 130 && (
          <S.ARS1002>
            <img src={ARS70} alt="ARS70_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 120 && (
          <S.ARS1002>
            <img src={ARS65} alt="ARS65_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 110 && (
          <S.ARS1002>
            <img src={ARS60} alt="ARS60_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 100 && (
          <S.ARS1002>
            <img src={ARS55} alt="ARS55_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 90 && (
          <S.ARS1002>
            <img src={ARS50} alt="ARS50_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 80 && (
          <S.ARS1002>
            <img src={ARS45} alt="ARS45_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 70 && (
          <S.ARS1002>
            <img src={ARS40} alt="ARS40_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 60 && (
          <S.ARS1002>
            <img src={ARS35} alt="ARS35_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 50 && (
          <S.ARS1002>
            <img src={ARS30} alt="ARS30_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 40 && (
          <S.ARS1002>
            <img src={ARS25} alt="ARS25_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 30 && (
          <S.ARS1002>
            <img src={ARS20} alt="ARS20_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 20 && (
          <S.ARS1002>
            <img src={ARS15} alt="ARS15_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 10 && (
          <S.ARS1002>
            <img src={ARS10} alt="ARS10_2" />{" "}
          </S.ARS1002>
        )}
        {PatualARS2 >= 1 && (
          <S.ARS1002>
            <img src={ARS05} alt="ARS05_2" />{" "}
          </S.ARS1002>
        )}

        <h3>AR SINTÉTICO</h3>

        <S.PressaoAtualArSinteticoCilindro1>
          <h3>EM USO</h3>
        </S.PressaoAtualArSinteticoCilindro1>

        <S.VALOR_PressaoAtual_ArSintetico_Cilindro_1>
          <h2>{PatualARS1}</h2>
        </S.VALOR_PressaoAtual_ArSintetico_Cilindro_1>

        <S.UNIDADE_PressaoAtual_ArSintetico_Cilindro_1>
          <h2>bar</h2>
        </S.UNIDADE_PressaoAtual_ArSintetico_Cilindro_1>

        <S.bellARS1>
          <img src={bellARS} alt="Alarme 1 Ar Comprimido"></img>
        </S.bellARS1>

        <S.bellARS1_text>
          <h2>12.0</h2>{" "}
        </S.bellARS1_text>

        <S.PressaoAtualArSinteticoCilindro2>
          <h2>RESERVA</h2>
        </S.PressaoAtualArSinteticoCilindro2>

        <S.VALOR_PressaoAtual_ArSintetico_Cilindro_2>
          <h2>{PatualARS2}</h2>
        </S.VALOR_PressaoAtual_ArSintetico_Cilindro_2>

        <S.UNIDADE_PressaoAtual_ArSintetico_Cilindro_2>
          <h2>bar</h2>
        </S.UNIDADE_PressaoAtual_ArSintetico_Cilindro_2>

        <S.bellARS2>
          <img src={bellARS} alt="Alarme 2 Ar Sintético"></img>
        </S.bellARS2>

        <S.bellARS2_text>
          <h2>12.0</h2>{" "}
        </S.bellARS2_text>
      </S.CENTRALARS>

      <S.MANOMETER>
              <a href={'/Manometers'} >
              <span className="featuredManometer"><h2>central</h2><img src={manometer_azul} className="featuredIconLogo"/></span>
              </a>
              <a href={'/Manometers'} >
              <span className="featuredManometer1"><h2>lab</h2><img src={manometer_azul} className="featuredIconLogo1"/></span> 
              </a>
        </S.MANOMETER>

       
    </S.ContainerArs>
  );
}

export default CentralArs;
