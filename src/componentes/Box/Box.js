import React from "react";
import "./Box.css";
import "../Item/Item.js";
import AddItem from "../Item/AddItem";
import Item from "../Item/Item.js";
import { useState } from "react";

export default function Box() {

  function creatRows() {
    let rows = [];
    for (let i = 0; i < row; i++) {
      rows.push(<Item row={row} setRow={setRow} > </Item>);
    }
    return rows;
  }

  const [row, setRow] = useState(1);

  return (
    <div>
     <div style={{paddingTop: "5px"}}>
      {creatRows()}
    </div>
      
      <AddItem row={row} setRow={setRow} />
    </div>
  );
}
