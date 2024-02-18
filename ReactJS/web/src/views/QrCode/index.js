import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";
/* import QrCodeView from "../../components/QrCode"; */
import Footer from "../../components/Footer";

function QrCode() {
  return (
    <S.Container>
      <Header />

   {/*    <QrCodeView /> */}

      <Footer />
    </S.Container>
  );
}

export default QrCode;
