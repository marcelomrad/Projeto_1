import React from "react";
import Item from "./Item/Item";

export default function Itens(props) {
  function creatRows() {
    let rows = [];
    for (let i = 0; i < props.row; i++) {
      rows.push(<Item > </Item>);
    }
    return rows;
  }
  return (
    <>
      {/* <p>{props.row}</p> */}
      
      {creatRows()}
    </>
  );
}
