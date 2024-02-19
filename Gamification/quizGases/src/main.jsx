import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizProvider } from "./context/quiz"; // Prove o context dos components (covers entire App - App is encapsulated)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

