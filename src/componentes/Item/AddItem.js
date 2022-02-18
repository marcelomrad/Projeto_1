import React from "react";
import AddIcon from "../../imagem/add.png";
import "./Item.css";
export default function AddItem(props) {
  function AdicionaItem() {
    props.setRow(props.row + 1);
  }

  return <img className="item" src={AddIcon} alt="imagem" onClick={() => AdicionaItem()}></img>;
}
