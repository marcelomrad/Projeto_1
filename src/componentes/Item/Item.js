import React, { useState } from "react";
import "./Item.css";
import RemoveIcon from "../../imagem/xizinho.png";

export default function Item({props}) {
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);
  // console.log(props)
  return (
    <div class="item" style={removed ? { display: "none" } : { display: "" }}>
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
        onClick={() => {setRemoved(!removed); props.setRow(props.row - 1); console.log(props.row) }}
      ></img>
    </div>
  );
}
