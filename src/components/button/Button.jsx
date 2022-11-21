import React from "react";
import "./Button.scss";

const BUTTON_TYPES_CLASSESS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`button-container ${BUTTON_TYPES_CLASSESS[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
