import React from "react";
import * as S from "./styles";

/* import UserProfileComp from "../../components/UserProfileComp"; */
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function UserProfile() {
  return (
    <S.Container>
      <Header />

     {/*  <UserProfileComp /> */}

      <Footer />
    </S.Container>
  );
}

export default UserProfile;
