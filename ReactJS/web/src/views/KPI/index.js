import React from "react";
import * as S from "./styles";
/* import ChartsManHe1DETAILED from "../../components/ChartsManHe1DETAILED"; */
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function KPI() {
  return (
    <S.Container>
      <Header />

      <S.CHARTS>
        <h3>KPIs</h3>

       {/*  <ChartsManHe1DETAILED /> */}
      </S.CHARTS>

      <Footer />
    </S.Container>
  );
}

export default KPI;
