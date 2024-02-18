import React from "react";
import * as S from "./styles";

import ManometerHelium from "../../components/ManometerHelium/index.tsx";

import AlarmeManHe1 from "../../components/AlarmeManHe1";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Manometers() {
  return (
    <S.Container>
      <Header />

      <S.ManHe>
        <ManometerHelium />
      </S.ManHe>

      <S.CADASTRO_ALARME>
        <AlarmeManHe1 />
      </S.CADASTRO_ALARME>

      <Footer />
    </S.Container>
  );
}

export default Manometers;
