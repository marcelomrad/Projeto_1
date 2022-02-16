import React from "react";
import Item from "./item";

export default function Itens(props) {
  function creatRows() {
    let rows = [];
    for (let i = 0; i < props.row; i++) {
      rows.push(<Item texto="coisa"></Item>);
    }
    return rows;
  }
  return (
    <>
      <p>{props.row}</p>
      {creatRows()}
    </>
  );
}
