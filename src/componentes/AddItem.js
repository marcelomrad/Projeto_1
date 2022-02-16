import React, { useState } from "react";

export default function AddItem(props) {
  function AdicionaItem() {
    props.setRow(props.row + 1);
  }

  return <button onClick={() => AdicionaItem()}>Clique</button>;
}
