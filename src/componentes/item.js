import React from "react";
import Checkbox from "./Checkbox.js";
import "./item.css";
import RemoveItem from "./RemoveItem.js";

export default function Item(props) {
  return (
    <div class="item">
      <Checkbox /> <h2>{props.texto}</h2> <RemoveItem />
    </div>
  );
}
