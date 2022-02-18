import React from "react";
import Item from "./Item.js";

export default function Itens({row}) {
  function creatRows() {
    let rows = [];
    for (let i = 0; i < row; i++) {
      rows.push(<Item> </Item>);
    }
    return rows;
  }
  return (
    <>
    <div style={{paddingTop: "5px"}}>
      {creatRows()}
    </div>
    </>
  );
}
