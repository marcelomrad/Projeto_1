import React, { useState } from "react";
import "./Item.css";
import RemoveIcon from "../../imagem/remove.svg";
import checkOff from "../../imagem/checkOff.svg";
import checkOn from "../../imagem/checkOn.svg"

export default function Item() {
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);

  return (
    <div className="item pointer" style={removed ? { display: "none" } : { display: "" }}>

       <img
        style={{ height: 20, margin: 2 }}
        src={check ? checkOn : checkOff}
        alt="check"
        onClick={() => { setCheck(!check)}}
      ></img>

      <input
        type="text"
        className="formulario auto"
        maxLength="50"
        style={
          check
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      ></input>

      <img
        className="pointer"
        style={{height: 11, margin: 3}}
        src={RemoveIcon}
        alt="x"
        onClick={() => setRemoved(!removed)}
      ></img>
    </div>
  );
}
