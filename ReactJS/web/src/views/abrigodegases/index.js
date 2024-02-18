import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";

/* import CentralArg from "../../components/CentralArg";
import CentralArs from "../../components/CentralArs"; */
import CentralHe from "../../components/CentralHe";
/* import CentralN2 from "../../components/CentralN2";
import CentralO2 from "../../components/CentralO2";
import CentralArc from "../../components/CentralArc";
import CentralH2 from "../../components/CentralH2";
import CentralOxN from "../../components/CentralOxN"; */

import Footer from "../../components/Footer";

function AbrigoDeGases(props) {
  return (
    <S.Container>
      <Header />

     {/*  <CentralArc />
      <CentralN2 />
      <CentralArg />
      <CentralO2 />
      <CentralArs /> */}
      <CentralHe />
      {/* <CentralH2 />
      <CentralOxN /> */}

      <Footer />
    </S.Container>
  );
}

export default AbrigoDeGases;
