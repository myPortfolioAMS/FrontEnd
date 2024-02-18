import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../views/Logout";
import NotFound from "../views/NotFound";
import AbrigoDeGases from "../views/abrigodegases";
import Manometers from "../views/manometers";
import Config from "../views/Config";
import Mensagens from "../views/mensagens";
import Charts from "../views/charts";
import KPI from "../views/KPI";
import QrCode from "../views/QrCode";
import UserProfile from "../views/UserProfile";

import PrivateRoutes from "../routes/PrivateRoutes";

import {
  getUser,
  getToken,
  setUserSession,
  removeUserSession,
} from "../service/AuthService";

import axios from "axios";

const verifyTokenAPIURL =
  "https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/verify";

function MyRoutes() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (
      token === "undefined" ||
      token === undefined ||
      token === null ||
      token === "" ||
      !token
    ) {
      return;
    }

    const user_full = getUser();
    if (
      user_full === "undefined" ||
      user_full === undefined ||
      user_full === null ||
      user_full === "" ||
      !user_full
    ) {
      return;
    }

    console.log("user_full: " + user_full);

    const requestConfig = {
      headers: {
        "x-api-key": "sxqmhhONeJ88nV7OIQAnq8LhaCMVhBEX2hHgOwZ4",
      },
    };

    let userX = user_full.username;

    console.log("userX: " + userX);

    let tokenX = token.replace('"', "").replace('"', "");

    console.log("tokenX: " + tokenX);

    const requestBody = {
      user: { username: user_full.username },
      token: tokenX,
    };

    axios
      .post(verifyTokenAPIURL, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        setIsAuthenticating(false);
      })
      .catch(() => {
        removeUserSession();
        setIsAuthenticating(false);
      });
  }, []);

  const token = getToken();
  if (isAuthenticating && token) {
    return <div className="content">Autenticando Usuário...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/AbrigoDeGases" element={<AbrigoDeGases />} exact />

          <Route path="/Manometers" element={<Manometers />} exact />
          <Route path="/Mensagens" element={<Mensagens />} exact />
          <Route path="/Charts" element={<Charts />} exact />
          <Route path="/KPI" element={<KPI />} exact />
          <Route path="/Config" element={<Config />} exact />

          <Route path="/QrCode" element={<QrCode />} exact />
          <Route path="/UserProfile" element={<UserProfile />} exact />
        </Route>

        <Route path="/Logout" element={<Logout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
