import React from "react";
import AddIcon from "../../imagem/add.svg";
import "./Item.css";
export default function AddItem(props) {
  function AdicionaItem() {
    props.setRow(props.row + 1);
  }

  return <img  
          className="item pointer" 
          src={AddIcon} alt="imagem"
          onClick={() => AdicionaItem()}
          style={{height: 24}}>
          </img>;
}
