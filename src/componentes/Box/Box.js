import React from "react";
import "./Box.css";
import "../Item/Item.js";
import AddItem from "../Item/AddItem";
import Itens from "../Item/Itens";
import { useState } from "react";

export default function Box() {
  const [row, setRow] = useState(1);

  return (
    <div>
      <Itens row={row} />
      <AddItem row={row} setRow={setRow} />
    </div>
  );
}
