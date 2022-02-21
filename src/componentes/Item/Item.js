import React, { useEffect, useState } from "react";
import "./Item.css";
import RemoveIcon from "../../imagem/remove.svg";
import checkOff from "../../imagem/checkOff.svg";
import checkOn from "../../imagem/checkOn.svg"

export default function Item() {
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);

  const [checkedIcon, setcheckedIcon] = useState(false);

  return (
    <div className="item pointer" style={removed ? { display: "none" } : { display: "" }}>
      
       <img
        style={{ height: 20, margin: 2 }}
        src={checkedIcon ? checkOn : checkOff}
        alt="check"
        onClick={() => {setcheckedIcon(!checkedIcon); setCheck(!check)}}
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
