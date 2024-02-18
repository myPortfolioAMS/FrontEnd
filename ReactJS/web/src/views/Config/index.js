import React from "react";
import * as S from "./styles";

/* import ConfigFornecedoresManHe1 from "../../components/ConfigFornecedoresManHe1";
import ConfigAlarmeManHe1 from "../../components/ConfigAlarmeManHe1";
import ConfigFornecedorInstHe1 from "../../components/ConfigFornecedorInstHe1"; */

import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import manometer_azul from "../../assets/manometer_azul.png";

function Manometers() {


  return (
    <S.Container>
      <Header />
{/*       <S.CADASTRO_ALARME>
        <ConfigAlarmeManHe1 />
      </S.CADASTRO_ALARME>

      <S.CADASTRO_FORNECEDORES>
        <ConfigFornecedoresManHe1 />
      </S.CADASTRO_FORNECEDORES>

      <S.CADASTRO_INSTALACAO>
        <ConfigFornecedorInstHe1 />
      </S.CADASTRO_INSTALACAO> */}

      <S.LastPage>
        <a href="/Manometers">
          <span className="featuredIcons">
            {" "}
            <ArrowBackIosOutlinedIcon className="featuredIconConfig" />
          </span>
          <span className="featuredIcons">
            {" "}
            <ArrowBackIosOutlinedIcon className="featuredIconConfig_1" />
          </span>
          <span className="featuredIcons">
            {" "}
            <ArrowBackIosOutlinedIcon className="featuredIconConfig_2" />
          </span>

          <img src={manometer_azul} alt="manometer" />
        </a>
      </S.LastPage>

      <Footer />
    </S.Container>
  );
}

export default Manometers;
