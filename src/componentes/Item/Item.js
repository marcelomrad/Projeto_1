import React, {useState} from "react";
import Checkbox from "../Checkbox.js";
import "./Item.css";
import RemoveItem from "../RemoveItem.js";
import { getByText } from "@testing-library/react";

export default function Item() {
  
  const [check, setCheck] = useState(false);

  const [removed, setRemoved] = useState(false);
  
  return (
    
     <div class="item" style={removed? {display:"none"} : {display:""}}>

      <input onClick = {()=>setCheck(!check)} type="checkbox" /> 

      <input type="text" class="formulario" style={check? {textDecorationLine:"line-through"} : {textDecorationLine:"none"}} ></input>

      <button onClick={()=>setRemoved(!removed)}>Remover Item</button>
    </div>
    
   
  );
}
