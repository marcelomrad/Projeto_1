import React from "react";
import "./App.css";
import Caixa from "./componentes/caixa";
import Header from "./componentes/header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Caixa />
    </React.Fragment>
  );
}

export default App;
