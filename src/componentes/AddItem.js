import React from "react";
import AddIcon from "../imagem/outline_add_circle_outline_black_24dp.png";

export default function AddItem(props) {
  function AdicionaItem() {
    props.setRow(props.row + 1);
  }

  return <img src={AddIcon} alt="imagem" onClick={() => AdicionaItem()}></img>;
}
