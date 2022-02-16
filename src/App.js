import React from "react";
import "./App.css";
import Caixa from "./componentes/Caixa/Caixa";
import Header from "./componentes/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Caixa />
    </React.Fragment>
  );
}

export default App;
