import React, { useState } from "react";
import "./Item.css";
import RemoveIcon from "../../imagem/xizinho.png";

export default function Item() {
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);
  return (
    <div className="item" style={removed ? { display: "none" } : { display: "" }}>
      <input onClick={() => setCheck(!check)} type="checkbox" />

      <input
        type="text"
        className="formulario"
        maxLength="50"
        style={
          check
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      ></input>

      <img
        style={{ height: 15 }}
        src={RemoveIcon}
        alt="x"
        onClick={() => {setRemoved(true) }}
      ></img>
    </div>
  );
}
