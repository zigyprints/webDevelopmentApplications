import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#FF6600",
        color: " #fff",
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
