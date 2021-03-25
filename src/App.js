import React, { useState } from "react";
import { one, two, three } from "./conponents/req.js";
const App = () => {
  const [materials, setMaterials] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <div>
      <select
        onChange={(e) => {
          const selectedMat = e.target.value;
          setMaterials(selectedMat);
        }}
      >
        {one.map((mat) => (
          <option value={mat.value}>{mat.label}</option>
        ))}
      </select>
      <select
        onChange={(e) => {
          const selectedCol = e.target.value;
          setColor(selectedCol);
        }}
      >
        {two.map((col) => (
          <option value={col.value}>{col.label}</option>
        ))}
      </select>
      <select
        onChange={(e) => {
          const selectedSize = e.target.value;
          setSize(selectedSize);
        }}
      >
        {three.map((sz) => (
          <option value={sz.value}>{sz.label}</option>
        ))}
      </select>
      <div>
        <label>Material:</label>
        <text>{materials}</text>
      </div>
      <div>
        <label>Color:</label>
        <text>{color}</text>
      </div> <div>
        <label>Size:</label>
        <text>{size}</text>
      </div>
    </div>
  );
};
export default App;
