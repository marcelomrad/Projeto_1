import React from "react";
import "./Caixa.css";
import "../Item/Item.js";
import "../Checkbox.js";
import AddItem from "../AddItem";
import Itens from "../Itens";
import { useState } from "react";

export default function Caixa() {
  const [row, setRow] = useState(1);

  return (
    <div class="box">
      <Itens row={row} />
      <AddItem setRow={setRow} row={row} />
    </div>
  );
}
