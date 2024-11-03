import React from "react";
import "./CustomButton.css";

const CustomButton = ({ size = "medium", children, onClick }) => {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
