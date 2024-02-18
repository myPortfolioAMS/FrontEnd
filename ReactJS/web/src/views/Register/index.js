import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import RegisterC from "../../components/RegisterC";


import Footer from "../../components/Footer";

function Register() {
  return (
    <S.Container>

        <S.Register>
     
       <RegisterC />
    
        </S.Register>
      <Footer />
    </S.Container>
  );
}

export default Register;
