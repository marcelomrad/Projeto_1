import React, { useState } from "react";
import "./Item.css";
import RemoveIcon from "../../imagem/remove.png";
import checkOn from "../../imagem/checkOn.png";
import checkOff from "../../imagem/checkOff.png";

export default function Item(props) {
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);

  const [checked, setchecked] = useState(false);

  return (
    <div className="item pointer" style={removed ? { display: "none" } : { display: "" }}>
      <img
        style={{ height: 23 }}
        src={checked ? checkOn : checkOff}
        alt="check"
        onClick={() => { setchecked(!checked); setCheck(!check)}}
      ></img>

      <input
        type="text"
        className="formulario pointer"
        maxLength="50"
        style={
          check
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      ></input>

      <img
        className="pointer"
        style={{ height: 15 }}
        src={RemoveIcon}
        alt="x"
        onClick={() => setRemoved(!removed)}
      ></img>
    </div>
  );
}
