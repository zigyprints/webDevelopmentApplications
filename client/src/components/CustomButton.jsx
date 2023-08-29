import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#FF6600",
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: "#FF6600",
        color: "#FF6600",
      };
    } else if (type === "3d-mover") {
      return {
        backgroundColor: "#FF6600",
        color: getContrastingColor(snap.color),
        // "background-image": URL("./assets/file.png"),
      };
    }
  };
  console.log("type", type);
  console.log(title);
  return (
    // <h1>buttn</h1>
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
