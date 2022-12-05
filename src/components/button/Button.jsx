import React from "react";
import { BaseButton, GoogleSigninButton, InvertedButton } from "./button-style";

export const BUTTON_TYPES_CLASSESS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSESS.base) =>
  ({
    [BUTTON_TYPES_CLASSESS.base]: BaseButton,
    [BUTTON_TYPES_CLASSESS.google]: GoogleSigninButton,
    [BUTTON_TYPES_CLASSESS.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton { ...otherProps }>{children}</CustomButton>;
};

export default Button;
